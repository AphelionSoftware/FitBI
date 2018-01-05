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

namespace FitAPIFunctions
{
    public static class LatestTimestamps
    {
        [FunctionName("LatestTimestamps")]
        public static HttpResponseMessage Run([HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = "setup/LatestTimestamps/{pUserID}")]HttpRequestMessage req, string pUserID, TraceWriter log)
        {
            LatestTimestampsValues objUpdates = new LatestTimestampsValues();
            log.Info("C# HTTP trigger function processed a request.");
            var sqlConnectionString =
                ConfigurationManager
                   .ConnectionStrings["FitDB_conn"].ConnectionString;
            var sp_Latest_Updates = ConfigurationManager.AppSettings["sp_Latest_Updates"];
            string JSON = "Error occurred";
            HttpStatusCode statusCode = HttpStatusCode.OK;
            try
            {
                using (SqlConnection conn = new SqlConnection(sqlConnectionString))
                {
                    conn.Open();
                    using (var multi = conn.QueryMultiple(sp_Latest_Updates, new { UserID = System.Convert.ToInt32(pUserID) },
                                         commandType: CommandType.StoredProcedure))
                    {
                        objUpdates.LatestTimestamps = multi.Read<dynamic>().ToList();
                        JSON = JsonConvert.SerializeObject(objUpdates);
                    }
                }
                //JObject 
                // Fetching the name from the path parameter in the request URL

            }
            catch (System.Exception ex)
            {
                log.Error("C# HTTP trigger function encountered an error ", ex);
                statusCode = HttpStatusCode.InternalServerError;
            }
            //Always return to not leave the client hanging
            return req.CreateResponse(statusCode, JSON);
        }
    }
}
