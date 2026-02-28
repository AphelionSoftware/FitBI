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
    public class Init
    {
        private readonly ILogger<Init> _logger;

        public Init(ILogger<Init> logger)
        {
            _logger = logger;
        }

        [Function("Init")]
        public async Task<HttpResponseData> Run(
            [HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = "setup/Init/{pUserID}")] HttpRequestData req,
            string pUserID)
        {
            InitValues objInit = new InitValues();
            _logger.LogInformation("C# HTTP trigger function processed a request.");

            var sqlConnectionString = Environment.GetEnvironmentVariable("FitDB_conn")!;
            var sp_Init = Environment.GetEnvironmentVariable("sp_Init")!;
            string JSON = "Error occurred";
            HttpStatusCode statusCode = HttpStatusCode.OK;

            try
            {
                using (SqlConnection conn = new SqlConnection(sqlConnectionString))
                {
                    conn.Open();
                    using (var multi = conn.QueryMultiple(sp_Init,
                        new { UserID = Convert.ToInt32(pUserID) },
                        commandType: CommandType.StoredProcedure))
                    {
                        objInit.Exercise = multi.Read<dynamic>().ToList();
                        objInit.ExerciseType = multi.Read<dynamic>().ToList();
                        objInit.Plan = multi.Read<dynamic>().ToList();
                        objInit.Workout = multi.Read<dynamic>().ToList();
                        objInit.Workout_Exercise = multi.Read<dynamic>().ToList();
                        objInit.WorkoutStage = multi.Read<dynamic>().ToList();
                        objInit.Metric = multi.Read<dynamic>().ToList();
                        objInit.Person = multi.Read<dynamic>().ToList();
                        objInit.SkinfoldMeasurement = multi.Read<dynamic>().ToList();
                        objInit.TapeMeasurement = multi.Read<dynamic>().ToList();
                        objInit.WeightMeasurement = multi.Read<dynamic>().ToList();
                        JSON = JsonConvert.SerializeObject(objInit);
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
