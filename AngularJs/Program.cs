using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Serilog;
namespace AngularJs
{
    public class Program
    {
        public static void Main(string[] args)
        {
            // var gcpCredentaialPath = "client_secret.json";
            // System.Environment.SetEnvironmentVariable("GOOGLE_APPLICATION_CREDENTIALS", gcpCredentaialPath);
             BuildWebHost(args).Run();
        }

        public static IWebHost BuildWebHost(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>()
                .Build();
    }
}
