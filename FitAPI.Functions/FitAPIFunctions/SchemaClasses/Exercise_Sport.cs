
using System;		

using System.Collections.Generic;

		namespace FitAPIFunctions.Schema
{
    public class Exercise_Sport
    {
			public short? Active  { get; set; }
			public DateTimeOffset? CreatedAt  { get; set; }
			public bool? Deleted  { get; set; }
			public int? Exercise_SportID  { get; set; }
			public int? ExerciseID  { get; set; }
			public string GoalNarrative  { get; set; }
			public string ID  { get; set; }
			public int? PersonID  { get; set; }
			public int? SportID  { get; set; }
			public DateTime? UpdatedAt  { get; set; }
			public byte[] Version  { get; set; }
	}

	public class Exercise_SportContainer
    {
        public List<Exercise_Sport> Exercise_Sport;
    }
}