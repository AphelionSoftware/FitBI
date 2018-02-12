CREATE PROC [API].merge_Program_Plan
	@tvp_Plan [Program].[tvp_Plan] READONLY
AS
MERGE INTO [Program].[Plan] AS dest
USING @tvp_Plan As Src
	ON dest.[PlanID] = src.[PlanID]
	WHEN MATCHED 
	AND 
		(ISNULL(CONVERT(timestamp,Src.Version), dest.Version) = dest.Version 
			OR Src.UpdatedAt > dest.UpdatedAt)
	
	THEN UPDATE SET dest.[Deleted] = ISNULL(src.[Deleted], dest.[Deleted]),
dest.[GoalNarrative] = ISNULL(src.[GoalNarrative], dest.[GoalNarrative]),
dest.[isTemplate] = ISNULL(src.[isTemplate], dest.[isTemplate]),
dest.[Name] = ISNULL(src.[Name], dest.[Name]),
dest.[PlannerPersonID] = ISNULL(src.[PlannerPersonID], dest.[PlannerPersonID]),
dest.[StartDate] = ISNULL(src.[StartDate], dest.[StartDate])

 WHEN NOT MATCHED THEN
 INSERT (
  GoalNarrative,
 ID,
 isTemplate,
 Name,
 PersonID,
 PlannerPersonID,
 StartDate
)
VALUES(  src.GoalNarrative,
 ISNULL(src.ID, newid()),
 src.isTemplate,
 src.Name,
 src.PersonID,
 src.PlannerPersonID,
 src.StartDate
)
;