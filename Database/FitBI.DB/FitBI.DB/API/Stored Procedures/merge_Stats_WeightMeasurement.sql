CREATE PROC [API].merge_Stats_WeightMeasurement
	@tvp_WeightMeasurement [Stats].[tvp_WeightMeasurement] READONLY
AS
MERGE INTO [Stats].[WeightMeasurement] AS dest
USING @tvp_WeightMeasurement As Src
	ON dest.[WeightMeasurementID] = src.[WeightMeasurementID]
		AND CAST(Src.MeasurementDate as DATE) <> CAST(Dest.MeasurementDate as DATE)
	WHEN MATCHED 
	AND 
		(ISNULL(CONVERT(timestamp,Src.Version), dest.Version) = dest.Version 
			OR Src.UpdatedAt > dest.UpdatedAt)
	
	THEN UPDATE SET dest.[BodyFatPercentage] = ISNULL(src.[BodyFatPercentage], dest.[BodyFatPercentage]),
dest.[BonePercentage] = ISNULL(src.[BonePercentage], dest.[BonePercentage]),
dest.[Deleted] = ISNULL(src.[Deleted], dest.[Deleted]),
dest.[MeasurementDate] = ISNULL(src.[MeasurementDate], dest.[MeasurementDate]),
dest.[MusclePercentage] = ISNULL(src.[MusclePercentage], dest.[MusclePercentage]),
dest.[PercentMeasurementTypeID] = ISNULL(src.[PercentMeasurementTypeID], dest.[PercentMeasurementTypeID]),
dest.[UnitID] = ISNULL(src.[UnitID], dest.[UnitID]),
dest.[WaterPercentage] = ISNULL(src.[WaterPercentage], dest.[WaterPercentage]),
dest.[Weight] = ISNULL(src.[Weight], dest.[Weight])

 WHEN NOT MATCHED THEN
 INSERT (
  BodyFatPercentage,
 BonePercentage,
 ID,
 MeasurementDate,
 MusclePercentage,
 PercentMeasurementTypeID,
 PersonID,
 UnitID,
 WaterPercentage,
 Weight
)
VALUES(  src.BodyFatPercentage,
 src.BonePercentage,
 ISNULL(src.ID, newid()),
 src.MeasurementDate,
 src.MusclePercentage,
 src.PercentMeasurementTypeID,
 src.PersonID,
 src.UnitID,
 src.WaterPercentage,
 src.Weight
)
;