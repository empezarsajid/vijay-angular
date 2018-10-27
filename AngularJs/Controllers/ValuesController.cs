using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AngularJs.Entity.Classes;

using Google.Cloud.Logging.V2;
using Google.Cloud.Logging.Type;
using Google.Api;
using Serilog;

namespace AngularJs.Controllers
{
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {

        private readonly vijayContext _context;

        public ValuesController(vijayContext context)
        {
            _context = context;
        }


        // GET api/values
        [HttpGet]
        public IEnumerable<string> Get()
        {
            Log.Information("Hello, world! From Get");

            Log.Information("Logging from get");

            try{
                    throw new ArgumentNullException();
            }catch(Exception ex){
                Log.Error(ex, "This is an exception");
            }
            // var gcpCredentaialPath = "client_secret.json";
            // System.Environment.SetEnvironmentVariable("GOOGLE_APPLICATION_CREDENTIALS", gcpCredentaialPath);

            // string projectId = "vijay-angular";

            // // Instantiates a client.
            // var client = LoggingServiceV2Client.Create();

            // // Prepare new log entry.
            // LogEntry logEntry = new LogEntry();
            // string logId = "my-log";
            // LogName logName = new LogName(projectId, logId);
            // LogNameOneof logNameToWrite = LogNameOneof.From(logName);
            // logEntry.LogName = logName.ToString();
            // logEntry.Severity = LogSeverity.Info;

            // // Create log entry message.
            // string message = "Hello World 123456!";
            // string messageId = DateTime.Now.Millisecond.ToString();
            // Type myType = typeof(Program);
            // string entrySeverity = logEntry.Severity.ToString().ToUpper();
            // logEntry.TextPayload =
            // $"{messageId} {entrySeverity} {myType.Namespace}.LoggingSample - {message}";

            // // Set the resource type to control which GCP resource the log entry belongs to.
            // // See the list of resource types at:
            // // https://cloud.google.com/logging/docs/api/v2/resource-list
            // // This sample uses resource type 'global' causing log entries to appear in the 
            // // "Global" resource list of the Developers Console Logs Viewer:
            // // https://console.cloud.google.com/logs/viewer
            // MonitoredResource resource = new MonitoredResource();
            // resource.Type = "global";

            // // Create dictionary object to add custom labels to the log entry.
            // IDictionary<string, string> entryLabels = new Dictionary<string, string>();
            // entryLabels.Add("size", "large");
            // entryLabels.Add("color", "red");

            // // Add log entry to collection for writing. Multiple log entries can be added.
            // IEnumerable<LogEntry> logEntries = new LogEntry[] { logEntry };

            // // Write new log entry.
            // client.WriteLogEntries(logNameToWrite, resource, entryLabels, logEntries);
            // var users = _context.Users.ToList();
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
