
using System;		

using System.Collections.Generic;

		namespace FitAPIFunctions.Schema
{
    public class Person
    {
			public short? Active  { get; set; }
			public DateTimeOffset? CreatedAt  { get; set; }
			public DateTime? DateOfBirth  { get; set; }
			public int? DateOfBirthID  { get; set; }
			public bool? Deleted  { get; set; }
			public string FirstName  { get; set; }
			public short? Height  { get; set; }
			public string ID  { get; set; }
			public int? PersonID  { get; set; }
			public string Surname  { get; set; }
			public DateTimeOffset? UpdatedAt  { get; set; }
			public byte[] Version  { get; set; }
	}

	public class PersonContainer
    {
        public List<Person> Person;
    }
}