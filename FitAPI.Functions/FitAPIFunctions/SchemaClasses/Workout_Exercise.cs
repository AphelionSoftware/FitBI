
using System;		

using System.Collections.Generic;

		namespace FitAPIFunctions.Schema
{
    public class Workout_Exercise
    {
			public short? Active  { get; set; }
			public DateTimeOffset? CreatedAt  { get; set; }
			public bool? Deleted  { get; set; }
			public int? ExerciseID  { get; set; }
			public string GoalNarrative  { get; set; }
			public string ID  { get; set; }
			public int? PersonID  { get; set; }
			public DateTime? UpdatedAt  { get; set; }
			public byte[] Version  { get; set; }
			public int? Workout_ExerciseID  { get; set; }
			public int? WorkoutID  { get; set; }
	}

	public class Workout_ExerciseContainer
    {
        public List<Workout_Exercise> Workout_Exercise;
    }
}