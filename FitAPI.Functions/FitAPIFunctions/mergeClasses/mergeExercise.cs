
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
    public class mergeExercise
    {
        private readonly ILogger<mergeExercise> _logger;

        public mergeExercise(ILogger<mergeExercise> logger)
        {
            _logger = logger;
        }
	    [Function("mergeExercise")]
        public async Task<HttpResponseData> Run([HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = "merge/Exercise")]HttpRequestData req)
		{
		
            var postData = await req.ReadAsStringAsync();
            
            var container = JsonConvert.DeserializeObject<FitAPIFunctions.Schema.ExerciseContainer>(postData);

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
                    conn.Execute("API.merge_Exercise_Exercise",
                    new
                    {
                        tvp_Exercise = container.Exercise.AsTableValuedParameter("Exercise.tvp_Exercise"
						, new List<string>(new string[] { "Active", "Code", "CreatedAt", "Deleted", "Description", "ExerciseID", "ExerciseTypeID", "ID", "Name", "ParentExerciseID", "PersonID", "UpdatedAt", "Version" })
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
	