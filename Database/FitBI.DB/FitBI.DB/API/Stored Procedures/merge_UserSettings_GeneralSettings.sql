CREATE PROC [API].merge_UserSettings_GeneralSettings
	@tvp_GeneralSettings [UserSettings].[tvp_GeneralSettings] READONLY
AS
MERGE INTO [UserSettings].[GeneralSettings] AS dest
USING @tvp_GeneralSettings As Src
	ON dest.[GeneralSettingsID] = src.[GeneralSettingsID]
	WHEN MATCHED 
	AND 
		(ISNULL(CONVERT(timestamp,Src.Version), dest.Version) = dest.Version 
			OR Src.UpdatedAt > dest.UpdatedAt)
	
	THEN UPDATE SET dest.[Code] = ISNULL(src.[Code], dest.[Code]),
dest.[Deleted] = ISNULL(src.[Deleted], dest.[Deleted]),
dest.[Name] = ISNULL(src.[Name], dest.[Name]),
dest.[UnitTypeID] = ISNULL(src.[UnitTypeID], dest.[UnitTypeID]),
dest.[UserID] = ISNULL(src.[UserID], dest.[UserID])

 WHEN NOT MATCHED THEN
 INSERT (
  Code,
 ID,
 Name,
 UnitTypeID,
 UserID
)
VALUES(  src.Code,
 ISNULL(src.ID, newid()),
 src.Name,
 src.UnitTypeID,
 src.UserID
)
;