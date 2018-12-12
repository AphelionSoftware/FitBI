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

namespace FitAPIFunctions
{
    public static class Init
    {
        //[FunctionName("Init")]
        //public static HttpResponseMessage Run([HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = "setup/Init/{pAccessToken}")]HttpRequestMessage req, string pAccessToken, TraceWriter log)
        //{
        //    InitValues objInit = new InitValues();
        //    log.Info("C# HTTP trigger function processed a request.");
        //    var sqlConnectionString =
        //        ConfigurationManager
        //           .ConnectionStrings["FitDB_conn"].ConnectionString;
        //    var sp_Init = ConfigurationManager.AppSettings["sp_Init"];
        //    string JSON = "Error occurred";
        //    HttpStatusCode statusCode = HttpStatusCode.OK;
        //    try
        //    {
        //        using (SqlConnection conn = new SqlConnection(sqlConnectionString))
        //        {
        //            conn.Open();
        //            using (var multi = conn.QueryMultiple(sp_Init, new { Subject = pAccessToken },
        //                                 commandType: CommandType.StoredProcedure))
        //            {
        //                objInit.Version = multi.Read<dynamic>().ToList();
        //                objInit.Exercise = multi.Read<dynamic>().ToList();
        //                objInit.Exercise_Sport = multi.Read<dynamic>().ToList();
        //                objInit.ExerciseLink = multi.Read<dynamic>().ToList();
        //                objInit.ExerciseType = multi.Read<dynamic>().ToList();
        //                objInit.Sport = multi.Read<dynamic>().ToList();
        //                objInit.Plan = multi.Read<dynamic>().ToList();
        //                objInit.Workout = multi.Read<dynamic>().ToList();
        //                objInit.Workout_Exercise = multi.Read<dynamic>().ToList();
        //                objInit.WorkoutStage = multi.Read<dynamic>().ToList();
        //                objInit.DailyMeasurement = multi.Read<dynamic>().ToList();
        //                objInit.Metric = multi.Read<dynamic>().ToList();
        //                objInit.Person = multi.Read<dynamic>().ToList();
        //                objInit.SkinfoldMeasurement = multi.Read<dynamic>().ToList();
        //                objInit.TapeMeasurement = multi.Read<dynamic>().ToList();
        //                objInit.WeightMeasurement = multi.Read<dynamic>().ToList();


        //                JSON = JsonConvert.SerializeObject(objInit);

        //            }
        //        }
        //        //JObject 
        //        // Fetching the name from the path parameter in the request URL

        //    }
        //    catch (System.Exception ex)
        //    {
        //        log.Error("C# HTTP trigger function encountered an error ", ex);
        //        JSON = JsonConvert.SerializeObject(ex);
        //        statusCode = HttpStatusCode.InternalServerError;
        //    }
        //    //Always return to not leave the client hanging
        //    return req.CreateResponse(statusCode, JSON);
        //}

        [FunctionName("Init")]
        public static HttpResponseMessage Run([HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = "setup/Init/{pUserID}")]HttpRequestMessage req, string pUserID, TraceWriter log)
        {
            InitValues objInit = new InitValues();
            log.Info("C# HTTP trigger function processed a request.");
            var sqlConnectionString =                
                ConfigurationManager
                   .ConnectionStrings["FitDB_conn"].ConnectionString;
            var sp_Init = ConfigurationManager.AppSettings["sp_Init"];
            string JSON = "Error occurred";
            HttpStatusCode statusCode = HttpStatusCode.OK;
            try
            {
                using (SqlConnection conn = new SqlConnection(sqlConnectionString))
                {
                    conn.Open();
                    using (var multi = conn.QueryMultiple(sp_Init, new { UserID = System.Convert.ToInt32( pUserID ) },
                                         commandType: CommandType.StoredProcedure))
                    {
                        objInit.Version = multi.Read<dynamic>().ToList();
                        objInit.Exercise = multi.Read<dynamic>().ToList();
                        objInit.Exercise_Sport = multi.Read<dynamic>().ToList();
                        objInit.ExerciseLink = multi.Read<dynamic>().ToList();
                        objInit.ExerciseType = multi.Read<dynamic>().ToList();
                        objInit.Sport = multi.Read<dynamic>().ToList();
                        objInit.Plan = multi.Read<dynamic>().ToList();
                        objInit.Workout = multi.Read<dynamic>().ToList();
                        objInit.Workout_Exercise = multi.Read<dynamic>().ToList();
                        objInit.WorkoutStage = multi.Read<dynamic>().ToList();
                        objInit.DailyMeasurement = multi.Read<dynamic>().ToList();
                        objInit.Metric = multi.Read<dynamic>().ToList();
                        objInit.Person = multi.Read<dynamic>().ToList();
                        objInit.SkinfoldMeasurement = multi.Read<dynamic>().ToList();
                        objInit.TapeMeasurement = multi.Read<dynamic>().ToList();
                        objInit.WeightMeasurement = multi.Read<dynamic>().ToList();


                        JSON = JsonConvert.SerializeObject(objInit);

                    }
                }
                //JObject 
                // Fetching the name from the path parameter in the request URL
            
            }
            catch (System.Exception ex)
            {
                log.Error("C# HTTP trigger function encountered an error ", ex);
                JSON = JsonConvert.SerializeObject(ex);
                statusCode = HttpStatusCode.InternalServerError;
            }
            //Always return to not leave the client hanging
            return req.CreateResponse(statusCode, JSON);
        }
    }
}
