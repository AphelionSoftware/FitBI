
using System;		

using System.Collections.Generic;

		namespace FitAPIFunctions.Schema
{
    public class SkinfoldMeasurement
    {
			public short? Active;
			public int? BodyPartID;
			public DateTimeOffset? CreatedAt;
			public bool? Deleted;
			public string ID;
			public DateTime? MeasurementDate;
			public int? PersonID;
			public int? SideMeasurementTypeID;
			public int? SkinfoldMeasurementID;
			public decimal? SkinfoldThickness;
			public DateTimeOffset? UpdatedAt;
			public byte[] Version;
	}

	public class SkinfoldMeasurementContainer
    {
        public List<SkinfoldMeasurement> SkinfoldMeasurement;
    }
}