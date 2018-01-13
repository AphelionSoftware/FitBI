
using System;		

using System.Collections.Generic;

		namespace FitAPIFunctions.Schema
{
    public class Sport
    {
			public short? Active;
			public string Code;
			public DateTimeOffset? CreatedAt;
			public bool? Deleted;
			public string Description;
			public string ID;
			public string Name;
			public int? ParentSportID;
			public int? PersonID;
			public int? SportID;
			public DateTimeOffset? UpdatedAt;
			public byte[] Version;
	}

	public class SportContainer
    {
        public List<Sport> Sport;
    }
}