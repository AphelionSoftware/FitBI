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
    builder.EntitySet<WeightMeasurement>("WeightMeasurements");
    builder.EntitySet<Active>("Actives"); 
    builder.EntitySet<MeasurementType>("MeasurementTypes"); 
    config.MapODataServiceRoute("odata", "odata", builder.GetEdmModel());
    */
    public class WeightMeasurementsController : ODataController
    {
        private FitBIData db = new FitBIData();

        // GET: odata/WeightMeasurements
        [EnableQuery]
        public IQueryable<WeightMeasurement> GetWeightMeasurements()
        {
            return db.WeightMeasurements;
        }

        // GET: odata/WeightMeasurements(5)
        [EnableQuery]
        public SingleResult<WeightMeasurement> GetWeightMeasurement([FromODataUri] int key)
        {
            return SingleResult.Create(db.WeightMeasurements.Where(weightMeasurement => weightMeasurement.WeightMeasurementID == key));
        }

        // PUT: odata/WeightMeasurements(5)
        public async Task<IHttpActionResult> Put([FromODataUri] int key, Delta<WeightMeasurement> patch)
        {
            Validate(patch.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            WeightMeasurement weightMeasurement = await db.WeightMeasurements.FindAsync(key);
            if (weightMeasurement == null)
            {
                return NotFound();
            }

            patch.Put(weightMeasurement);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!WeightMeasurementExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(weightMeasurement);
        }

        // POST: odata/WeightMeasurements
        public async Task<IHttpActionResult> Post(WeightMeasurement weightMeasurement)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.WeightMeasurements.Add(weightMeasurement);
            await db.SaveChangesAsync();

            return Created(weightMeasurement);
        }

        // PATCH: odata/WeightMeasurements(5)
        [AcceptVerbs("PATCH", "MERGE")]
        public async Task<IHttpActionResult> Patch([FromODataUri] int key, Delta<WeightMeasurement> patch)
        {
            Validate(patch.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            WeightMeasurement weightMeasurement = await db.WeightMeasurements.FindAsync(key);
            if (weightMeasurement == null)
            {
                return NotFound();
            }

            patch.Patch(weightMeasurement);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!WeightMeasurementExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(weightMeasurement);
        }

        // DELETE: odata/WeightMeasurements(5)
        public async Task<IHttpActionResult> Delete([FromODataUri] int key)
        {
            WeightMeasurement weightMeasurement = await db.WeightMeasurements.FindAsync(key);
            if (weightMeasurement == null)
            {
                return NotFound();
            }

            db.WeightMeasurements.Remove(weightMeasurement);
            await db.SaveChangesAsync();

            return StatusCode(HttpStatusCode.NoContent);
        }

        // GET: odata/WeightMeasurements(5)/Active1
        [EnableQuery]
        public SingleResult<Active> GetActive1([FromODataUri] int key)
        {
            return SingleResult.Create(db.WeightMeasurements.Where(m => m.WeightMeasurementID == key).Select(m => m.Active1));
        }

        // GET: odata/WeightMeasurements(5)/MeasurementType
        [EnableQuery]
        public SingleResult<MeasurementType> GetMeasurementType([FromODataUri] int key)
        {
            return SingleResult.Create(db.WeightMeasurements.Where(m => m.WeightMeasurementID == key).Select(m => m.MeasurementType));
        }

        // GET: odata/WeightMeasurements(5)/WeightMeasurement1
        [EnableQuery]
        public SingleResult<WeightMeasurement> GetWeightMeasurement1([FromODataUri] int key)
        {
            return SingleResult.Create(db.WeightMeasurements.Where(m => m.WeightMeasurementID == key).Select(m => m.WeightMeasurement1));
        }

        // GET: odata/WeightMeasurements(5)/WeightMeasurement2
        [EnableQuery]
        public SingleResult<WeightMeasurement> GetWeightMeasurement2([FromODataUri] int key)
        {
            return SingleResult.Create(db.WeightMeasurements.Where(m => m.WeightMeasurementID == key).Select(m => m.WeightMeasurement2));
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool WeightMeasurementExists(int key)
        {
            return db.WeightMeasurements.Count(e => e.WeightMeasurementID == key) > 0;
        }
    }
}
