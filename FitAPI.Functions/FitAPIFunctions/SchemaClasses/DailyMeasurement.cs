
using System;		

using System.Collections.Generic;

		namespace FitAPIFunctions.Schema
{
    public class DailyMeasurement
    {
			public short? Active  { get; set; }
			public decimal? BellyButtonCircumference  { get; set; }
			public decimal? BicepCircumference  { get; set; }
			public decimal? BodyFatPercentage  { get; set; }
			public decimal? BonePercentage  { get; set; }
			public decimal? CalvesCircumference  { get; set; }
			public decimal? ChestCircumference  { get; set; }
			public DateTimeOffset? CreatedAt  { get; set; }
			public int? DailyMeasurementID  { get; set; }
			public bool? Deleted  { get; set; }
			public decimal? HipCircumference  { get; set; }
			public string ID  { get; set; }
			public DateTime? MeasurementDate  { get; set; }
			public int? MeasurementDateID  { get; set; }
			public decimal? MusclePercentage  { get; set; }
			public decimal? NeckCircumference  { get; set; }
			public int? PercentMeasurementTypeID  { get; set; }
			public int? PersonID  { get; set; }
			public decimal? QuadCircumference  { get; set; }
			public int? UnitID  { get; set; }
			public DateTime? UpdatedAt  { get; set; }
			public byte[] Version  { get; set; }
			public decimal? WaistCircumference  { get; set; }
			public decimal? WaterPercentage  { get; set; }
			public decimal? Weight  { get; set; }
	}

	public class DailyMeasurementContainer
    {
        public List<DailyMeasurement> DailyMeasurement;
    }
}