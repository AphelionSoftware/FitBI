
using System;		

using System.Collections.Generic;

		namespace FitAPIFunctions.Schema
{
    public class Person
    {
			public short? Active;
			public DateTimeOffset? CreatedAt;
			public DateTime? DateOfBirth;
			public int? DateOfBirthID;
			public bool? Deleted;
			public string FirstName;
			public short? Height;
			public string ID;
			public int? PersonID;
			public string Surname;
			public DateTimeOffset? UpdatedAt;
			public byte[] Version;
	}

	public class PersonContainer
    {
        public List<Person> Person;
    }
}