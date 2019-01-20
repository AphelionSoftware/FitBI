
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;
using Dapper;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.Azure.WebJobs.Host;
using System.Threading.Tasks;
using FitAPIFunctions.Schema;
using System.Collections.Generic;


namespace FitAPIFunctions
{
    public static class mergeDailyMeasurement
    {
	    [FunctionName("mergeDailyMeasurement")]
        public static async Task<HttpResponseMessage> Run([HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = "merge/DailyMeasurement")]HttpRequestMessage req, TraceWriter log)
		{

			string JSON = "Running API call";
            HttpStatusCode statusCode = HttpStatusCode.OK;
			try
            {
            var postData = await req.Content.ReadAsStringAsync();
            
            var container = JsonConvert.DeserializeObject<FitAPIFunctions.Schema.DailyMeasurementContainer>(postData);

		log.Info("C# HTTP trigger function processed a request.");
            var sqlConnectionString =
                ConfigurationManager
                   .ConnectionStrings["FitDB_conn"].ConnectionString;
            
            
			using (SqlConnection conn = new SqlConnection(sqlConnectionString))
                {
                    conn.Open();
                    conn.Execute("API.merge_Stats_DailyMeasurement",
                    new
                    {
                        tvp_DailyMeasurement = container.DailyMeasurement.AsTableValuedParameter("Stats.tvp_DailyMeasurement"
						, (new string[] { "Active", "BellyButtonCircumference", "BicepCircumference", "BodyFatPercentage", "BonePercentage", "CalvesCircumference", "ChestCircumference", "CreatedAt", "DailyMeasurementID", "Deleted", "HipCircumference", "ID", "MeasurementDate", "MusclePercentage", "NeckCircumference", "PercentMeasurementTypeID", "PersonID", "QuadCircumference", "UnitID", "UpdatedAt", "Version", "WaistCircumference", "WaterPercentage", "Weight" })
						)
                    },
                    commandType: CommandType.StoredProcedure);                    
                }
			}
            catch (System.Exception ex)
            {
				JSON = "Error occurred: " + ex.Message;
                log.Error("C# HTTP trigger function encountered an error ", ex);
                statusCode = HttpStatusCode.InternalServerError;

            }
            //Always return to not leave the client hanging
            return req.CreateResponse(statusCode, JSON);
            //  return;
		}
	}
}
	