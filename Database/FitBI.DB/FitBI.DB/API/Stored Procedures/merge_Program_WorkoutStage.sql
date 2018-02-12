CREATE PROC [API].merge_Program_WorkoutStage
	@tvp_WorkoutStage [Program].[tvp_WorkoutStage] READONLY
AS
MERGE INTO [Program].[WorkoutStage] AS dest
USING @tvp_WorkoutStage As Src
	ON dest.[WorkoutStageID] = src.[WorkoutStageID]
	WHEN MATCHED 
	AND 
		(ISNULL(CONVERT(timestamp,Src.Version), dest.Version) = dest.Version 
			OR Src.UpdatedAt > dest.UpdatedAt)
	
	THEN UPDATE SET dest.[Deleted] = ISNULL(src.[Deleted], dest.[Deleted]),
dest.[GoalNarrative] = ISNULL(src.[GoalNarrative], dest.[GoalNarrative]),
dest.[isTemplate] = ISNULL(src.[isTemplate], dest.[isTemplate]),
dest.[WorkoutID] = ISNULL(src.[WorkoutID], dest.[WorkoutID])

 WHEN NOT MATCHED THEN
 INSERT (
  GoalNarrative,
 ID,
 isTemplate,
 PersonID,
 WorkoutID
)
VALUES(  src.GoalNarrative,
 ISNULL(src.ID, newid()),
 src.isTemplate,
 src.PersonID,
 src.WorkoutID
)
;