
using System;		

using System.Collections.Generic;

		namespace FitAPIFunctions.Schema
{
    public class Exercise
    {
			public short? Active {get; set; }
			public string Code {get; set; }
			public DateTimeOffset? CreatedAt {get; set; }
			public bool? Deleted {get; set; }
			public string Description {get; set; }
			public int? ExerciseID {get; set; }
			public int? ExerciseTypeID {get; set; }
			public string ID {get; set; }
			public string Name {get; set; }
			public int? ParentExerciseID {get; set; }
			public int? PersonID {get; set; }
			public DateTimeOffset? UpdatedAt {get; set; }
			public byte[] Version {get; set; }

            
	}

	public class ExerciseContainer
    {
        public List<Exercise> Exercise;
    }
}