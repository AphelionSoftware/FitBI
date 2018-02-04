CREATE PROC [API].merge_Exercise_Exercise
	@tvp_Exercise [Exercise].[tvp_Exercise] READONLY
AS
MERGE INTO [Exercise].[Exercise] AS dest
USING @tvp_Exercise As Src
	ON dest.[ExerciseID] = src.[ExerciseID]
	WHEN MATCHED 
	AND 
		(ISNULL(CONVERT(timestamp,Src.Version), dest.Version) = dest.Version 
			OR Src.UpdatedAt > dest.UpdatedAt)
	
	THEN UPDATE SET dest.[Code] = ISNULL(src.[Code], dest.[Code]),
dest.[Deleted] = ISNULL(src.[Deleted], dest.[Deleted]),
dest.[Description] = ISNULL(src.[Description], dest.[Description]),
dest.[ExerciseTypeID] = ISNULL(src.[ExerciseTypeID], dest.[ExerciseTypeID]),
dest.[Name] = ISNULL(src.[Name], dest.[Name]),
dest.[ParentExerciseID] = ISNULL(src.[ParentExerciseID], dest.[ParentExerciseID])

 WHEN NOT MATCHED THEN
 INSERT (
  Code,
 Description,
 ExerciseTypeID,
 ID,
 Name,
 ParentExerciseID,
 PersonID
)
VALUES(  src.Code,
 src.Description,
 src.ExerciseTypeID,
 ISNULL(src.ID, newid()),
 src.Name,
 src.ParentExerciseID,
 src.PersonID
)
;