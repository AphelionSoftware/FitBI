namespace FitBI.oData.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Core.MeasurementTypeCategory")]
    public partial class MeasurementTypeCategory
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public MeasurementTypeCategory()
        {
            MeasurementTypes = new HashSet<MeasurementType>();
        }

        public int MeasurementTypeCategoryID { get; set; }

        [Required]
        [StringLength(50)]
        public string Code { get; set; }

        [Required]
        [StringLength(255)]
        public string Name { get; set; }

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

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MeasurementType> MeasurementTypes { get; set; }
    }
}
