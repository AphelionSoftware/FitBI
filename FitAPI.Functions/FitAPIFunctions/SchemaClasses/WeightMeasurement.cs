
using System;		

using System.Collections.Generic;

		namespace FitAPIFunctions.Schema
{
    public class WeightMeasurement
    {
			public short? Active  { get; set; }
			public decimal? BodyFatPercentage  { get; set; }
			public decimal? BonePercentage  { get; set; }
			public DateTimeOffset? CreatedAt  { get; set; }
			public bool? Deleted  { get; set; }
			public string ID  { get; set; }
			public DateTime? MeasurementDate3  { get; set; }
			public decimal? MusclePercentage  { get; set; }
			public int? PercentMeasurementTypeID  { get; set; }
			public int? PersonID  { get; set; }
			public int? UnitID  { get; set; }
			public DateTimeOffset? UpdatedAt  { get; set; }
			public byte[] Version  { get; set; }
			public decimal? WaterPercentage  { get; set; }
			public decimal? Weight  { get; set; }
			public int? WeightMeasurementID  { get; set; }
	}

	public class WeightMeasurementContainer
    {
        public List<WeightMeasurement> WeightMeasurement;
    }
}