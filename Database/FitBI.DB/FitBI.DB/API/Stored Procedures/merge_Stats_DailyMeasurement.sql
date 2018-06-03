CREATE PROC [API].merge_Stats_DailyMeasurement
	@tvp_DailyMeasurement [Stats].[tvp_DailyMeasurement] READONLY
AS
MERGE INTO [Stats].[DailyMeasurement] AS dest
USING @tvp_DailyMeasurement As Src
	ON dest.[DailyMeasurementID] = src.[DailyMeasurementID]
		AND CAST(Src.MeasurementDate as DATE) <> CAST(Dest.MeasurementDate as DATE)
	WHEN MATCHED 
	AND 
		(ISNULL(CONVERT(timestamp,Src.Version), dest.Version) = dest.Version 
			OR Src.UpdatedAt > dest.UpdatedAt)
	
	THEN UPDATE SET dest.[BellyButtonCircumference] = ISNULL(src.[BellyButtonCircumference], dest.[BellyButtonCircumference]),
dest.[BicepCircumference] = ISNULL(src.[BicepCircumference], dest.[BicepCircumference]),
dest.[BodyFatPercentage] = ISNULL(src.[BodyFatPercentage], dest.[BodyFatPercentage]),
dest.[BonePercentage] = ISNULL(src.[BonePercentage], dest.[BonePercentage]),
dest.[CalvesCircumference] = ISNULL(src.[CalvesCircumference], dest.[CalvesCircumference]),
dest.[ChestCircumference] = ISNULL(src.[ChestCircumference], dest.[ChestCircumference]),
dest.[Deleted] = ISNULL(src.[Deleted], dest.[Deleted]),
dest.[HipCircumference] = ISNULL(src.[HipCircumference], dest.[HipCircumference]),
dest.[MeasurementDate] = ISNULL(src.[MeasurementDate], dest.[MeasurementDate]),
dest.[MusclePercentage] = ISNULL(src.[MusclePercentage], dest.[MusclePercentage]),
dest.[NeckCircumference] = ISNULL(src.[NeckCircumference], dest.[NeckCircumference]),
dest.[PercentMeasurementTypeID] = ISNULL(src.[PercentMeasurementTypeID], dest.[PercentMeasurementTypeID]),
dest.[QuadCircumference] = ISNULL(src.[QuadCircumference], dest.[QuadCircumference]),
dest.[UnitID] = ISNULL(src.[UnitID], dest.[UnitID]),
dest.[WaistCircumference] = ISNULL(src.[WaistCircumference], dest.[WaistCircumference]),
dest.[WaterPercentage] = ISNULL(src.[WaterPercentage], dest.[WaterPercentage]),
dest.[Weight] = ISNULL(src.[Weight], dest.[Weight])

 WHEN NOT MATCHED THEN
 INSERT (
  BellyButtonCircumference,
 BicepCircumference,
 BodyFatPercentage,
 BonePercentage,
 CalvesCircumference,
 ChestCircumference,
 HipCircumference,
 ID,
 MeasurementDate,
 MusclePercentage,
 NeckCircumference,
 PercentMeasurementTypeID,
 PersonID,
 QuadCircumference,
 UnitID,
 WaistCircumference,
 WaterPercentage,
 Weight
)
VALUES(  src.BellyButtonCircumference,
 src.BicepCircumference,
 src.BodyFatPercentage,
 src.BonePercentage,
 src.CalvesCircumference,
 src.ChestCircumference,
 src.HipCircumference,
 ISNULL(src.ID, newid()),
 src.MeasurementDate,
 src.MusclePercentage,
 src.NeckCircumference,
 src.PercentMeasurementTypeID,
 src.PersonID,
 src.QuadCircumference,
 src.UnitID,
 src.WaistCircumference,
 src.WaterPercentage,
 src.Weight
)
;