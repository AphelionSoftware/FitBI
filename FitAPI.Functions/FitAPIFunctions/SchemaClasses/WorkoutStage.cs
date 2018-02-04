
using System;		

using System.Collections.Generic;

		namespace FitAPIFunctions.Schema
{
    public class WorkoutStage
    {
			public short? Active  { get; set; }
			public DateTimeOffset? CreatedAt  { get; set; }
			public bool? Deleted  { get; set; }
			public string GoalNarrative  { get; set; }
			public string ID  { get; set; }
			public bool? isTemplate  { get; set; }
			public int? PersonID  { get; set; }
			public DateTimeOffset? UpdatedAt  { get; set; }
			public byte[] Version  { get; set; }
			public int? WorkoutID  { get; set; }
			public int? WorkoutStageID  { get; set; }
	}

	public class WorkoutStageContainer
    {
        public List<WorkoutStage> WorkoutStage;
    }
}