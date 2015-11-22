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
    builder.EntitySet<Active>("Actives");
    builder.EntitySet<MeasurementTypeCategory>("MeasurementTypeCategories"); 
    builder.EntitySet<MeasurementType>("MeasurementTypes"); 
    builder.EntitySet<Metric>("Metrics"); 
    builder.EntitySet<Person>("People"); 
    builder.EntitySet<TapeMeasurement>("TapeMeasurements"); 
    builder.EntitySet<WeightMeasurement>("WeightMeasurements"); 
    config.MapODataServiceRoute("odata", "odata", builder.GetEdmModel());
    */
    public class ActivesController : ODataController
    {
        private FitBIData db = new FitBIData();

        // GET: odata/Actives
        [EnableQuery]
        public IQueryable<Active> GetActives()
        {
            return db.Actives;
        }

        // GET: odata/Actives(5)
        [EnableQuery]
        public SingleResult<Active> GetActive([FromODataUri] short key)
        {
            return SingleResult.Create(db.Actives.Where(active => active.Active1 == key));
        }

        // PUT: odata/Actives(5)
        public async Task<IHttpActionResult> Put([FromODataUri] short key, Delta<Active> patch)
        {
            Validate(patch.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Active active = await db.Actives.FindAsync(key);
            if (active == null)
            {
                return NotFound();
            }

            patch.Put(active);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ActiveExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(active);
        }

        // POST: odata/Actives
        public async Task<IHttpActionResult> Post(Active active)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Actives.Add(active);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (ActiveExists(active.Active1))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return Created(active);
        }

        // PATCH: odata/Actives(5)
        [AcceptVerbs("PATCH", "MERGE")]
        public async Task<IHttpActionResult> Patch([FromODataUri] short key, Delta<Active> patch)
        {
            Validate(patch.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Active active = await db.Actives.FindAsync(key);
            if (active == null)
            {
                return NotFound();
            }

            patch.Patch(active);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ActiveExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(active);
        }

        // DELETE: odata/Actives(5)
        public async Task<IHttpActionResult> Delete([FromODataUri] short key)
        {
            Active active = await db.Actives.FindAsync(key);
            if (active == null)
            {
                return NotFound();
            }

            db.Actives.Remove(active);
            await db.SaveChangesAsync();

            return StatusCode(HttpStatusCode.NoContent);
        }

        // GET: odata/Actives(5)/MeasurementTypeCategories
        [EnableQuery]
        public IQueryable<MeasurementTypeCategory> GetMeasurementTypeCategories([FromODataUri] short key)
        {
            return db.Actives.Where(m => m.Active1 == key).SelectMany(m => m.MeasurementTypeCategories);
        }

        // GET: odata/Actives(5)/MeasurementTypes
        [EnableQuery]
        public IQueryable<MeasurementType> GetMeasurementTypes([FromODataUri] short key)
        {
            return db.Actives.Where(m => m.Active1 == key).SelectMany(m => m.MeasurementTypes);
        }

        // GET: odata/Actives(5)/Metrics
        [EnableQuery]
        public IQueryable<Metric> GetMetrics([FromODataUri] short key)
        {
            return db.Actives.Where(m => m.Active1 == key).SelectMany(m => m.Metrics);
        }

        // GET: odata/Actives(5)/People
        [EnableQuery]
        public IQueryable<Person> GetPeople([FromODataUri] short key)
        {
            return db.Actives.Where(m => m.Active1 == key).SelectMany(m => m.People);
        }

        // GET: odata/Actives(5)/TapeMeasurements
        [EnableQuery]
        public IQueryable<TapeMeasurement> GetTapeMeasurements([FromODataUri] short key)
        {
            return db.Actives.Where(m => m.Active1 == key).SelectMany(m => m.TapeMeasurements);
        }

        // GET: odata/Actives(5)/WeightMeasurements
        [EnableQuery]
        public IQueryable<WeightMeasurement> GetWeightMeasurements([FromODataUri] short key)
        {
            return db.Actives.Where(m => m.Active1 == key).SelectMany(m => m.WeightMeasurements);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ActiveExists(short key)
        {
            return db.Actives.Count(e => e.Active1 == key) > 0;
        }
    }
}
