
using System;		

using System.Collections.Generic;

		namespace FitAPIFunctions.Schema
{
    public class Sport
    {
			public short? Active  { get; set; }
			public string Code  { get; set; }
			public DateTimeOffset? CreatedAt  { get; set; }
			public bool? Deleted  { get; set; }
			public string Description  { get; set; }
			public string ID  { get; set; }
			public string Name  { get; set; }
			public int? ParentSportID  { get; set; }
			public int? PersonID  { get; set; }
			public int? SportID  { get; set; }
			public DateTime? UpdatedAt  { get; set; }
			public byte[] Version  { get; set; }
	}

	public class SportContainer
    {
        public List<Sport> Sport;
    }
}