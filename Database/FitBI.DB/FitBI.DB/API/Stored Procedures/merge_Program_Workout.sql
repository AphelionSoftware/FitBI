CREATE PROC [API].merge_Program_Workout
	@tvp_Workout [Program].[tvp_Workout] READONLY
AS
MERGE INTO [Program].[Workout] AS dest
USING @tvp_Workout As Src
	ON dest.[WorkoutID] = src.[WorkoutID]
	WHEN MATCHED 
	AND 
		(ISNULL(CONVERT(timestamp,Src.Version), dest.Version) = dest.Version 
			OR Src.UpdatedAt > dest.UpdatedAt)
	
	THEN UPDATE SET dest.[Deleted] = ISNULL(src.[Deleted], dest.[Deleted]),
dest.[GoalNarrative] = ISNULL(src.[GoalNarrative], dest.[GoalNarrative]),
dest.[ID] = ISNULL(src.[ID], dest.[ID]),
dest.[isTemplate] = ISNULL(src.[isTemplate], dest.[isTemplate]),
dest.[Name] = ISNULL(src.[Name], dest.[Name]),
dest.[PlanID] = ISNULL(src.[PlanID], dest.[PlanID])

 WHEN NOT MATCHED THEN
 INSERT (
  Deleted,
 GoalNarrative,
 ID,
 isTemplate,
 Name,
 PersonID,
 PlanID
)
VALUES(  src.Deleted,
 src.GoalNarrative,
 ISNULL(src.ID, newid()),
 src.isTemplate,
 src.Name,
 src.PersonID,
 src.PlanID
)
;