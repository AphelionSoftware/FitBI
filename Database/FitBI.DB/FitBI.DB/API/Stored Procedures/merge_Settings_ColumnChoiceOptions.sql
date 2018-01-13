CREATE PROC [API].merge_Settings_ColumnChoiceOptions
	@tvp_ColumnChoiceOptions [Settings].[tvp_ColumnChoiceOptions] READONLY
AS
MERGE INTO [Settings].[ColumnChoiceOptions] AS dest
USING @tvp_ColumnChoiceOptions As Src
	ON dest.[ColumnChoiceOptionsID] = src.[ColumnChoiceOptionsID]
	WHEN MATCHED 
	AND 
		(ISNULL(CONVERT(timestamp,Src.Version), dest.Version) = dest.Version 
			OR Src.UpdatedAt > dest.UpdatedAt)
	
	THEN UPDATE SET dest.[Code] = ISNULL(src.[Code], dest.[Code]),
dest.[ID] = ISNULL(src.[ID], dest.[ID]),
dest.[Name] = ISNULL(src.[Name], dest.[Name]),
dest.[PageID] = ISNULL(src.[PageID], dest.[PageID])

 WHEN NOT MATCHED THEN
 INSERT (
  Code,
 ID,
 Name,
 PageID
)
VALUES(  src.Code,
 src.ID,
 src.Name,
 src.PageID
)
;