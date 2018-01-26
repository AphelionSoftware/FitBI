
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
    public static class mergeWorkout_Exercise
    {
	    [FunctionName("mergeWorkout_Exercise")]
        public static async Task<HttpResponseMessage> Run([HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = "merge/Workout_Exercise")]HttpRequestMessage req, TraceWriter log)
		{
            var postData = await req.Content.ReadAsStringAsync();
            
            var container = JsonConvert.DeserializeObject<FitAPIFunctions.Schema.Workout_ExerciseContainer>(postData);

		log.Info("C# HTTP trigger function processed a request.");
            var sqlConnectionString =
                ConfigurationManager
                   .ConnectionStrings["FitDB_conn"].ConnectionString;
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
	