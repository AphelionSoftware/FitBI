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
using System.Web.OData.Builder;
using System.Web.OData.Extensions;

namespace FitBI.oData.Controllers
{
    /*
    The WebApiConfig class may require additional changes to add a route for this controller. Merge these statements into the Register method of the WebApiConfig class as applicable. Note that OData URLs are case sensitive.

    */
    public class TapeMeasurementsController : ODataController
    {
        private FitBIData db = new FitBIData();

        // GET: odata/TapeMeasurements
        [EnableQuery]
        public IQueryable<TapeMeasurement> GetTapeMeasurements()
        {
            return db.TapeMeasurements;
        }

        // GET: odata/TapeMeasurements(5)
        [EnableQuery]
        public SingleResult<TapeMeasurement> GetTapeMeasurement([FromODataUri] int key)
        {
            return SingleResult.Create(db.TapeMeasurements.Where(tapeMeasurement => tapeMeasurement.TapeMeasurementID == key));
        }

        // PUT: odata/TapeMeasurements(5)
        public async Task<IHttpActionResult> Put([FromODataUri] int key, Delta<TapeMeasurement> patch)
        {
            Validate(patch.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            TapeMeasurement tapeMeasurement = await db.TapeMeasurements.FindAsync(key);
            if (tapeMeasurement == null)
            {
                return NotFound();
            }

            patch.Put(tapeMeasurement);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TapeMeasurementExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(tapeMeasurement);
        }

        // POST: odata/TapeMeasurements
        public async Task<IHttpActionResult> Post(TapeMeasurement tapeMeasurement)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.TapeMeasurements.Add(tapeMeasurement);
            await db.SaveChangesAsync();

            return Created(tapeMeasurement);
        }

        // PATCH: odata/TapeMeasurements(5)
        [AcceptVerbs("PATCH", "MERGE")]
        public async Task<IHttpActionResult> Patch([FromODataUri] int key, Delta<TapeMeasurement> patch)
        {
            Validate(patch.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            TapeMeasurement tapeMeasurement = await db.TapeMeasurements.FindAsync(key);
            if (tapeMeasurement == null)
            {
                return NotFound();
            }

            patch.Patch(tapeMeasurement);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TapeMeasurementExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(tapeMeasurement);
        }

        // DELETE: odata/TapeMeasurements(5)
        public async Task<IHttpActionResult> Delete([FromODataUri] int key)
        {
            TapeMeasurement tapeMeasurement = await db.TapeMeasurements.FindAsync(key);
            if (tapeMeasurement == null)
            {
                return NotFound();
            }

            db.TapeMeasurements.Remove(tapeMeasurement);
            await db.SaveChangesAsync();

            return StatusCode(HttpStatusCode.NoContent);
        }

        // GET: odata/TapeMeasurements(5)/Active1
        [EnableQuery]
        public SingleResult<Active> GetActive1([FromODataUri] int key)
        {
            return SingleResult.Create(db.TapeMeasurements.Where(m => m.TapeMeasurementID == key).Select(m => m.Active1));
        }

        // GET: odata/TapeMeasurements(5)/MeasurementType
        [EnableQuery]
        public SingleResult<MeasurementType> GetMeasurementType([FromODataUri] int key)
        {
            return SingleResult.Create(db.TapeMeasurements.Where(m => m.TapeMeasurementID == key).Select(m => m.MeasurementType));
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool TapeMeasurementExists(int key)
        {
            return db.TapeMeasurements.Count(e => e.TapeMeasurementID == key) > 0;
        }
    }
}
