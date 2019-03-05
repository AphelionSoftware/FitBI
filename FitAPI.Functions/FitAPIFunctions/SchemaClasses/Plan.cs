
using System;		

using System.Collections.Generic;

		namespace FitAPIFunctions.Schema
{
    public class Plan
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
			public int? PlannerPersonID  { get; set; }
			public DateTime? StartDate  { get; set; }
			public DateTime? UpdatedAt  { get; set; }
			public byte[] Version  { get; set; }
	}

	public class PlanContainer
    {
        public List<Plan> Plan;
    }
}