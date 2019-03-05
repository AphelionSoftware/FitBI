
using System;		

using System.Collections.Generic;

		namespace FitAPIFunctions.Schema
{
    public class StatsChoice
    {
			public short? Active  { get; set; }
			public DateTimeOffset? CreatedAt  { get; set; }
			public bool? Deleted  { get; set; }
			public string ID  { get; set; }
			public int? StatsChoiceID  { get; set; }
			public int? StatTypeID  { get; set; }
			public DateTime? UpdatedAt  { get; set; }
			public int? UserID  { get; set; }
			public byte[] Version  { get; set; }
	}

	public class StatsChoiceContainer
    {
        public List<StatsChoice> StatsChoice;
    }
}