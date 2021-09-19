using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Db.Implementations
{
    class SqlContextFactory : IDesignTimeDbContextFactory<SqlContext>
    {
        public SqlContext CreateDbContext(string[] args)
        {
            var builder = new DbContextOptionsBuilder<SqlContext>().UseNpgsql("Host=chunee.db.elephantsql.com;Port=5432;Database=fczuaaip;Username=fczuaaip;Password=JRqLBkHIysayAiMEkuU6bqeezCTwhpmz");

            return new SqlContext(builder.Options);
        }
    }
}
