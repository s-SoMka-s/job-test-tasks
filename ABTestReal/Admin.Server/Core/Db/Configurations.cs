using Db.Implementations;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;

namespace Db
{
    public static class Configurations
    {
        public static IServiceCollection AddDb(this IServiceCollection services)
        {
            services.AddDbContext<SqlContext>(options => options.UseNpgsql("Host=chunee.db.elephantsql.com;Port=5432;Database=fczuaaip;Username=fczuaaip;Password=JRqLBkHIysayAiMEkuU6bqeezCTwhpmz"), ServiceLifetime.Transient);
            return services;
        }
    }
}