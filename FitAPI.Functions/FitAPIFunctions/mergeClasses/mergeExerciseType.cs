
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
    public static class mergeExerciseType
    {
	    [FunctionName("mergeExerciseType")]
        public static async Task Run([HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = "merge/ExerciseType")]HttpRequestMessage req, TraceWriter log)
		{
		StreamContent content = (StreamContent)req.Content;
            var postData = await content.ReadAsStringAsync();
            
            var container = JsonConvert.DeserializeObject<FitAPIFunctions.Schema.ExerciseTypeContainer>(postData);

		log.Info("C# HTTP trigger function processed a request.");
            var sqlConnectionString =
                ConfigurationManager
                   .ConnectionStrings["FitDB_conn"].ConnectionString;
            string JSON = "Error occurred";
            HttpStatusCode statusCode = HttpStatusCode.OK;
            try
            {
			using (SqlConnection conn = new SqlConnection(sqlConnectionString))
                {
                    conn.Open();
                    conn.Execute("API.merge_Exercise_ExerciseType",
                    new
                    {
                        tvp_ExerciseType = container.ExerciseType.AsTableValuedParameter("Exercise.tvp_ExerciseType"
						, new List<string>(new string[] { "Active", "Code", "CreatedAt", "Deleted", "ExerciseTypeID", "ID", "Name", "ParentExerciseTypeID", "PersonID", "UpdatedAt", "Version" })
						)
                    },
                    commandType: CommandType.StoredProcedure);                    
                }
			}
            catch (System.Exception ex)
            {
                log.Error("C# HTTP trigger function encountered an error ", ex);
                statusCode = HttpStatusCode.InternalServerError;

            }
            //Always return to not leave the client hanging
            //return req.CreateResponse(statusCode, JSON);
            return;
		}
	}
}
	