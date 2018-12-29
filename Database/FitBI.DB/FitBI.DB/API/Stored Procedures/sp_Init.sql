
-- =============================================
-- Author:		Mark Stacey
-- Create date: 2018-01-02
-- Description:	Gets an initialisation load set
-- =============================================
CREATE PROCEDURE [API].[sp_Init]
	
	@UserID int  = 3,
	@Version rowversion = 0x0000000000000000
AS
BEGIN
	SET NOCOUNT ON;

	/*
	SELECT 'SELECT ' + Utility.fnColumnList(TABLE_SCHEMA, TABLE_NAME, 'Tbl') + ' FROM [' + TABLE_SCHEMA + '].[' + TABLE_NAME + '] Tbl
	INNER JOIN [Security].[User] U ON Tbl.PersonID = U.PersonID
	WHERE Tbl.[Version] > @Version
	AND U.UserID = @UserID
	UNION ALL SELECT ' + Utility.fnColumnList(TABLE_SCHEMA, TABLE_NAME, 'Tbl') + ' FROM [' + TABLE_SCHEMA + '].[' + TABLE_NAME + '] Tbl WHERE 
	Tbl.[Version] > @Version
	AND PersonID IS NULL
	' 
	FROM INFORMATION_SCHEMA.TABLES where TABLE_SCHEMA not like '%settings%'
	and TABLE_SCHEMA not like '%core%'
	and TABLE_SCHEMA not like '%UserSettings%'
	and TABLE_SCHEMA not like '%Security%'
	ORDER BY TABLE_SCHEMA, TABLE_NAME

	SELECT 'objInit.' + TABLE_NAME + ' = multi.Read<dynamic>().ToList();
	' 
	FROM INFORMATION_SCHEMA.TABLES where TABLE_SCHEMA not like '%settings%'
	and TABLE_SCHEMA not like '%core%'
	and TABLE_SCHEMA not like '%UserSettings%'
	and TABLE_SCHEMA not like '%Security%'
	ORDER BY TABLE_SCHEMA, TABLE_NAME
	*/

	SELECT @@DBTS as Version, CONVERT(varchar(255), DATEADD(SECOND, intValue, getutcdate()), 127) + 'Z' AS CacheExpiry
	FROM Settings.GlobalSettings 
	WHERE Code = 'INITEXP'


	
	
SELECT 	[Tbl].[Active]
	,[Tbl].[Code]
	,[Tbl].[CreatedAt]
	,[Tbl].[Deleted]
	,[Tbl].[Description]
	,[Tbl].[ExerciseID]
	,[Tbl].[ExerciseTypeID]
	,[Tbl].[ID]
	,[Tbl].[Name]
	,[Tbl].[ParentExerciseID]
	,[Tbl].[PersonID]
	,[Tbl].[UpdatedAt]
	,[Tbl].[Version]
 FROM [Exercise].[Exercise] Tbl
	INNER JOIN [Security].[User] U ON Tbl.PersonID = U.PersonID
	WHERE Tbl.[Version] > @Version
	AND U.UserID = @UserID
	UNION ALL SELECT 	[Tbl].[Active]
	,[Tbl].[Code]
	,[Tbl].[CreatedAt]
	,[Tbl].[Deleted]
	,[Tbl].[Description]
	,[Tbl].[ExerciseID]
	,[Tbl].[ExerciseTypeID]
	,[Tbl].[ID]
	,[Tbl].[Name]
	,[Tbl].[ParentExerciseID]
	,[Tbl].[PersonID]
	,[Tbl].[UpdatedAt]
	,[Tbl].[Version]
 FROM [Exercise].[Exercise] Tbl WHERE 
	Tbl.[Version] > @Version
	AND PersonID IS NULL
	
