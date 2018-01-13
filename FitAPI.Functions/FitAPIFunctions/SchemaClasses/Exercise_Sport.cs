
using System;		

using System.Collections.Generic;

		namespace FitAPIFunctions.Schema
{
    public class Exercise_Sport
    {
			public short? Active;
			public DateTimeOffset? CreatedAt;
			public bool? Deleted;
			public int? Exercise_SportID;
			public int? ExerciseID;
			public string GoalNarrative;
			public string ID;
			public int? PersonID;
			public int? SportID;
			public DateTimeOffset? UpdatedAt;
			public byte[] Version;
	}

	public class Exercise_SportContainer
    {
        public List<Exercise_Sport> Exercise_Sport;
    }
}