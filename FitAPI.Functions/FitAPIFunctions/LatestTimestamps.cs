using System.Data;
using System.Net;
using Dapper;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.Functions.Worker.Http;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace FitAPIFunctions
{
    public class LatestTimestamps
    {
        private readonly ILogger<LatestTimestamps> _logger;

        public LatestTimestamps(ILogger<LatestTimestamps> logger)
        {
            _logger = logger;
        }

        [Function("LatestTimestamps")]
        public async Task<HttpResponseData> Run(
            [HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = "setup/LatestTimestamps/{pUserID}")] HttpRequestData req,
            string pUserID)
        {
            LatestTimestampsValues objUpdates = new LatestTimestampsValues();
            _logger.LogInformation("C# HTTP trigger function processed a request.");

            var sqlConnectionString = Environment.GetEnvironmentVariable("FitDB_conn")!;
            var sp_LatestTimestamps = Environment.GetEnvironmentVariable("sp_LatestTimestamps")!;
            string JSON = "Error occurred";
            HttpStatusCode statusCode = HttpStatusCode.OK;
            string step = "1";

            try
            {
                using (SqlConnection conn = new SqlConnection(sqlConnectionString))
                {
                    step = "2";
                    conn.Open();
                    step = "3";
                    using (var multi = conn.QueryMultiple(sp_LatestTimestamps,
                        new { UserID = Convert.ToInt32(pUserID) },
                        commandType: CommandType.StoredProcedure))
                    {
                        step = "4";
                        objUpdates.LatestTimestamps = multi.Read<dynamic>().ToList();
                        step = "5";
                        JSON = JsonConvert.SerializeObject(objUpdates);
                    }
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "C# HTTP trigger function encountered an error");
                statusCode = HttpStatusCode.InternalServerError;
                JSON = ex.Message + " " + step + " " + sqlConnectionString + " " + sp_LatestTimestamps;
            }

            var response = req.CreateResponse(statusCode);
            response.Headers.Add("Content-Type", "application/json; charset=utf-8");
            await response.WriteStringAsync(JSON);
            return response;
        }
    }
}