SELECT 	[Tbl].[Active]
	,[Tbl].[CreatedAt]
	,[Tbl].[Deleted]
	,[Tbl].[Exercise_SportID]
	,[Tbl].[ExerciseID]
	,[Tbl].[GoalNarrative]
	,[Tbl].[ID]
	,[Tbl].[PersonID]
	,[Tbl].[SportID]
	,[Tbl].[UpdatedAt]
	,[Tbl].[Version]
 FROM [Exercise].[Exercise_Sport] Tbl
	INNER JOIN [Security].[User] U ON Tbl.PersonID = U.PersonID
	WHERE Tbl.[Version] > @Version
	AND U.UserID = @UserID
	UNION ALL SELECT 	[Tbl].[Active]
	,[Tbl].[CreatedAt]
	,[Tbl].[Deleted]
	,[Tbl].[Exercise_SportID]
	,[Tbl].[ExerciseID]
	,[Tbl].[GoalNarrative]
	,[Tbl].[ID]
	,[Tbl].[PersonID]
	,[Tbl].[SportID]
	,[Tbl].[UpdatedAt]
	,[Tbl].[Version]
 FROM [Exercise].[Exercise_Sport] Tbl WHERE 
	Tbl.[Version] > @Version
	AND PersonID IS NULL
	
SELECT 	[Tbl].[Active]
	,[Tbl].[Code]
	,[Tbl].[CreatedAt]
	,[Tbl].[Deleted]
	,[Tbl].[ExerciseID]
	,[Tbl].[ExerciseLinkID]
	,[Tbl].[ID]
	,[Tbl].[Name]
	,[Tbl].[PersonID]
	,[Tbl].[UpdatedAt]
	,[Tbl].[URL]
	,[Tbl].[Version]
 FROM [Exercise].[ExerciseLink] Tbl
	INNER JOIN [Security].[User] U ON Tbl.PersonID = U.PersonID
	WHERE Tbl.[Version] > @Version
	AND U.UserID = @UserID
	UNION ALL SELECT 	[Tbl].[Active]
	,[Tbl].[Code]
	,[Tbl].[CreatedAt]
	,[Tbl].[Deleted]
	,[Tbl].[ExerciseID]
	,[Tbl].[ExerciseLinkID]
	,[Tbl].[ID]
	,[Tbl].[Name]
	,[Tbl].[PersonID]
	,[Tbl].[UpdatedAt]
	,[Tbl].[URL]
	,[Tbl].[Version]
 FROM [Exercise].[ExerciseLink] Tbl WHERE 
	Tbl.[Version] > @Version
	AND PersonID IS NULL
	
SELECT 	[Tbl].[Active]
	,[Tbl].[Code]
	,[Tbl].[CreatedAt]
	,[Tbl].[Deleted]
	,[Tbl].[ExerciseTypeID]
	,[Tbl].[ID]
	,[Tbl].[Name]
	,[Tbl].[ParentExerciseTypeID]
	,[Tbl].[PersonID]
	,[Tbl].[UpdatedAt]
	,[Tbl].[Version]
 FROM [Exercise].[ExerciseType] Tbl
	INNER JOIN [Security].[User] U ON Tbl.PersonID = U.PersonID
	WHERE Tbl.[Version] > @Version
	AND U.UserID = @UserID
	UNION ALL SELECT 	[Tbl].[Active]
	,[Tbl].[Code]
	,[Tbl].[CreatedAt]
	,[Tbl].[Deleted]
	,[Tbl].[ExerciseTypeID]
	,[Tbl].[ID]
	,[Tbl].[Name]
	,[Tbl].[ParentExerciseTypeID]
	,[Tbl].[PersonID]
	,[Tbl].[UpdatedAt]
	,[Tbl].[Version]
 FROM [Exercise].[ExerciseType] Tbl WHERE 
	Tbl.[Version] > @Version
	AND PersonID IS NULL
	
SELECT 	[Tbl].[Active]
	,[Tbl].[Code]
	,[Tbl].[CreatedAt]
	,[Tbl].[Deleted]
	,[Tbl].[Description]
	,[Tbl].[ID]
	,[Tbl].[Name]
	,[Tbl].[ParentSportID]
	,[Tbl].[PersonID]
	,[Tbl].[SportID]
	,[Tbl].[UpdatedAt]
	,[Tbl].[Version]
 FROM [Exercise].[Sport] Tbl
	INNER JOIN [Security].[User] U ON Tbl.PersonID = U.PersonID
	WHERE Tbl.[Version] > @Version
	AND U.UserID = @UserID
	UNION ALL SELECT 	[Tbl].[Active]
	,[Tbl].[Code]
	,[Tbl].[CreatedAt]
	,[Tbl].[Deleted]
	,[Tbl].[Description]
	,[Tbl].[ID]
	,[Tbl].[Name]
	,[Tbl].[ParentSportID]
	,[Tbl].[PersonID]
	,[Tbl].[SportID]
	,[Tbl].[UpdatedAt]
	,[Tbl].[Version]
 FROM [Exercise].[Sport] Tbl WHERE 
	Tbl.[Version] > @Version
	AND PersonID IS NULL
	
