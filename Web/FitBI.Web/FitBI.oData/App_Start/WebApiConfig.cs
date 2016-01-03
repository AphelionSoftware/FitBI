using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web.Http;
using Microsoft.Owin.Security.OAuth;
using Newtonsoft.Json.Serialization;
using FitBI.oData.Models;
using System.Web.OData.Builder;
using System.Web.OData.Extensions;

namespace FitBI.oData
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services
            // Configure Web API to use only bearer token authentication.
            config.SuppressDefaultHostAuthentication();
            config.Filters.Add(new HostAuthenticationFilter(OAuthDefaults.AuthenticationType));

            // Web API routes
            config.MapHttpAttributeRoutes();

            //config.Routes.MapHttpRoute(
            //    name: "DefaultApi",
            //    routeTemplate: "api/{controller}/{id}",
            //    defaults: new { id = RouteParameter.Optional }
            //);


            ODataModelBuilder builder = new ODataConventionModelBuilder();
            builder.EntitySet<Active>("Actives");
            builder.EntitySet<Date>("Dates");
            builder.EntitySet<MeasurementTypeCategory>("MeasurementTypeCategories");
            builder.EntitySet<MeasurementType>("MeasurementTypes");
            builder.EntitySet<Metric>("Metrics");
            builder.EntitySet<Person>("People");
            builder.EntitySet<TapeMeasurement>("TapeMeasurements");
            builder.EntitySet<WeightMeasurement>("WeightMeasurements");
            config.MapODataServiceRoute("FitBIData", "FitBIData", builder.GetEdmModel());

            

        }
    }
}
