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
dest.[ID] = ISNULL(src.[ID], dest.[ID]),
dest.[Name] = ISNULL(src.[Name], dest.[Name]),
dest.[PageID] = ISNULL(src.[PageID], dest.[PageID])

 WHEN NOT MATCHED THEN
 INSERT (
  Code,
 ColumnList,
 Deleted,
 ID,
 Name,
 PageID
)
VALUES(  src.Code,
 src.ColumnList,
 src.Deleted,
 src.ID,
 src.Name,
 src.PageID
)
;