SELECT 	[Tbl].[Active]
	,[Tbl].[CreatedAt]
	,[Tbl].[Deleted]
	,[Tbl].[GoalNarrative]
	,[Tbl].[ID]
	,[Tbl].[isTemplate]
	,[Tbl].[Name]
	,[Tbl].[PersonID]
	,[Tbl].[PlanID]
	,[Tbl].[PlannerPersonID]
	,CONVERT(varchar(255), [Tbl].[StartDate], 127) + 'Z' AS [StartDate]
	,[Tbl].[UpdatedAt]
	,[Tbl].[Version]
 FROM [Program].[Plan] Tbl
	INNER JOIN [Security].[User] U ON Tbl.PersonID = U.PersonID
	WHERE Tbl.[Version] > @Version
	AND U.UserID = @UserID
	UNION ALL SELECT 	[Tbl].[Active]
	,[Tbl].[CreatedAt]
	,[Tbl].[Deleted]
	,[Tbl].[GoalNarrative]
	,[Tbl].[ID]
	,[Tbl].[isTemplate]
	,[Tbl].[Name]
	,[Tbl].[PersonID]
	,[Tbl].[PlanID]
	,[Tbl].[PlannerPersonID]
	,CONVERT(varchar(255), [Tbl].[StartDate], 127) + 'Z' AS [StartDate]
	,[Tbl].[UpdatedAt]
	,[Tbl].[Version]
 FROM [Program].[Plan] Tbl WHERE 
	Tbl.[Version] > @Version
	AND PersonID IS NULL
	
SELECT 	[Tbl].[Active]
	,[Tbl].[CreatedAt]
	,[Tbl].[Deleted]
	,[Tbl].[GoalNarrative]
	,[Tbl].[ID]
	,[Tbl].[isTemplate]
	,[Tbl].[Name]
	,[Tbl].[PersonID]
	,[Tbl].[PlanID]
	,[Tbl].[UpdatedAt]
	,[Tbl].[Version]
	,[Tbl].[WorkoutID]
 FROM [Program].[Workout] Tbl
	INNER JOIN [Security].[User] U ON Tbl.PersonID = U.PersonID
	WHERE Tbl.[Version] > @Version
	AND U.UserID = @UserID
	UNION ALL SELECT 	[Tbl].[Active]
	,[Tbl].[CreatedAt]
	,[Tbl].[Deleted]
	,[Tbl].[GoalNarrative]
	,[Tbl].[ID]
	,[Tbl].[isTemplate]
	,[Tbl].[Name]
	,[Tbl].[PersonID]
	,[Tbl].[PlanID]
	,[Tbl].[UpdatedAt]
	,[Tbl].[Version]
	,[Tbl].[WorkoutID]
 FROM [Program].[Workout] Tbl WHERE 
	Tbl.[Version] > @Version
	AND PersonID IS NULL
	
SELECT 	[Tbl].[Active]
	,[Tbl].[CreatedAt]
	,[Tbl].[Deleted]
	,[Tbl].[ExerciseID]
	,[Tbl].[GoalNarrative]
	,[Tbl].[ID]
	,[Tbl].[PersonID]
	,[Tbl].[UpdatedAt]
	,[Tbl].[Version]
	,[Tbl].[Workout_ExerciseID]
	,[Tbl].[WorkoutID]
 FROM [Program].[Workout_Exercise] Tbl
	INNER JOIN [Security].[User] U ON Tbl.PersonID = U.PersonID
	WHERE Tbl.[Version] > @Version
	AND U.UserID = @UserID
	UNION ALL SELECT 	[Tbl].[Active]
	,[Tbl].[CreatedAt]
	,[Tbl].[Deleted]
	,[Tbl].[ExerciseID]
	,[Tbl].[GoalNarrative]
	,[Tbl].[ID]
	,[Tbl].[PersonID]
	,[Tbl].[UpdatedAt]
	,[Tbl].[Version]
	,[Tbl].[Workout_ExerciseID]
	,[Tbl].[WorkoutID]
 FROM [Program].[Workout_Exercise] Tbl WHERE 
	Tbl.[Version] > @Version
	AND PersonID IS NULL
	
