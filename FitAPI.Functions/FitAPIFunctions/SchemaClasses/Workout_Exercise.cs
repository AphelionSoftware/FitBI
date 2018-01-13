
using System;		

using System.Collections.Generic;

		namespace FitAPIFunctions.Schema
{
    public class Workout_Exercise
    {
			public short? Active;
			public DateTimeOffset? CreatedAt;
			public bool? Deleted;
			public int? ExerciseID;
			public string GoalNarrative;
			public string ID;
			public int? PersonID;
			public DateTimeOffset? UpdatedAt;
			public byte[] Version;
			public int? Workout_ExerciseID;
			public int? WorkoutID;
	}

	public class Workout_ExerciseContainer
    {
        public List<Workout_Exercise> Workout_Exercise;
    }
}