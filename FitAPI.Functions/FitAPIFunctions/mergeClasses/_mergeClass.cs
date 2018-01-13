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
using System.Reflection;
using System;

namespace FitAPIFunctions
{
    public static class mergeExercise3
    {
        

        [FunctionName("mergeExercise3")]
        public async static Task Run([HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = "merge/Exercise3")]HttpRequestMessage req, TraceWriter log)
        {
            StreamContent content = (StreamContent)req.Content;
            var postData = await content.ReadAsStringAsync();

            ExerciseContainer result = JsonConvert.DeserializeObject<ExerciseContainer>(postData);

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
                log.Error("C# HTTP trigger function encountered an error ", ex);
                statusCode = HttpStatusCode.InternalServerError;

            }
            //Always return to not leave the client hanging
            //return req.CreateResponse(statusCode, JSON);
            return;
        }
    }
}
