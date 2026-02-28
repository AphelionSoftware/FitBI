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

namespace FitAPIFunctions
{
    public static class LatestTimestamps
    {
        [Function("LatestTimestamps")]
        public static HttpResponseData Run([HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = "setup/LatestTimestamps/{pUserID}")]HttpRequestData req, string pUserID)
        {
            LatestTimestampsValues objUpdates = new LatestTimestampsValues();
            _logger.LogInformation("C# HTTP trigger function processed a request.");
            var sqlConnectionString =
                Environment.GetEnvironmentVariable("FitDB_conn")!;
            var sp_Latest_Updates = Environment.GetEnvironmentVariable("sp_Latest_Updates")!;
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
                _logger.LogError(ex, "C# HTTP trigger function encountered an error ");
                statusCode = HttpStatusCode.InternalServerError;
            }
            //Always return to not leave the client hanging
            var response = req.CreateResponse(statusCode);
            response.Headers.Add("Content-Type", "application/json; charset=utf-8");
            await response.WriteStringAsync(JSON);
            return response;
        }
    }
}
