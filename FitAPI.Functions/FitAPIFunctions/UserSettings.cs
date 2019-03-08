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
    public static class UserSettings
    {
        [FunctionName("UserSettings")]
        public static HttpResponseMessage Run([HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = "setup/UserSettings/{pSubscriptionID}")]HttpRequestMessage req, string pSubscriptionID, TraceWriter log)
        {
            UserSettingsValues objUserSettings = new UserSettingsValues();
            log.Info("C# HTTP trigger function processed a request.");
            var sqlConnectionString =
                ConfigurationManager
                   .ConnectionStrings["FitDB_conn"].ConnectionString;
            var sp_UserSettings = ConfigurationManager.AppSettings["sp_UserSettings"];
            string JSON = "Error occurred";
            HttpStatusCode statusCode = HttpStatusCode.OK;
            try
            {
                using (SqlConnection conn = new SqlConnection(sqlConnectionString))
                {
                    conn.Open();
                    using (var multi = conn.QueryMultiple(sp_UserSettings, new { Subject = pSubscriptionID },
                                         commandType: CommandType.StoredProcedure))
                    {

                        objUserSettings.ColumnChoice = multi.Read<dynamic>().ToList();
                        objUserSettings.Favorite = multi.Read<dynamic>().ToList();
                        objUserSettings.GeneralSettings = multi.Read<dynamic>().ToList();
                        objUserSettings.StatsChoice = multi.Read<dynamic>().ToList();
                        JSON = JsonConvert.SerializeObject(objUserSettings);

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
        //[FunctionName("UserSettings")]
        //public static HttpResponseMessage Run([HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = "setup/UserSettings/{pUserID}")]HttpRequestMessage req, string pUserID, TraceWriter log)
        //{
        //    UserSettingsValues objUserSettings = new UserSettingsValues();
        //    log.Info("C# HTTP trigger function processed a request.");
        //    var sqlConnectionString =
        //        ConfigurationManager
        //           .ConnectionStrings["FitDB_conn"].ConnectionString;
        //    var sp_UserSettings = ConfigurationManager.AppSettings["sp_UserSettings"];
        //    string JSON = "Error occurred";
        //    HttpStatusCode statusCode = HttpStatusCode.OK;
        //    try
        //    {
        //        using (SqlConnection conn = new SqlConnection(sqlConnectionString))
        //        {
        //            conn.Open();
        //            using (var multi = conn.QueryMultiple(sp_UserSettings, new { UserID = System.Convert.ToInt32(pUserID) },
        //                                 commandType: CommandType.StoredProcedure))
        //            {
        //                objUserSettings.Version = multi.Read<dynamic>().ToList();
        //                objUserSettings.BodyPart = multi.Read<dynamic>().ToList();
        //                objUserSettings.BodyPartType = multi.Read<dynamic>().ToList();
        //                objUserSettings.MeasurementType = multi.Read<dynamic>().ToList();
        //                objUserSettings.MeasurementTypeCategory = multi.Read<dynamic>().ToList();
        //                objUserSettings.StatType = multi.Read<dynamic>().ToList();
        //                objUserSettings.Unit = multi.Read<dynamic>().ToList();
        //                objUserSettings.UnitType = multi.Read<dynamic>().ToList();

        //                JSON = JsonConvert.SerializeObject(objUserSettings);

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
