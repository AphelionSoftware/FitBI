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
    public static class Core
    {
        [FunctionName("Core")]
        public static HttpResponseMessage Run([HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = "setup/Core/{pSubscriptionID}")]HttpRequestMessage req, string pSubscriptionID, TraceWriter log)
        {
            CoreValues objCore = new CoreValues();
            log.Info("C# HTTP trigger function processed a request.");
            var sqlConnectionString =
                ConfigurationManager
                   .ConnectionStrings["FitDB_conn"].ConnectionString;
            var sp_Core = ConfigurationManager.AppSettings["sp_Core"];
            string JSON = "Error occurred";
            HttpStatusCode statusCode = HttpStatusCode.OK;
            try
            {
                using (SqlConnection conn = new SqlConnection(sqlConnectionString))
                {
                    conn.Open();
                    using (var multi = conn.QueryMultiple(sp_Core, new { Subject = pSubscriptionID },
                                         commandType: CommandType.StoredProcedure))
                    {
                        objCore.Version = multi.Read<dynamic>().ToList();
                        objCore.BodyPart = multi.Read<dynamic>().ToList();
                        objCore.BodyPartType = multi.Read<dynamic>().ToList();
                        objCore.MeasurementControl = multi.Read<dynamic>().ToList();
                        objCore.MeasurementType = multi.Read<dynamic>().ToList();
                        objCore.MeasurementTypeCategory = multi.Read<dynamic>().ToList();
                        objCore.MetricDetail = multi.Read<dynamic>().ToList();
                        objCore.StatType = multi.Read<dynamic>().ToList();
                        objCore.Unit = multi.Read<dynamic>().ToList();
                        objCore.UnitType = multi.Read<dynamic>().ToList();

                        JSON = JsonConvert.SerializeObject(objCore);

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
        //[FunctionName("Core")]
        //public static HttpResponseMessage Run([HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = "setup/Core/{pUserID}")]HttpRequestMessage req, string pUserID, TraceWriter log)
        //{
        //    CoreValues objCore = new CoreValues();
        //    log.Info("C# HTTP trigger function processed a request.");
        //    var sqlConnectionString =
        //        ConfigurationManager
        //           .ConnectionStrings["FitDB_conn"].ConnectionString;
        //    var sp_Core = ConfigurationManager.AppSettings["sp_Core"];
        //    string JSON = "Error occurred";
        //    HttpStatusCode statusCode = HttpStatusCode.OK;
        //    try
        //    {
        //        using (SqlConnection conn = new SqlConnection(sqlConnectionString))
        //        {
        //            conn.Open();
        //            using (var multi = conn.QueryMultiple(sp_Core, new { UserID = System.Convert.ToInt32(pUserID) },
        //                                 commandType: CommandType.StoredProcedure))
        //            {
        //                objCore.Version = multi.Read<dynamic>().ToList();
        //                objCore.BodyPart = multi.Read<dynamic>().ToList();
        //                objCore.BodyPartType = multi.Read<dynamic>().ToList();
        //                objCore.MeasurementType = multi.Read<dynamic>().ToList();
        //                objCore.MeasurementTypeCategory = multi.Read<dynamic>().ToList();
        //                objCore.StatType = multi.Read<dynamic>().ToList();
        //                objCore.Unit = multi.Read<dynamic>().ToList();
        //                objCore.UnitType = multi.Read<dynamic>().ToList();

        //                JSON = JsonConvert.SerializeObject(objCore);

        //            }
        //        }
        //        //JObject 
        //        // Fetching the name from the path parameter in the request URL

        //    }
        //     catch (System.Exception ex)
        //    {
        //        log.Error("C# HTTP trigger function encountered an error " , ex);
        //        statusCode = HttpStatusCode.InternalServerError;

        //    }
        //    //Always return to not leave the client hanging
        //    return req.CreateResponse(statusCode, JSON);
        //}
    }
}
