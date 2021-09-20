using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;

namespace Api
{
    public static class Configurations
    {
        public static IServiceCollection AddApi(this IServiceCollection services)
        {
            services.AddCors();
            
            services.AddMvc(options =>
            {
                options.EnableEndpointRouting = false;
            })
                .AddNewtonsoftJson()
                .AddControllersAsServices();

            return services;
        }

        public static void UseApi(this IApplicationBuilder app)
        {
            app.UseCors(builder => builder.AllowAnyOrigin()
                .AllowAnyHeader()
                .AllowAnyMethod());

            app.UseMvc();
        }
    }
}