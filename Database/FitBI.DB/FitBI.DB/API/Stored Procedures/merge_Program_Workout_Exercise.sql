CREATE PROC [API].merge_Program_Workout_Exercise
	@tvp_Workout_Exercise [Program].[tvp_Workout_Exercise] READONLY
AS
MERGE INTO [Program].[Workout_Exercise] AS dest
USING @tvp_Workout_Exercise As Src
	ON dest.[Workout_ExerciseID] = src.[Workout_ExerciseID]
	WHEN MATCHED 
	AND 
		(ISNULL(CONVERT(timestamp,Src.Version), dest.Version) = dest.Version 
			OR Src.UpdatedAt > dest.UpdatedAt)
	
	THEN UPDATE SET dest.[Deleted] = ISNULL(src.[Deleted], dest.[Deleted]),
dest.[ExerciseID] = ISNULL(src.[ExerciseID], dest.[ExerciseID]),
dest.[GoalNarrative] = ISNULL(src.[GoalNarrative], dest.[GoalNarrative]),
dest.[ID] = ISNULL(src.[ID], dest.[ID]),
dest.[WorkoutID] = ISNULL(src.[WorkoutID], dest.[WorkoutID])

 WHEN NOT MATCHED THEN
 INSERT (
  Deleted,
 ExerciseID,
 GoalNarrative,
 ID,
 PersonID,
 WorkoutID
)
VALUES(  src.Deleted,
 src.ExerciseID,
 src.GoalNarrative,
 ISNULL(src.ID, newid()),
 src.PersonID,
 src.WorkoutID
)
;