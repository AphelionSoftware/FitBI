﻿
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
    public static class mergeSkinfoldMeasurement
    {
	    [FunctionName("mergeSkinfoldMeasurement")]
        public static async Task<HttpResponseMessage> Run([HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = "merge/SkinfoldMeasurement")]HttpRequestMessage req, TraceWriter log)
		{

			string JSON = "Running API call";
            HttpStatusCode statusCode = HttpStatusCode.OK;
			try
            {
            var postData = await req.Content.ReadAsStringAsync();
            
            var container = JsonConvert.DeserializeObject<FitAPIFunctions.Schema.SkinfoldMeasurementContainer>(postData);

		log.Info("C# HTTP trigger function processed a request.");
            var sqlConnectionString =
                ConfigurationManager
                   .ConnectionStrings["FitDB_conn"].ConnectionString;
            
            
			using (SqlConnection conn = new SqlConnection(sqlConnectionString))
                {
                    conn.Open();
                    conn.Execute("API.merge_Stats_SkinfoldMeasurement",
                    new
                    {
                        tvp_SkinfoldMeasurement = container.SkinfoldMeasurement.AsTableValuedParameter("Stats.tvp_SkinfoldMeasurement"
						, (new string[] { "Active", "BodyPartID", "CreatedAt", "Deleted", "ID", "MeasurementDate", "PersonID", "SideMeasurementTypeID", "SkinfoldMeasurementID", "SkinfoldThickness", "UpdatedAt", "Version" })
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
	