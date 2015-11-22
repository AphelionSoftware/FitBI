namespace FitBI.oData.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Stats.TapeMeasurement")]
    public partial class TapeMeasurement
    {
        public int TapeMeasurementID { get; set; }

        public int PersonID { get; set; }

        public decimal? TapeLength { get; set; }

        public int? SideMeasurementTypeID { get; set; }

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

        public virtual MeasurementType MeasurementType { get; set; }
    }
}