SELECT 	[Tbl].[Active]
	,[Tbl].[CreatedAt]
	,[Tbl].[Deleted]
	,[Tbl].[GoalNarrative]
	,[Tbl].[ID]
	,[Tbl].[isTemplate]
	,[Tbl].[PersonID]
	,[Tbl].[UpdatedAt]
	,[Tbl].[Version]
	,[Tbl].[WorkoutID]
	,[Tbl].[WorkoutStageID]
 FROM [Program].[WorkoutStage] Tbl
	INNER JOIN [Security].[User] U ON Tbl.PersonID = U.PersonID
	WHERE Tbl.[Version] > @Version
	AND U.UserID = @UserID
	UNION ALL SELECT 	[Tbl].[Active]
	,[Tbl].[CreatedAt]
	,[Tbl].[Deleted]
	,[Tbl].[GoalNarrative]
	,[Tbl].[ID]
	,[Tbl].[isTemplate]
	,[Tbl].[PersonID]
	,[Tbl].[UpdatedAt]
	,[Tbl].[Version]
	,[Tbl].[WorkoutID]
	,[Tbl].[WorkoutStageID]
 FROM [Program].[WorkoutStage] Tbl WHERE 
	Tbl.[Version] > @Version
	AND PersonID IS NULL
	
SELECT 	[Tbl].[Active]
	,[Tbl].[BellyButtonCircumference]
	,[Tbl].[BicepCircumference]
	,[Tbl].[BodyFatPercentage]
	,[Tbl].[BonePercentage]
	,[Tbl].[CalvesCircumference]
	,[Tbl].[ChestCircumference]
	,[Tbl].[CreatedAt]
	,[Tbl].[DailyMeasurementID]
	,[Tbl].[Deleted]
	,[Tbl].[HipCircumference]
	,[Tbl].[ID]
	,CONVERT(varchar(255), [Tbl].[MeasurementDate], 127) + 'Z' AS [MeasurementDate]
	,[Tbl].[MeasurementDateID]
	,[Tbl].[MusclePercentage]
	,[Tbl].[NeckCircumference]
	,[Tbl].[PercentMeasurementTypeID]
	,[Tbl].[PersonID]
	,[Tbl].[QuadCircumference]
	,[Tbl].[UnitID]
	,[Tbl].[UpdatedAt]
	,[Tbl].[Version]
	,[Tbl].[WaistCircumference]
	,[Tbl].[WaterPercentage]
	,[Tbl].[Weight]
 FROM [Stats].[DailyMeasurement] Tbl
	INNER JOIN [Security].[User] U ON Tbl.PersonID = U.PersonID
	WHERE Tbl.[Version] > @Version
	AND U.UserID = @UserID
	UNION ALL SELECT 	[Tbl].[Active]
	,[Tbl].[BellyButtonCircumference]
	,[Tbl].[BicepCircumference]
	,[Tbl].[BodyFatPercentage]
	,[Tbl].[BonePercentage]
	,[Tbl].[CalvesCircumference]
	,[Tbl].[ChestCircumference]
	,[Tbl].[CreatedAt]
	,[Tbl].[DailyMeasurementID]
	,[Tbl].[Deleted]
	,[Tbl].[HipCircumference]
	,[Tbl].[ID]
	,CONVERT(varchar(255), [Tbl].[MeasurementDate], 127) + 'Z' AS [MeasurementDate]
	,[Tbl].[MeasurementDateID]
	,[Tbl].[MusclePercentage]
	,[Tbl].[NeckCircumference]
	,[Tbl].[PercentMeasurementTypeID]
	,[Tbl].[PersonID]
	,[Tbl].[QuadCircumference]
	,[Tbl].[UnitID]
	,[Tbl].[UpdatedAt]
	,[Tbl].[Version]
	,[Tbl].[WaistCircumference]
	,[Tbl].[WaterPercentage]
	,[Tbl].[Weight]
 FROM [Stats].[DailyMeasurement] Tbl WHERE 
	Tbl.[Version] > @Version
	AND PersonID IS NULL
	
