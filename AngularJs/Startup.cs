using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using AngularJs.Entity.Classes;
using System.Data;
using MySql.Data.MySqlClient;
using System.Security.Cryptography.X509Certificates;
using Microsoft.EntityFrameworkCore;
namespace AngularJs
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();
            var connectionString = new MySqlConnectionStringBuilder(
                Configuration["CloudSql:ConnectionString"])
            {
                // Connecting to a local proxy that does not support ssl.
                SslMode = MySqlSslMode.None,
            };
            services.AddDbContext<vijayContext>(options =>
              options.UseMySql(connectionString.ConnectionString));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseMvc();
        }
    }
}
