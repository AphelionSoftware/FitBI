
using System;		

using System.Collections.Generic;

		namespace FitAPIFunctions.Schema
{
    public class Workout
    {
			public short? Active;
			public DateTimeOffset? CreatedAt;
			public bool? Deleted;
			public string GoalNarrative;
			public string ID;
			public bool? isTemplate;
			public string Name;
			public int? PersonID;
			public int? PlanID;
			public DateTimeOffset? UpdatedAt;
			public byte[] Version;
			public int? WorkoutID;
	}

	public class WorkoutContainer
    {
        public List<Workout> Workout;
    }
}