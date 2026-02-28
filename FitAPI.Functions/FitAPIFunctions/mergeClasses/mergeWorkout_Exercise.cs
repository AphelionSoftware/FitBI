
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
    public class mergeWorkout_Exercise
    {
        private readonly ILogger<mergeWorkout_Exercise> _logger;

        public mergeWorkout_Exercise(ILogger<mergeWorkout_Exercise> logger)
        {
            _logger = logger;
        }
	    [Function("mergeWorkout_Exercise")]
        public async Task<HttpResponseData> Run([HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = "merge/Workout_Exercise")]HttpRequestData req)
		{
		
            var postData = await req.ReadAsStringAsync();
            
            var container = JsonConvert.DeserializeObject<FitAPIFunctions.Schema.Workout_ExerciseContainer>(postData);

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
                    conn.Execute("API.merge_Program_Workout_Exercise",
                    new
                    {
                        tvp_Workout_Exercise = container.Workout_Exercise.AsTableValuedParameter("Program.tvp_Workout_Exercise"
						, new List<string>(new string[] { "Active", "CreatedAt", "Deleted", "ExerciseID", "GoalNarrative", "ID", "PersonID", "UpdatedAt", "Version", "Workout_ExerciseID", "WorkoutID" })
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
	