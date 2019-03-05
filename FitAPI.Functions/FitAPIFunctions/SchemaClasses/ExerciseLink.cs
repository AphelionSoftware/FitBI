
using System;		

using System.Collections.Generic;

		namespace FitAPIFunctions.Schema
{
    public class ExerciseLink
    {
			public short? Active  { get; set; }
			public string Code  { get; set; }
			public DateTimeOffset? CreatedAt  { get; set; }
			public bool? Deleted  { get; set; }
			public int? ExerciseID  { get; set; }
			public int? ExerciseLinkID  { get; set; }
			public string ID  { get; set; }
			public string Name  { get; set; }
			public int? PersonID  { get; set; }
			public DateTime? UpdatedAt  { get; set; }
			public string URL  { get; set; }
			public byte[] Version  { get; set; }
	}

	public class ExerciseLinkContainer
    {
        public List<ExerciseLink> ExerciseLink;
    }
}