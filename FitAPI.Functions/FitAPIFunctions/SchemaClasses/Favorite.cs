
using System;		

using System.Collections.Generic;

		namespace FitAPIFunctions.Schema
{
    public class Favorite
    {
			public short? Active  { get; set; }
			public string Code  { get; set; }
			public DateTimeOffset? CreatedAt  { get; set; }
			public bool? Deleted  { get; set; }
			public int? FavoriteID  { get; set; }
			public string ID  { get; set; }
			public bool? isFavorite  { get; set; }
			public int? MetricSetID  { get; set; }
			public string Name  { get; set; }
			public DateTime? UpdatedAt  { get; set; }
			public int? UserID  { get; set; }
			public byte[] Version  { get; set; }
	}

	public class FavoriteContainer
    {
        public List<Favorite> Favorite;
    }
}