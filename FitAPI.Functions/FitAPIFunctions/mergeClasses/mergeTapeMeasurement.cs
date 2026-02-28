
using System.Linq;
using System.Net;

using System.Data;
using Microsoft.Data.SqlClient;

using Dapper;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.Functions.Worker.Http;
using Microsoft.Extensions.Logging;
using System.Threading.Tasks;
using FitAPIFunctions.Schema;
using System.Collections.Generic;


namespace FitAPIFunctions
{
    public class mergeTapeMeasurement
    {
        private readonly ILogger<mergeTapeMeasurement> _logger;

        public mergeTapeMeasurement(ILogger<mergeTapeMeasurement> logger)
        {
            _logger = logger;
        }
	    [Function("mergeTapeMeasurement")]
        public async Task<HttpResponseData> Run([HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = "merge/TapeMeasurement")]HttpRequestData req)
		{
		
            var postData = await req.ReadAsStringAsync();
            
            var container = JsonConvert.DeserializeObject<FitAPIFunctions.Schema.TapeMeasurementContainer>(postData);

		_logger.LogInformation("C# HTTP trigger function processed a request.");
            var sqlConnectionString =
                Environment.GetEnvironmentVariable("FitDB_conn")!;
            string JSON = "Running API call";
            HttpStatusCode statusCode = HttpStatusCode.OK;
            try
            {
			using (SqlConnection conn = new SqlConnection(sqlConnectionString))
                {
                    conn.Open();
                    conn.Execute("API.merge_Stats_TapeMeasurement",
                    new
                    {
                        tvp_TapeMeasurement = container.TapeMeasurement.AsTableValuedParameter("Stats.tvp_TapeMeasurement"
						, new List<string>(new string[] { "Active", "BodyPartID", "CreatedAt", "Deleted", "ID", "PersonID", "SideMeasurementTypeID", "TapeLength", "TapeMeasurementID", "UpdatedAt", "Version" })
						)
                    },
                    commandType: CommandType.StoredProcedure);                    
                }
			}
            catch (System.Exception ex)
            {
				JSON = "Error occurred";
                _logger.LogError(ex, "C# HTTP trigger function encountered an error ");
                statusCode = HttpStatusCode.InternalServerError;

            }
            //Always return to not leave the client hanging
            var response = req.CreateResponse(statusCode);
            response.Headers.Add("Content-Type", "application/json; charset=utf-8");
            await response.WriteStringAsync(JSON);
            return response;
            //  return;
		}
	}
}
	