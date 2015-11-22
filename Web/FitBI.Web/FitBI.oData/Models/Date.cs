namespace FitBI.oData.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Core.Dates")]
    public partial class Date
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int DateID { get; set; }

        public DateTime FullDate { get; set; }

        [Column("Date", TypeName = "date")]
        public DateTime Date1 { get; set; }

        public int DateCounter { get; set; }

        public int Day { get; set; }

        [Required]
        [StringLength(11)]
        public string DaySuffix { get; set; }

        public int DayOfWeekNumber { get; set; }

        [Required]
        [StringLength(11)]
        public string DayOfWeek { get; set; }

        public int DayOfYear { get; set; }

        public int WeekOfMonth { get; set; }

        [StringLength(11)]
        public string WeekOfMonthName { get; set; }

        public int WeekOfYear { get; set; }

        [StringLength(11)]
        public string WeekOfYearName { get; set; }

        public int MonthNumber { get; set; }

        [StringLength(3)]
        public string ShortMonthName { get; set; }

        [Required]
        [StringLength(11)]
        public string MonthName { get; set; }

        public int Quarter { get; set; }

        [Required]
        [StringLength(11)]
        public string QuarterName { get; set; }

        [Required]
        [StringLength(4)]
        public string YearName { get; set; }

        public int YearNumber { get; set; }

        [Required]
        [StringLength(11)]
        public string YearMonth { get; set; }

        public int YearMonthNumber { get; set; }
    }
}
