
using System;		

using System.Collections.Generic;

		namespace FitAPIFunctions.Schema
{
    public class MetricValue
    {
			public short? Active  { get; set; }
			public bool? BooleanValue  { get; set; }
			public DateTimeOffset? CreatedAt  { get; set; }
			public decimal? DecimalValue  { get; set; }
			public bool? Deleted  { get; set; }
			public double? FloatValue  { get; set; }
			public string ID  { get; set; }
			public int? IntegerValue  { get; set; }
			public DateTimeOffset? MeasurementDate  { get; set; }
			public int? MetricDetailID  { get; set; }
			public int? MetricValueID  { get; set; }
			public int? PersonID  { get; set; }
			public DateTime? UpdatedAt  { get; set; }
			public byte[] Version  { get; set; }
	}

	public class MetricValueContainer
    {
        public List<MetricValue> MetricValue;
    }
}