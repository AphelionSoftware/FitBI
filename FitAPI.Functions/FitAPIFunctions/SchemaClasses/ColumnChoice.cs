
using System;		

using System.Collections.Generic;

		namespace FitAPIFunctions.Schema
{
    public class ColumnChoice
    {
			public short? Active  { get; set; }
			public string Code  { get; set; }
			public int? ColumnChoiceID  { get; set; }
			public string ColumnList  { get; set; }
			public DateTimeOffset? CreatedAt  { get; set; }
			public bool? Deleted  { get; set; }
			public string ID  { get; set; }
			public string Name  { get; set; }
			public int? PageID  { get; set; }
			public DateTimeOffset? UpdatedAt  { get; set; }
			public int? UserID  { get; set; }
			public byte[] Version  { get; set; }
	}

	public class ColumnChoiceContainer
    {
        public List<ColumnChoice> ColumnChoice;
    }
}