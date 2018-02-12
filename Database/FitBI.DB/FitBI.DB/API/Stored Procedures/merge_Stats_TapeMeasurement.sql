CREATE PROC [API].merge_Stats_TapeMeasurement
	@tvp_TapeMeasurement [Stats].[tvp_TapeMeasurement] READONLY
AS
MERGE INTO [Stats].[TapeMeasurement] AS dest
USING @tvp_TapeMeasurement As Src
	ON dest.[TapeMeasurementID] = src.[TapeMeasurementID]
		AND CAST(Src.MeasurementDate as DATE) <> CAST(Dest.MeasurementDate as DATE)
	WHEN MATCHED 
	AND 
		(ISNULL(CONVERT(timestamp,Src.Version), dest.Version) = dest.Version 
			OR Src.UpdatedAt > dest.UpdatedAt)
	
	THEN UPDATE SET dest.[BodyPartID] = ISNULL(src.[BodyPartID], dest.[BodyPartID]),
dest.[Deleted] = ISNULL(src.[Deleted], dest.[Deleted]),
dest.[MeasurementDate] = ISNULL(src.[MeasurementDate], dest.[MeasurementDate]),
dest.[SideMeasurementTypeID] = ISNULL(src.[SideMeasurementTypeID], dest.[SideMeasurementTypeID]),
dest.[TapeLength] = ISNULL(src.[TapeLength], dest.[TapeLength])

 WHEN NOT MATCHED THEN
 INSERT (
  BodyPartID,
 ID,
 MeasurementDate,
 PersonID,
 SideMeasurementTypeID,
 TapeLength
)
VALUES(  src.BodyPartID,
 ISNULL(src.ID, newid()),
 src.MeasurementDate,
 src.PersonID,
 src.SideMeasurementTypeID,
 src.TapeLength
)
;