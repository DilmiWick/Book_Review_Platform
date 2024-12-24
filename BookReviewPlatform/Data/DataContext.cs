using Microsoft.EntityFrameworkCore;

public class DataContext(DbContextOptions<DataContext> options) : DbContext(options)
{
    public required DbSet<User> Users { get; set; }
    public required DbSet<Book> Books { get; set; }
    public required DbSet<Review> Reviews { get; set; }
}
