CREATE PROC [API].merge_stats_MetricValue
	@tvp_MetricValue [stats].[tvp_MetricValue] READONLY
AS
MERGE INTO [stats].[MetricValue] AS dest
USING @tvp_MetricValue As Src
	ON dest.[MetricValueID] = src.[MetricValueID]
	WHEN MATCHED 
	AND 
		(ISNULL(CONVERT(timestamp,Src.Version), dest.Version) = dest.Version 
			OR Src.UpdatedAt > dest.UpdatedAt)
	
	THEN UPDATE SET dest.[Deleted] = ISNULL(src.[Deleted], dest.[Deleted]),
dest.[MetricDetailID] = ISNULL(src.[MetricDetailID], dest.[MetricDetailID])

 WHEN NOT MATCHED THEN
 INSERT (
  ID,
 MetricDetailID,
 PersonID
)
VALUES(  ISNULL(src.ID, newid()),
 src.MetricDetailID,
 src.PersonID
)
;