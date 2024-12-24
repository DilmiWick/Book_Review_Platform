using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[Route("api/reviews")]
[ApiController]
public class ReviewsController : ControllerBase
{
    private readonly DataContext _context;

    public ReviewsController(DataContext context)
    {
        _context = context;
    }

    [HttpPost]
    public async Task<IActionResult> AddReview([FromBody] Review review)
    {
        _context.Reviews.Add(review);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetReviews), new { bookId = review.BookId }, review);
    }

    [HttpGet("{bookId}")]
    public async Task<IActionResult> GetReviews(int bookId)
    {
        var reviews = await _context.Reviews.Where(r => r.BookId == bookId).ToListAsync();
        return Ok(reviews);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateReview(int id, [FromBody] Review review)
    {
        var existingReview = await _context.Reviews.FindAsync(id);
        if (existingReview == null)
            return NotFound();

        existingReview.Rating = review.Rating;
        existingReview.ReviewText = review.ReviewText;

        await _context.SaveChangesAsync();
        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteReview(int id)
    {
        var review = await _context.Reviews.FindAsync(id);
        if (review == null)
            return NotFound();

        _context.Reviews.Remove(review);
        await _context.SaveChangesAsync();
        return NoContent();
    }
}
