
using System;		

using System.Collections.Generic;

		namespace FitAPIFunctions.Schema
{
    public class Workout
    {
			public short? Active  { get; set; }
			public DateTimeOffset? CreatedAt  { get; set; }
			public bool? Deleted  { get; set; }
			public string GoalNarrative  { get; set; }
			public string ID  { get; set; }
			public bool? isTemplate  { get; set; }
			public string Name  { get; set; }
			public int? PersonID  { get; set; }
			public int? PlanID  { get; set; }
			public DateTime? UpdatedAt  { get; set; }
			public byte[] Version  { get; set; }
			public int? WorkoutID  { get; set; }
	}

	public class WorkoutContainer
    {
        public List<Workout> Workout;
    }
}