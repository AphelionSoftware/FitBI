using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Breeze;
using Breeze.WebApi2;
using Breeze.ContextProvider.EF6;
using FitBI.oData.Models;

namespace FitBI.oData.Controllers
{
    [BreezeController]
    public class JournalController : ApiController
    {
        readonly EFContextProvider<FitBIData> _contextProvider =
       new EFContextProvider<FitBIData>();

        // ~/breeze/todos/Metadata 
        [HttpGet]
        public string Metadata()
        {
            return _contextProvider.Metadata();
        }
    }
}
