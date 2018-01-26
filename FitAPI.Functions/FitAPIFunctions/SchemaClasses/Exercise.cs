
using System;		

using System.Collections.Generic;

		namespace FitAPIFunctions.Schema
{
    public class Exercise
    {
			public short? Active;
			public string Code;
			public DateTimeOffset? CreatedAt;
			public bool? Deleted;
			public string Description;
			public int? ExerciseID;
			public int? ExerciseTypeID;
			public string ID;
			public string Name;
			public int? ParentExerciseID;
			public int? PersonID;
			public DateTimeOffset? UpdatedAt;
			public byte[] Version;
	}

	public class ExerciseContainer
    {
        public List<Exercise> Exercise;
    }
}