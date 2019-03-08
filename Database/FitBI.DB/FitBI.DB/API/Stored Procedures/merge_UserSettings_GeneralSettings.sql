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
	
	THEN UPDATE SET dest.[BooleanValue] = ISNULL(src.[BooleanValue], dest.[BooleanValue]),
dest.[Code] = ISNULL(src.[Code], dest.[Code]),
dest.[DecimalValue] = ISNULL(src.[DecimalValue], dest.[DecimalValue]),
dest.[Deleted] = ISNULL(src.[Deleted], dest.[Deleted]),
dest.[FloatingValue] = ISNULL(src.[FloatingValue], dest.[FloatingValue]),
dest.[IntegerValue] = ISNULL(src.[IntegerValue], dest.[IntegerValue]),
dest.[Name] = ISNULL(src.[Name], dest.[Name]),
dest.[UnitTypeID] = ISNULL(src.[UnitTypeID], dest.[UnitTypeID]),
dest.[UserID] = ISNULL(src.[UserID], dest.[UserID])

 WHEN NOT MATCHED THEN
 INSERT (
  BooleanValue,
 Code,
 DecimalValue,
 FloatingValue,
 ID,
 IntegerValue,
 Name,
 UnitTypeID,
 UserID
)
VALUES(  src.BooleanValue,
 src.Code,
 src.DecimalValue,
 src.FloatingValue,
 ISNULL(src.ID, newid()),
 src.IntegerValue,
 src.Name,
 src.UnitTypeID,
 src.UserID
)
;