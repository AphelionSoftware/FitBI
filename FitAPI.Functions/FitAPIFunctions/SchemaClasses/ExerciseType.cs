
using System;		

using System.Collections.Generic;

		namespace FitAPIFunctions.Schema
{
    public class ExerciseType
    {
			public short? Active;
			public string Code;
			public DateTimeOffset? CreatedAt;
			public bool? Deleted;
			public int? ExerciseTypeID;
			public string ID;
			public string Name;
			public int? ParentExerciseTypeID;
			public int? PersonID;
			public DateTimeOffset? UpdatedAt;
			public byte[] Version;
	}

	public class ExerciseTypeContainer
    {
        public List<ExerciseType> ExerciseType;
    }
}