CREATE PROC [API].merge_Exercise_ExerciseType
	@tvp_ExerciseType [Exercise].[tvp_ExerciseType] READONLY
AS
MERGE INTO [Exercise].[ExerciseType] AS dest
USING @tvp_ExerciseType As Src
	ON dest.[ExerciseTypeID] = src.[ExerciseTypeID]
	WHEN MATCHED 
	AND 
		(ISNULL(CONVERT(timestamp,Src.Version), dest.Version) = dest.Version 
			OR Src.UpdatedAt > dest.UpdatedAt)
	
	THEN UPDATE SET dest.[Code] = ISNULL(src.[Code], dest.[Code]),
dest.[Deleted] = ISNULL(src.[Deleted], dest.[Deleted]),
dest.[ID] = ISNULL(src.[ID], dest.[ID]),
dest.[Name] = ISNULL(src.[Name], dest.[Name]),
dest.[ParentExerciseTypeID] = ISNULL(src.[ParentExerciseTypeID], dest.[ParentExerciseTypeID])

 WHEN NOT MATCHED THEN
 INSERT (
  Code,
 Deleted,
 ID,
 Name,
 ParentExerciseTypeID,
 PersonID
)
VALUES(  src.Code,
 src.Deleted,
 ISNULL(src.ID, newid()),
 src.Name,
 src.ParentExerciseTypeID,
 src.PersonID
)
;