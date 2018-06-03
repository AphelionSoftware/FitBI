CREATE PROC [API].merge_UserSettings_ColumnChoice
	@tvp_ColumnChoice [UserSettings].[tvp_ColumnChoice] READONLY
AS
MERGE INTO [UserSettings].[ColumnChoice] AS dest
USING @tvp_ColumnChoice As Src
	ON dest.[ColumnChoiceID] = src.[ColumnChoiceID]
	WHEN MATCHED 
	AND 
		(ISNULL(CONVERT(timestamp,Src.Version), dest.Version) = dest.Version 
			OR Src.UpdatedAt > dest.UpdatedAt)
	
	THEN UPDATE SET dest.[Code] = ISNULL(src.[Code], dest.[Code]),
dest.[ColumnList] = ISNULL(src.[ColumnList], dest.[ColumnList]),
dest.[Deleted] = ISNULL(src.[Deleted], dest.[Deleted]),
dest.[Name] = ISNULL(src.[Name], dest.[Name]),
dest.[PageID] = ISNULL(src.[PageID], dest.[PageID]),
dest.[UserID] = ISNULL(src.[UserID], dest.[UserID])

 WHEN NOT MATCHED THEN
 INSERT (
  Code,
 ColumnList,
 ID,
 Name,
 PageID,
 UserID
)
VALUES(  src.Code,
 src.ColumnList,
 ISNULL(src.ID, newid()),
 src.Name,
 src.PageID,
 src.UserID
)
;