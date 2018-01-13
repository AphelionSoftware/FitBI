CREATE PROC [API].merge_Stats_WeightMeasurement
	@tvp_WeightMeasurement [Stats].[tvp_WeightMeasurement] READONLY
AS
MERGE INTO [Stats].[WeightMeasurement] AS dest
USING @tvp_WeightMeasurement As Src
	ON dest.[WeightMeasurementID] = src.[WeightMeasurementID]
	WHEN MATCHED 
	AND 
		(ISNULL(CONVERT(timestamp,Src.Version), dest.Version) = dest.Version 
			OR Src.UpdatedAt > dest.UpdatedAt)
	
	THEN UPDATE SET dest.[BodyFatPercentage] = ISNULL(src.[BodyFatPercentage], dest.[BodyFatPercentage]),
dest.[BonePercentage] = ISNULL(src.[BonePercentage], dest.[BonePercentage]),
dest.[Deleted] = ISNULL(src.[Deleted], dest.[Deleted]),
dest.[ID] = ISNULL(src.[ID], dest.[ID]),
dest.[MusclePercentage] = ISNULL(src.[MusclePercentage], dest.[MusclePercentage]),
dest.[PercentMeasurementTypeID] = ISNULL(src.[PercentMeasurementTypeID], dest.[PercentMeasurementTypeID]),
dest.[UnitID] = ISNULL(src.[UnitID], dest.[UnitID]),
dest.[WaterPercentage] = ISNULL(src.[WaterPercentage], dest.[WaterPercentage]),
dest.[Weight] = ISNULL(src.[Weight], dest.[Weight])

 WHEN NOT MATCHED THEN
 INSERT (
  BodyFatPercentage,
 BonePercentage,
 Deleted,
 ID,
 MusclePercentage,
 PercentMeasurementTypeID,
 PersonID,
 UnitID,
 WaterPercentage,
 Weight
)
VALUES(  src.BodyFatPercentage,
 src.BonePercentage,
 src.Deleted,
 src.ID,
 src.MusclePercentage,
 src.PercentMeasurementTypeID,
 src.PersonID,
 src.UnitID,
 src.WaterPercentage,
 src.Weight
)
;