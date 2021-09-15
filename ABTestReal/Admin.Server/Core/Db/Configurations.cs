using Db.Implementations;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;

namespace Db
{
    public static class Configurations
    {
        public static IServiceCollection AddDb(this IServiceCollection services)
        {
            services.AddDbContext<SqlContext>(options => options.UseNpgsql(""), ServiceLifetime.Transient);

            return services;
        }
    }
}