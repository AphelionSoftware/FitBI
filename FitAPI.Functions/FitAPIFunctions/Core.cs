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
    public class Core
    {
        private readonly ILogger<Core> _logger;

        public Core(ILogger<Core> logger)
        {
            _logger = logger;
        }

        [Function("Core")]
        public async Task<HttpResponseData> Run(
            [HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = "setup/Core/{pUserID}")] HttpRequestData req,
            string pUserID)
        {
            CoreValues objCore = new CoreValues();
            _logger.LogInformation("C# HTTP trigger function processed a request.");

            var sqlConnectionString = Environment.GetEnvironmentVariable("FitDB_conn")!;
            var sp_Core = Environment.GetEnvironmentVariable("sp_Core")!;
            string JSON = "Error occurred";
            HttpStatusCode statusCode = HttpStatusCode.OK;

            try
            {
                using (SqlConnection conn = new SqlConnection(sqlConnectionString))
                {
                    conn.Open();
                    using (var multi = conn.QueryMultiple(sp_Core,
                        new { UserID = Convert.ToInt32(pUserID) },
                        commandType: CommandType.StoredProcedure))
                    {
                        objCore.BodyPart = multi.Read<dynamic>().ToList();
                        objCore.BodyPartType = multi.Read<dynamic>().ToList();
                        objCore.MeasurementType = multi.Read<dynamic>().ToList();
                        objCore.MeasurementTypeCategory = multi.Read<dynamic>().ToList();
                        objCore.Unit = multi.Read<dynamic>().ToList();
                        objCore.UnitType = multi.Read<dynamic>().ToList();
                        JSON = JsonConvert.SerializeObject(objCore);
                    }
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "C# HTTP trigger function encountered an error");
                statusCode = HttpStatusCode.InternalServerError;
            }

            var response = req.CreateResponse(statusCode);
            response.Headers.Add("Content-Type", "application/json; charset=utf-8");
            await response.WriteStringAsync(JSON);
            return response;
        }
    }
}
