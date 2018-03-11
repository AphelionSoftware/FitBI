CREATE PROC [API].merge_Exercise_ExerciseLink
	@tvp_ExerciseLink [Exercise].[tvp_ExerciseLink] READONLY
AS
MERGE INTO [Exercise].[ExerciseLink] AS dest
USING @tvp_ExerciseLink As Src
	ON dest.[ExerciseLinkID] = src.[ExerciseLinkID]
	WHEN MATCHED 
	AND 
		(ISNULL(CONVERT(timestamp,Src.Version), dest.Version) = dest.Version 
			OR Src.UpdatedAt > dest.UpdatedAt)
	
	THEN UPDATE SET dest.[Code] = ISNULL(src.[Code], dest.[Code]),
dest.[Deleted] = ISNULL(src.[Deleted], dest.[Deleted]),
dest.[ExerciseID] = ISNULL(src.[ExerciseID], dest.[ExerciseID]),
dest.[Name] = ISNULL(src.[Name], dest.[Name]),
dest.[URL] = ISNULL(src.[URL], dest.[URL])

 WHEN NOT MATCHED THEN
 INSERT (
  Code,
 ExerciseID,
 ID,
 Name,
 PersonID,
 URL
)
VALUES(  src.Code,
 src.ExerciseID,
 ISNULL(src.ID, newid()),
 src.Name,
 src.PersonID,
 src.URL
)
;