using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.ModelBinding;
using System.Web.OData;
using System.Web.OData.Query;
using System.Web.OData.Routing;
using FitBI.oData.Models;

namespace FitBI.oData.Controllers
{
    /*
    The WebApiConfig class may require additional changes to add a route for this controller. Merge these statements into the Register method of the WebApiConfig class as applicable. Note that OData URLs are case sensitive.

    using System.Web.OData.Builder;
    using System.Web.OData.Extensions;
    using FitBI.oData.Models;
    ODataConventionModelBuilder builder = new ODataConventionModelBuilder();
    builder.EntitySet<Date>("Dates");
    config.MapODataServiceRoute("odata", "odata", builder.GetEdmModel());
    */
    public class DatesController : ODataController
    {
        private FitBIData db = new FitBIData();

        // GET: odata/Dates
        [EnableQuery]
        public IQueryable<Date> GetDates()
        {
            return db.Dates;
        }

        // GET: odata/Dates(5)
        [EnableQuery]
        public SingleResult<Date> GetDate([FromODataUri] int key)
        {
            return SingleResult.Create(db.Dates.Where(date => date.DateID == key));
        }

        // PUT: odata/Dates(5)
        public async Task<IHttpActionResult> Put([FromODataUri] int key, Delta<Date> patch)
        {
            Validate(patch.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Date date = await db.Dates.FindAsync(key);
            if (date == null)
            {
                return NotFound();
            }

            patch.Put(date);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DateExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(date);
        }

        // POST: odata/Dates
        public async Task<IHttpActionResult> Post(Date date)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Dates.Add(date);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (DateExists(date.DateID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return Created(date);
        }

        // PATCH: odata/Dates(5)
        [AcceptVerbs("PATCH", "MERGE")]
        public async Task<IHttpActionResult> Patch([FromODataUri] int key, Delta<Date> patch)
        {
            Validate(patch.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Date date = await db.Dates.FindAsync(key);
            if (date == null)
            {
                return NotFound();
            }

            patch.Patch(date);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DateExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(date);
        }

        // DELETE: odata/Dates(5)
        public async Task<IHttpActionResult> Delete([FromODataUri] int key)
        {
            Date date = await db.Dates.FindAsync(key);
            if (date == null)
            {
                return NotFound();
            }

            db.Dates.Remove(date);
            await db.SaveChangesAsync();

            return StatusCode(HttpStatusCode.NoContent);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool DateExists(int key)
        {
            return db.Dates.Count(e => e.DateID == key) > 0;
        }
    }
}
