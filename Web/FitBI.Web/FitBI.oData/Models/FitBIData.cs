namespace FitBI.oData.Models
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class FitBIData : DbContext
    {
        public FitBIData()
            : base("name=FitBIData")
        {
        }

        public virtual DbSet<Active> Actives { get; set; }
        public virtual DbSet<Date> Dates { get; set; }
        public virtual DbSet<MeasurementType> MeasurementTypes { get; set; }
        public virtual DbSet<MeasurementTypeCategory> MeasurementTypeCategories { get; set; }
        public virtual DbSet<Time> Times { get; set; }
        public virtual DbSet<Metric> Metrics { get; set; }
        public virtual DbSet<Person> People { get; set; }
        public virtual DbSet<TapeMeasurement> TapeMeasurements { get; set; }
        public virtual DbSet<WeightMeasurement> WeightMeasurements { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Active>()
                .Property(e => e.Code)
                .IsFixedLength()
                .IsUnicode(false);

            modelBuilder.Entity<Active>()
                .Property(e => e.Name)
                .IsUnicode(false);

            modelBuilder.Entity<Active>()
                .HasMany(e => e.TapeMeasurements)
                .WithRequired(e => e.Active1)
                .HasForeignKey(e => e.Active)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Active>()
                .HasMany(e => e.MeasurementTypes)
                .WithRequired(e => e.Active1)
                .HasForeignKey(e => e.Active)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Active>()
                .HasMany(e => e.MeasurementTypeCategories)
                .WithRequired(e => e.Active1)
                .HasForeignKey(e => e.Active)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Active>()
                .HasMany(e => e.Metrics)
                .WithRequired(e => e.Active1)
                .HasForeignKey(e => e.Active)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Active>()
                .HasMany(e => e.People)
                .WithRequired(e => e.Active1)
                .HasForeignKey(e => e.Active)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Active>()
                .HasMany(e => e.WeightMeasurements)
                .WithRequired(e => e.Active1)
                .HasForeignKey(e => e.Active)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Date>()
                .Property(e => e.DaySuffix)
                .IsUnicode(false);

            modelBuilder.Entity<Date>()
                .Property(e => e.DayOfWeek)
                .IsUnicode(false);

            modelBuilder.Entity<Date>()
                .Property(e => e.WeekOfMonthName)
                .IsUnicode(false);

            modelBuilder.Entity<Date>()
                .Property(e => e.WeekOfYearName)
                .IsUnicode(false);

            modelBuilder.Entity<Date>()
                .Property(e => e.ShortMonthName)
                .IsUnicode(false);

            modelBuilder.Entity<Date>()
                .Property(e => e.MonthName)
                .IsUnicode(false);

            modelBuilder.Entity<Date>()
                .Property(e => e.QuarterName)
                .IsUnicode(false);

            modelBuilder.Entity<Date>()
                .Property(e => e.YearName)
                .IsFixedLength()
                .IsUnicode(false);

            modelBuilder.Entity<Date>()
                .Property(e => e.YearMonth)
                .IsUnicode(false);

            modelBuilder.Entity<MeasurementType>()
                .Property(e => e.Code)
                .IsUnicode(false);

            modelBuilder.Entity<MeasurementType>()
                .Property(e => e.Name)
                .IsUnicode(false);

            modelBuilder.Entity<MeasurementType>()
                .Property(e => e.Description)
                .IsUnicode(false);

            modelBuilder.Entity<MeasurementType>()
                .Property(e => e.sysCreatedBy)
                .IsUnicode(false);

            modelBuilder.Entity<MeasurementType>()
                .Property(e => e.sysModifiedBy)
                .IsUnicode(false);

            modelBuilder.Entity<MeasurementType>()
                .Property(e => e.sysTimestamp)
                .IsFixedLength();

            modelBuilder.Entity<MeasurementType>()
                .HasOptional(e => e.MeasurementType1)
                .WithRequired(e => e.MeasurementType2);

            modelBuilder.Entity<MeasurementType>()
                .HasMany(e => e.TapeMeasurements)
                .WithOptional(e => e.MeasurementType)
                .HasForeignKey(e => e.SideMeasurementTypeID);

            modelBuilder.Entity<MeasurementType>()
                .HasMany(e => e.WeightMeasurements)
                .WithOptional(e => e.MeasurementType)
                .HasForeignKey(e => e.PercentMeasurementTypeID);

            modelBuilder.Entity<MeasurementTypeCategory>()
                .Property(e => e.Code)
                .IsUnicode(false);

            modelBuilder.Entity<MeasurementTypeCategory>()
                .Property(e => e.Name)
                .IsUnicode(false);

            modelBuilder.Entity<MeasurementTypeCategory>()
                .Property(e => e.sysCreatedBy)
                .IsUnicode(false);

            modelBuilder.Entity<MeasurementTypeCategory>()
                .Property(e => e.sysModifiedBy)
                .IsUnicode(false);

            modelBuilder.Entity<MeasurementTypeCategory>()
                .Property(e => e.sysTimestamp)
                .IsFixedLength();

            modelBuilder.Entity<MeasurementTypeCategory>()
                .HasMany(e => e.MeasurementTypes)
                .WithRequired(e => e.MeasurementTypeCategory)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Metric>()
                .Property(e => e.Weight)
                .HasPrecision(10, 6);

            modelBuilder.Entity<Metric>()
                .Property(e => e.BodyFatPercentage)
                .HasPrecision(10, 6);

            modelBuilder.Entity<Metric>()
                .Property(e => e.MusclePercentage)
                .HasPrecision(10, 6);

            modelBuilder.Entity<Metric>()
                .Property(e => e.WaterPercentage)
                .HasPrecision(10, 6);

            modelBuilder.Entity<Metric>()
                .Property(e => e.BonePercentage)
                .HasPrecision(10, 6);

            modelBuilder.Entity<Metric>()
                .Property(e => e.sysCreatedBy)
                .IsUnicode(false);

            modelBuilder.Entity<Metric>()
                .Property(e => e.sysModifiedBy)
                .IsUnicode(false);

            modelBuilder.Entity<Metric>()
                .Property(e => e.sysTimestamp)
                .IsFixedLength();

            modelBuilder.Entity<Person>()
                .Property(e => e.sysCreatedBy)
                .IsUnicode(false);

            modelBuilder.Entity<Person>()
                .Property(e => e.sysModifiedBy)
                .IsUnicode(false);

            modelBuilder.Entity<Person>()
                .Property(e => e.sysTimestamp)
                .IsFixedLength();

            modelBuilder.Entity<TapeMeasurement>()
                .Property(e => e.TapeLength)
                .HasPrecision(10, 6);

            modelBuilder.Entity<TapeMeasurement>()
                .Property(e => e.sysCreatedBy)
                .IsUnicode(false);

            modelBuilder.Entity<TapeMeasurement>()
                .Property(e => e.sysModifiedBy)
                .IsUnicode(false);

            modelBuilder.Entity<TapeMeasurement>()
                .Property(e => e.sysTimestamp)
                .IsFixedLength();

            modelBuilder.Entity<WeightMeasurement>()
                .Property(e => e.Weight)
                .HasPrecision(10, 6);

            modelBuilder.Entity<WeightMeasurement>()
                .Property(e => e.BodyFatPercentage)
                .HasPrecision(10, 6);

            modelBuilder.Entity<WeightMeasurement>()
                .Property(e => e.MusclePercentage)
                .HasPrecision(10, 6);

            modelBuilder.Entity<WeightMeasurement>()
                .Property(e => e.WaterPercentage)
                .HasPrecision(10, 6);

            modelBuilder.Entity<WeightMeasurement>()
                .Property(e => e.BonePercentage)
                .HasPrecision(10, 6);

            modelBuilder.Entity<WeightMeasurement>()
                .Property(e => e.sysCreatedBy)
                .IsUnicode(false);

            modelBuilder.Entity<WeightMeasurement>()
                .Property(e => e.sysModifiedBy)
                .IsUnicode(false);

            modelBuilder.Entity<WeightMeasurement>()
                .Property(e => e.sysTimestamp)
                .IsFixedLength();

            modelBuilder.Entity<WeightMeasurement>()
                .HasOptional(e => e.WeightMeasurement1)
                .WithRequired(e => e.WeightMeasurement2);
        }
    }
}
