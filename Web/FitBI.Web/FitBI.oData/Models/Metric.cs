namespace FitBI.oData.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Stats.Metric")]
    public partial class Metric
    {
        public int MetricID { get; set; }

        public int PersonID { get; set; }

        public decimal? Weight { get; set; }

        public decimal? BodyFatPercentage { get; set; }

        public decimal? MusclePercentage { get; set; }

        public decimal? WaterPercentage { get; set; }

        public decimal? BonePercentage { get; set; }

        public int? PercentMeasurementTypeID { get; set; }

        public short Active { get; set; }

        public DateTime sysCreatedOn { get; set; }

        [Required]
        [StringLength(50)]
        public string sysCreatedBy { get; set; }

        public DateTime sysModifiedOn { get; set; }

        [Required]
        [StringLength(50)]
        public string sysModifiedBy { get; set; }

        [Column(TypeName = "timestamp")]
        [MaxLength(8)]
        [Timestamp]
        public byte[] sysTimestamp { get; set; }

        public virtual Active Active1 { get; set; }
    }
}
