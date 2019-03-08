
using System;		

using System.Collections.Generic;

		namespace FitAPIFunctions.Schema
{
    public class MetricValue
    {
			public short? Active  { get; set; }
			public DateTimeOffset? CreatedAt  { get; set; }
			public bool? Deleted  { get; set; }
			public string ID  { get; set; }
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