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
using System.Reflection;
using System;

namespace FitAPIFunctions
{
    public class mergeExercise3
    {
        private readonly ILogger<mergeExercise3> _logger;

        public mergeExercise3(ILogger<mergeExercise3> logger)
        {
            _logger = logger;
        }
        

        [Function("mergeExercise3")]
        public async Task<HttpResponseData> Run([HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = "merge/Exercise3")]HttpRequestData req)
        {
            
            var postData = await req.ReadAsStringAsync();

            ExerciseContainer result = JsonConvert.DeserializeObject<ExerciseContainer>(postData);

            _logger.LogInformation("C# HTTP trigger function processed a request.");
            var sqlConnectionString =
                Environment.GetEnvironmentVariable("FitDB_conn")!;
            string JSON = "Error occurred";
            HttpStatusCode statusCode = HttpStatusCode.OK;
            try
            {
                using (SqlConnection conn = new SqlConnection(sqlConnectionString))
                {
                    var dataTable = new DataTable();
                    var columns = typeof(Exercise).GetProperties(BindingFlags.Public);
                    foreach (PropertyInfo iProp in columns)
                    {
                        dataTable.Columns.Add(iProp.Name, Nullable.GetUnderlyingType(iProp.PropertyType) ?? iProp.PropertyType);
                    }
                    foreach (Exercise ex in result.Exercise)
                    {
                        //dataTable.Rows.Add(ex.ToArray());
                    }
                    conn.Open();
                    conn.Execute("API.mergeExercise",
                    new
                    {
                        customerKeys = result.Exercise.AsTableValuedParameter("Exercise.tvp_Exercise")
                    },
                    commandType: CommandType.StoredProcedure);
                }

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
