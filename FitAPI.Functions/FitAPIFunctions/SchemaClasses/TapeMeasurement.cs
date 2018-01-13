
using System;		

using System.Collections.Generic;

		namespace FitAPIFunctions.Schema
{
    public class TapeMeasurement
    {
			public short? Active;
			public int? BodyPartID;
			public DateTimeOffset? CreatedAt;
			public bool? Deleted;
			public string ID;
			public int? PersonID;
			public int? SideMeasurementTypeID;
			public decimal? TapeLength;
			public int? TapeMeasurementID;
			public DateTimeOffset? UpdatedAt;
			public byte[] Version;
	}

	public class TapeMeasurementContainer
    {
        public List<TapeMeasurement> TapeMeasurement;
    }
}