CREATE PROC [API].merge_Stats_Metric
	@tvp_Metric [Stats].[tvp_Metric] READONLY
AS
MERGE INTO [Stats].[Metric] AS dest
USING @tvp_Metric As Src
	ON dest.[MetricID] = src.[MetricID]
	WHEN MATCHED 
	AND 
		(ISNULL(CONVERT(timestamp,Src.Version), dest.Version) = dest.Version 
			OR Src.UpdatedAt > dest.UpdatedAt)
	
	THEN UPDATE SET dest.[BodyFatPercentage] = ISNULL(src.[BodyFatPercentage], dest.[BodyFatPercentage]),
dest.[BonePercentage] = ISNULL(src.[BonePercentage], dest.[BonePercentage]),
dest.[Deleted] = ISNULL(src.[Deleted], dest.[Deleted]),
dest.[MusclePercentage] = ISNULL(src.[MusclePercentage], dest.[MusclePercentage]),
dest.[PercentMeasurementTypeID] = ISNULL(src.[PercentMeasurementTypeID], dest.[PercentMeasurementTypeID]),
dest.[WaterPercentage] = ISNULL(src.[WaterPercentage], dest.[WaterPercentage]),
dest.[Weight] = ISNULL(src.[Weight], dest.[Weight])

 WHEN NOT MATCHED THEN
 INSERT (
  BodyFatPercentage,
 BonePercentage,
 ID,
 MusclePercentage,
 PercentMeasurementTypeID,
 PersonID,
 WaterPercentage,
 Weight
)
VALUES(  src.BodyFatPercentage,
 src.BonePercentage,
 ISNULL(src.ID, newid()),
 src.MusclePercentage,
 src.PercentMeasurementTypeID,
 src.PersonID,
 src.WaterPercentage,
 src.Weight
)
;