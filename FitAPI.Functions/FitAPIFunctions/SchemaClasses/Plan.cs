
using System;		

using System.Collections.Generic;

		namespace FitAPIFunctions.Schema
{
    public class Plan
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
			public int? PlannerPersonID;
			public DateTime? StartDate;
			public DateTimeOffset? UpdatedAt;
			public byte[] Version;
	}

	public class PlanContainer
    {
        public List<Plan> Plan;
    }
}