
using System;		

using System.Collections.Generic;

		namespace FitAPIFunctions.Schema
{
    public class SkinfoldMeasurement
    {
			public short? Active  { get; set; }
			public int? BodyPartID  { get; set; }
			public DateTimeOffset? CreatedAt  { get; set; }
			public bool? Deleted  { get; set; }
			public string ID  { get; set; }
			public DateTime? MeasurementDate  { get; set; }
			public int? PersonID  { get; set; }
			public int? SideMeasurementTypeID  { get; set; }
			public int? SkinfoldMeasurementID  { get; set; }
			public decimal? SkinfoldThickness  { get; set; }
			public DateTimeOffset? UpdatedAt  { get; set; }
			public byte[] Version  { get; set; }
	}

	public class SkinfoldMeasurementContainer
    {
        public List<SkinfoldMeasurement> SkinfoldMeasurement;
    }
}