SELECT 	[Tbl].[Active]
	,[Tbl].[BodyFatPercentage]
	,[Tbl].[BonePercentage]
	,[Tbl].[CreatedAt]
	,[Tbl].[Deleted]
	,[Tbl].[ID]
	,[Tbl].[MetricID]
	,[Tbl].[MusclePercentage]
	,[Tbl].[PercentMeasurementTypeID]
	,[Tbl].[PersonID]
	,[Tbl].[UpdatedAt]
	,[Tbl].[Version]
	,[Tbl].[WaterPercentage]
	,[Tbl].[Weight]
 FROM [Stats].[Metric] Tbl
	INNER JOIN [Security].[User] U ON Tbl.PersonID = U.PersonID
	WHERE Tbl.[Version] > @Version
	AND U.UserID = @UserID
	UNION ALL SELECT 	[Tbl].[Active]
	,[Tbl].[BodyFatPercentage]
	,[Tbl].[BonePercentage]
	,[Tbl].[CreatedAt]
	,[Tbl].[Deleted]
	,[Tbl].[ID]
	,[Tbl].[MetricID]
	,[Tbl].[MusclePercentage]
	,[Tbl].[PercentMeasurementTypeID]
	,[Tbl].[PersonID]
	,[Tbl].[UpdatedAt]
	,[Tbl].[Version]
	,[Tbl].[WaterPercentage]
	,[Tbl].[Weight]
 FROM [Stats].[Metric] Tbl WHERE 
	Tbl.[Version] > @Version
	AND PersonID IS NULL
	
SELECT 	[Tbl].[Active]
	,[Tbl].[CreatedAt]
	,CONVERT(varchar(255), [Tbl].[DateOfBirth], 127) + 'Z' AS [DateOfBirth]
	,[Tbl].[DateOfBirthID]
	,[Tbl].[Deleted]
	,[Tbl].[FirstName]
	,[Tbl].[Height]
	,[Tbl].[ID]
	,[Tbl].[PersonID]
	,[Tbl].[Surname]
	,[Tbl].[UpdatedAt]
	,[Tbl].[Version]
 FROM [Stats].[Person] Tbl
	INNER JOIN [Security].[User] U ON Tbl.PersonID = U.PersonID
	WHERE Tbl.[Version] > @Version
	AND U.UserID = @UserID
	UNION ALL SELECT 	[Tbl].[Active]
	,[Tbl].[CreatedAt]
	,CONVERT(varchar(255), [Tbl].[DateOfBirth], 127) + 'Z' AS [DateOfBirth]
	,[Tbl].[DateOfBirthID]
	,[Tbl].[Deleted]
	,[Tbl].[FirstName]
	,[Tbl].[Height]
	,[Tbl].[ID]
	,[Tbl].[PersonID]
	,[Tbl].[Surname]
	,[Tbl].[UpdatedAt]
	,[Tbl].[Version]
 FROM [Stats].[Person] Tbl WHERE 
	Tbl.[Version] > @Version
	AND PersonID IS NULL
	
SELECT 	[Tbl].[Active]
	,[Tbl].[BodyPartID]
	,[Tbl].[CreatedAt]
	,[Tbl].[Deleted]
	,[Tbl].[ID]
	,CONVERT(varchar(255), [Tbl].[MeasurementDate], 127) + 'Z' AS [MeasurementDate]
	,[Tbl].[PersonID]
	,[Tbl].[SideMeasurementTypeID]
	,[Tbl].[SkinfoldMeasurementID]
	,[Tbl].[SkinfoldThickness]
	,[Tbl].[UpdatedAt]
	,[Tbl].[Version]
 FROM [Stats].[SkinfoldMeasurement] Tbl
	INNER JOIN [Security].[User] U ON Tbl.PersonID = U.PersonID
	WHERE Tbl.[Version] > @Version
	AND U.UserID = @UserID
	UNION ALL SELECT 	[Tbl].[Active]
	,[Tbl].[BodyPartID]
	,[Tbl].[CreatedAt]
	,[Tbl].[Deleted]
	,[Tbl].[ID]
	,CONVERT(varchar(255), [Tbl].[MeasurementDate], 127) + 'Z' AS [MeasurementDate]
	,[Tbl].[PersonID]
	,[Tbl].[SideMeasurementTypeID]
	,[Tbl].[SkinfoldMeasurementID]
	,[Tbl].[SkinfoldThickness]
	,[Tbl].[UpdatedAt]
	,[Tbl].[Version]
 FROM [Stats].[SkinfoldMeasurement] Tbl WHERE 
	Tbl.[Version] > @Version
	AND PersonID IS NULL
	
