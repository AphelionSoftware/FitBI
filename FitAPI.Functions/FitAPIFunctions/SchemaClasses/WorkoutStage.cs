
using System;		

using System.Collections.Generic;

		namespace FitAPIFunctions.Schema
{
    public class WorkoutStage
    {
			public short? Active;
			public DateTimeOffset? CreatedAt;
			public bool? Deleted;
			public string GoalNarrative;
			public string ID;
			public bool? isTemplate;
			public int? PersonID;
			public DateTimeOffset? UpdatedAt;
			public byte[] Version;
			public int? WorkoutID;
			public int? WorkoutStageID;
	}

	public class WorkoutStageContainer
    {
        public List<WorkoutStage> WorkoutStage;
    }
}