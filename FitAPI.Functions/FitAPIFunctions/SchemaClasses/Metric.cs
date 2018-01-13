
using System;		

using System.Collections.Generic;

		namespace FitAPIFunctions.Schema
{
    public class Metric
    {
			public short? Active;
			public decimal? BodyFatPercentage;
			public decimal? BonePercentage;
			public DateTimeOffset? CreatedAt;
			public bool? Deleted;
			public string ID;
			public int? MetricID;
			public decimal? MusclePercentage;
			public int? PercentMeasurementTypeID;
			public int? PersonID;
			public DateTimeOffset? UpdatedAt;
			public byte[] Version;
			public decimal? WaterPercentage;
			public decimal? Weight;
	}

	public class MetricContainer
    {
        public List<Metric> Metric;
    }
}