SELECT 	[Tbl].[Active]
	,[Tbl].[BodyPartID]
	,[Tbl].[CreatedAt]
	,[Tbl].[Deleted]
	,[Tbl].[ID]
	,CONVERT(varchar(255), [Tbl].[MeasurementDate], 127) + 'Z' AS [MeasurementDate]
	,[Tbl].[MeasurementDateID]
	,[Tbl].[PersonID]
	,[Tbl].[SideMeasurementTypeID]
	,[Tbl].[TapeLength]
	,[Tbl].[TapeMeasurementID]
	,[Tbl].[UpdatedAt]
	,[Tbl].[Version]
 FROM [Stats].[TapeMeasurement] Tbl
	INNER JOIN [Security].[User] U ON Tbl.PersonID = U.PersonID
	WHERE Tbl.[Version] > @Version
	AND U.UserID = @UserID
	UNION ALL SELECT 	[Tbl].[Active]
	,[Tbl].[BodyPartID]
	,[Tbl].[CreatedAt]
	,[Tbl].[Deleted]
	,[Tbl].[ID]
	,CONVERT(varchar(255), [Tbl].[MeasurementDate], 127) + 'Z' AS [MeasurementDate]
	,[Tbl].[MeasurementDateID]
	,[Tbl].[PersonID]
	,[Tbl].[SideMeasurementTypeID]
	,[Tbl].[TapeLength]
	,[Tbl].[TapeMeasurementID]
	,[Tbl].[UpdatedAt]
	,[Tbl].[Version]
 FROM [Stats].[TapeMeasurement] Tbl WHERE 
	Tbl.[Version] > @Version
	AND PersonID IS NULL
	
SELECT 	[Tbl].[Active]
	,[Tbl].[BodyFatPercentage]
	,[Tbl].[BonePercentage]
	,[Tbl].[CreatedAt]
	,[Tbl].[Deleted]
	,[Tbl].[ID]
	,CONVERT(varchar(255), [Tbl].[MeasurementDate], 127) + 'Z' AS [MeasurementDate]
	,[Tbl].[MeasurementDateID]
	,[Tbl].[MusclePercentage]
	,[Tbl].[PercentMeasurementTypeID]
	,[Tbl].[PersonID]
	,[Tbl].[UnitID]
	,[Tbl].[UpdatedAt]
	,[Tbl].[Version]
	,[Tbl].[WaterPercentage]
	,[Tbl].[Weight]
	,[Tbl].[WeightMeasurementID]
 FROM [Stats].[WeightMeasurement] Tbl
	INNER JOIN [Security].[User] U ON Tbl.PersonID = U.PersonID
	WHERE Tbl.[Version] > @Version
	AND U.UserID = @UserID
	UNION ALL SELECT 	[Tbl].[Active]
	,[Tbl].[BodyFatPercentage]
	,[Tbl].[BonePercentage]
	,[Tbl].[CreatedAt]
	,[Tbl].[Deleted]
	,[Tbl].[ID]
	,CONVERT(varchar(255), [Tbl].[MeasurementDate], 127) + 'Z' AS [MeasurementDate]
	,[Tbl].[MeasurementDateID]
	,[Tbl].[MusclePercentage]
	,[Tbl].[PercentMeasurementTypeID]
	,[Tbl].[PersonID]
	,[Tbl].[UnitID]
	,[Tbl].[UpdatedAt]
	,[Tbl].[Version]
	,[Tbl].[WaterPercentage]
	,[Tbl].[Weight]
	,[Tbl].[WeightMeasurementID]
 FROM [Stats].[WeightMeasurement] Tbl WHERE 
	Tbl.[Version] > @Version
	AND PersonID IS NULL
	
	
END