
using System;		

using System.Collections.Generic;

		namespace FitAPIFunctions.Schema
{
    public class WeightMeasurement
    {
			public short? Active;
			public decimal? BodyFatPercentage;
			public decimal? BonePercentage;
			public DateTimeOffset? CreatedAt;
			public bool? Deleted;
			public string ID;
			public DateTime? MeasurementDate;
			public decimal? MusclePercentage;
			public int? PercentMeasurementTypeID;
			public int? PersonID;
			public int? UnitID;
			public DateTimeOffset? UpdatedAt;
			public byte[] Version;
			public decimal? WaterPercentage;
			public decimal? Weight;
			public int? WeightMeasurementID;
	}

	public class WeightMeasurementContainer
    {
        public List<WeightMeasurement> WeightMeasurement;
    }
}