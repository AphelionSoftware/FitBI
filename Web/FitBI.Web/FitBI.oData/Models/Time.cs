namespace FitBI.oData.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Core.Time")]
    public partial class Time
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int TimeID { get; set; }

        public int TimeInt { get; set; }

        [Column("Time")]
        public TimeSpan Time1 { get; set; }

        public int SecondOfMinute { get; set; }

        public int MinuteOfHour { get; set; }

        public int HourOfDay { get; set; }

        public int SecondOfHour { get; set; }

        public int SecondOfDay { get; set; }

        public int MinuteOfDay { get; set; }
    }
}
