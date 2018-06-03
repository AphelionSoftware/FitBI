
using System;		

using System.Collections.Generic;

		namespace FitAPIFunctions.Schema
{
    public class GeneralSettings
    {
			public short? Active  { get; set; }
			public string Code  { get; set; }
			public DateTimeOffset? CreatedAt  { get; set; }
			public bool? Deleted  { get; set; }
			public int? GeneralSettingsID  { get; set; }
			public string ID  { get; set; }
			public string Name  { get; set; }
			public int? UnitTypeID  { get; set; }
			public DateTimeOffset? UpdatedAt  { get; set; }
			public int? UserID  { get; set; }
			public byte[] Version  { get; set; }
	}

	public class GeneralSettingsContainer
    {
        public List<GeneralSettings> GeneralSettings;
    }
}