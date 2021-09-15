using Entities;
using Microsoft.EntityFrameworkCore;

namespace Db.Implementations
{
    public class SqlContext : DbContext
    {
        public DbSet<User> Users { get; set; }

        public SqlContext(DbContextOptions<SqlContext> options) : base(options) {}
    }
}