CREATE PROC [API].merge_Exercise_Exercise_Sport
	@tvp_Exercise_Sport [Exercise].[tvp_Exercise_Sport] READONLY
AS
MERGE INTO [Exercise].[Exercise_Sport] AS dest
USING @tvp_Exercise_Sport As Src
	ON dest.[Exercise_SportID] = src.[Exercise_SportID]
	WHEN MATCHED 
	AND 
		(ISNULL(CONVERT(timestamp,Src.Version), dest.Version) = dest.Version 
			OR Src.UpdatedAt > dest.UpdatedAt)
	
	THEN UPDATE SET dest.[Deleted] = ISNULL(src.[Deleted], dest.[Deleted]),
dest.[ExerciseID] = ISNULL(src.[ExerciseID], dest.[ExerciseID]),
dest.[GoalNarrative] = ISNULL(src.[GoalNarrative], dest.[GoalNarrative]),
dest.[ID] = ISNULL(src.[ID], dest.[ID]),
dest.[SportID] = ISNULL(src.[SportID], dest.[SportID])

 WHEN NOT MATCHED THEN
 INSERT (
  Deleted,
 ExerciseID,
 GoalNarrative,
 ID,
 PersonID,
 SportID
)
VALUES(  src.Deleted,
 src.ExerciseID,
 src.GoalNarrative,
 ISNULL(src.ID, newid()),
 src.PersonID,
 src.SportID
)
;