
using System;		

using System.Collections.Generic;

		namespace FitAPIFunctions.Schema
{
    public class ExerciseType
    {
			public short? Active  { get; set; }
			public string Code  { get; set; }
			public DateTimeOffset? CreatedAt  { get; set; }
			public bool? Deleted  { get; set; }
			public int? ExerciseTypeID  { get; set; }
			public string ID  { get; set; }
			public string Name  { get; set; }
			public int? ParentExerciseTypeID  { get; set; }
			public int? PersonID  { get; set; }
			public DateTimeOffset? UpdatedAt  { get; set; }
			public byte[] Version  { get; set; }
	}

	public class ExerciseTypeContainer
    {
        public List<ExerciseType> ExerciseType;
    }
}