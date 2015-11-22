namespace FitBI.oData.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Core.MeasurementType")]
    public partial class MeasurementType
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public MeasurementType()
        {
            TapeMeasurements = new HashSet<TapeMeasurement>();
            WeightMeasurements = new HashSet<WeightMeasurement>();
        }

        public int MeasurementTypeID { get; set; }

        public int MeasurementTypeCategoryID { get; set; }

        [Required]
        [StringLength(50)]
        public string Code { get; set; }

        [Required]
        [StringLength(255)]
        public string Name { get; set; }

        public string Description { get; set; }

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

        public virtual MeasurementType MeasurementType1 { get; set; }

        public virtual MeasurementType MeasurementType2 { get; set; }

        public virtual MeasurementTypeCategory MeasurementTypeCategory { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<TapeMeasurement> TapeMeasurements { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<WeightMeasurement> WeightMeasurements { get; set; }
    }
}
