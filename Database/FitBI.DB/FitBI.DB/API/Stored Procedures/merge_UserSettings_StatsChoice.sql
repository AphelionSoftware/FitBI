CREATE PROC [API].merge_UserSettings_StatsChoice
	@tvp_StatsChoice [UserSettings].[tvp_StatsChoice] READONLY
AS
MERGE INTO [UserSettings].[StatsChoice] AS dest
USING @tvp_StatsChoice As Src
	ON dest.[StatsChoiceID] = src.[StatsChoiceID]
	WHEN MATCHED 
	AND 
		(ISNULL(CONVERT(timestamp,Src.Version), dest.Version) = dest.Version 
			OR Src.UpdatedAt > dest.UpdatedAt)
	
	THEN UPDATE SET dest.[Deleted] = ISNULL(src.[Deleted], dest.[Deleted]),
dest.[StatTypeID] = ISNULL(src.[StatTypeID], dest.[StatTypeID]),
dest.[UserID] = ISNULL(src.[UserID], dest.[UserID])

 WHEN NOT MATCHED THEN
 INSERT (
  ID,
 StatTypeID,
 UserID
)
VALUES(  ISNULL(src.ID, newid()),
 src.StatTypeID,
 src.UserID
)
;