CREATE PROC [API].merge_Stats_SkinfoldMeasurement
	@tvp_SkinfoldMeasurement [Stats].[tvp_SkinfoldMeasurement] READONLY
AS
MERGE INTO [Stats].[SkinfoldMeasurement] AS dest
USING @tvp_SkinfoldMeasurement As Src
	ON dest.[SkinfoldMeasurementID] = src.[SkinfoldMeasurementID]
	WHEN MATCHED 
	AND 
		(ISNULL(CONVERT(timestamp,Src.Version), dest.Version) = dest.Version 
			OR Src.UpdatedAt > dest.UpdatedAt)
	
	THEN UPDATE SET dest.[BodyPartID] = ISNULL(src.[BodyPartID], dest.[BodyPartID]),
dest.[Deleted] = ISNULL(src.[Deleted], dest.[Deleted]),
dest.[ID] = ISNULL(src.[ID], dest.[ID]),
dest.[MeasurementDate] = ISNULL(src.[MeasurementDate], dest.[MeasurementDate]),
dest.[SideMeasurementTypeID] = ISNULL(src.[SideMeasurementTypeID], dest.[SideMeasurementTypeID]),
dest.[SkinfoldThickness] = ISNULL(src.[SkinfoldThickness], dest.[SkinfoldThickness])

 WHEN NOT MATCHED THEN
 INSERT (
  BodyPartID,
 Deleted,
 ID,
 MeasurementDate,
 PersonID,
 SideMeasurementTypeID,
 SkinfoldThickness
)
VALUES(  src.BodyPartID,
 src.Deleted,
 src.ID,
 src.MeasurementDate,
 src.PersonID,
 src.SideMeasurementTypeID,
 src.SkinfoldThickness
)
;