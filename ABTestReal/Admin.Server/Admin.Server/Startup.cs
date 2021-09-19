using Api;
using Db;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace App
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDb()
                    .AddApi();
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.MigrateDb();
            app.UseApi();
        }
    }
}