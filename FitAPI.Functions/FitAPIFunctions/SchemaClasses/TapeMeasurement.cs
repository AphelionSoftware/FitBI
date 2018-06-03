
using System;		

using System.Collections.Generic;

		namespace FitAPIFunctions.Schema
{
    public class TapeMeasurement
    {
			public short? Active  { get; set; }
			public int? BodyPartID  { get; set; }
			public DateTimeOffset? CreatedAt  { get; set; }
			public bool? Deleted  { get; set; }
			public string ID  { get; set; }
			public DateTime? MeasurementDate  { get; set; }
			public int? MeasurementDateID  { get; set; }
			public int? PersonID  { get; set; }
			public int? SideMeasurementTypeID  { get; set; }
			public decimal? TapeLength  { get; set; }
			public int? TapeMeasurementID  { get; set; }
			public DateTimeOffset? UpdatedAt  { get; set; }
			public byte[] Version  { get; set; }
	}

	public class TapeMeasurementContainer
    {
        public List<TapeMeasurement> TapeMeasurement;
    }
}