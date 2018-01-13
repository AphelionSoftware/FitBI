CREATE PROC [API].merge_Exercise_Sport
	@tvp_Sport [Exercise].[tvp_Sport] READONLY
AS
MERGE INTO [Exercise].[Sport] AS dest
USING @tvp_Sport As Src
	ON dest.[SportID] = src.[SportID]
	WHEN MATCHED 
	AND 
		(ISNULL(CONVERT(timestamp,Src.Version), dest.Version) = dest.Version 
			OR Src.UpdatedAt > dest.UpdatedAt)
	
	THEN UPDATE SET dest.[Code] = ISNULL(src.[Code], dest.[Code]),
dest.[Deleted] = ISNULL(src.[Deleted], dest.[Deleted]),
dest.[Description] = ISNULL(src.[Description], dest.[Description]),
dest.[ID] = ISNULL(src.[ID], dest.[ID]),
dest.[Name] = ISNULL(src.[Name], dest.[Name]),
dest.[ParentSportID] = ISNULL(src.[ParentSportID], dest.[ParentSportID])

 WHEN NOT MATCHED THEN
 INSERT (
  Code,
 Deleted,
 Description,
 ID,
 Name,
 ParentSportID,
 PersonID
)
VALUES(  src.Code,
 src.Deleted,
 src.Description,
 src.ID,
 src.Name,
 src.ParentSportID,
 src.PersonID
)
;