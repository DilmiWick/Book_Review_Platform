public class Review
{
    public int Id { get; set; }
    public int UserId { get; set; }
    public int BookId { get; set; }
    public int Rating { get; set; }
    public string ReviewText { get; set; } = string.Empty;
    public DateTime DatePosted { get; set; }

    public User? User { get; set; }
    public Book? Book { get; set; }
}
