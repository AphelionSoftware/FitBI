

-- =============================================
-- Author:		Mark Stacey
-- Create date: 2018-01-02
-- Description:	Gets an initialisation load set
-- Execution:   EXEC [UserSettings].[sp_Core]  3
-- =============================================
CREATE PROCEDURE [API].[sp_LatestTimestamps] 
	
	@UserID int
AS
BEGIN
	SET NOCOUNT ON;

	/*
SELECT table_schema + '_' + table_name  As TableName, '
UNION ALL
SELECT 
	''' + table_schema + '_' + table_name + ''' TableName ,
	MAX(ISNULL(Tbl.UpdatedAt, Tbl.CreatedAt)) LatestDate  FROM [' + table_schema + '].[' + table_name + '] Tbl
	WHERE Tbl.Active = 1
	' TableQuery
	FROM INFORMATION_SCHEMA.COLUMNS  c1 where TABLE_SCHEMA not like '%settings%'
	AND COLUMN_NAME = 'Active'
	and not exists (SELECT 1 FROM INFORMATION_SCHEMA.COLUMNS c2
		where c1.TABLE_SCHEMA = c2.TABLE_SCHEMA
		and c1.TABLE_NAME = c2.TABLE_NAME
		and c2.COLUMN_NAME = 'PersonID'
	)
	UNION ALL
	SELECT table_schema + '_' + table_name  As TableName, '
	UNION ALL
	SELECT 
	''' + table_schema + '_' + table_name + ''' TableName ,
	MAX(ISNULL(Tbl.UpdatedAt, Tbl.CreatedAt)) LatestDate  FROM [' + table_schema + '].[' + table_name + '] Tbl
	LEFT JOIN [Security].[User] U ON Tbl.PersonID = U.PersonID
	WHERE Tbl.Active = 1
	AND (U.UserID = @UserID OR Tbl.PersonID IS NULL)
	' TableQuery
	FROM INFORMATION_SCHEMA.COLUMNS  c1 where TABLE_SCHEMA not like '%settings%'
	AND COLUMN_NAME = 'Active'
	and  exists (SELECT 1 FROM INFORMATION_SCHEMA.COLUMNS c2
		where c1.TABLE_SCHEMA = c2.TABLE_SCHEMA
		and c1.TABLE_NAME = c2.TABLE_NAME
		and c2.COLUMN_NAME = 'PersonID'
	)
	ORDER BY table_schema + '_' + table_name 

	*/

	IF NOT EXISTS (SELECT 1 FROM [Security].[User] U Where U.UserID = @UserID) 
	THROW  1000, 'UserID does not exist', 1

   SELECT    'Core_BodyPart' TableName ,   MAX(ISNULL(Tbl.UpdatedAt, Tbl.CreatedAt)) LatestDate  FROM [Core].[BodyPart] Tbl   WHERE Tbl.Active = 1   
  UNION ALL  SELECT    'Core_BodyPartType' TableName ,   MAX(ISNULL(Tbl.UpdatedAt, Tbl.CreatedAt)) LatestDate  FROM [Core].[BodyPartType] Tbl   WHERE Tbl.Active = 1   
  UNION ALL  SELECT    'Core_MeasurementType' TableName ,   MAX(ISNULL(Tbl.UpdatedAt, Tbl.CreatedAt)) LatestDate  FROM [Core].[MeasurementType] Tbl   WHERE Tbl.Active = 1   
  UNION ALL  SELECT    'Core_MeasurementTypeCategory' TableName ,   MAX(ISNULL(Tbl.UpdatedAt, Tbl.CreatedAt)) LatestDate  FROM [Core].[MeasurementTypeCategory] Tbl   WHERE Tbl.Active = 1   
  UNION ALL  SELECT    'Core_Unit' TableName ,   MAX(ISNULL(Tbl.UpdatedAt, Tbl.CreatedAt)) LatestDate  FROM [Core].[Unit] Tbl   WHERE Tbl.Active = 1   
  UNION ALL  SELECT    'Core_UnitType' TableName ,   MAX(ISNULL(Tbl.UpdatedAt, Tbl.CreatedAt)) LatestDate  FROM [Core].[UnitType] Tbl   WHERE Tbl.Active = 1   
   UNION ALL   SELECT    'Exercise_Exercise' TableName ,   MAX(ISNULL(Tbl.UpdatedAt, Tbl.CreatedAt)) LatestDate  FROM [Exercise].[Exercise] Tbl   LEFT JOIN [Security].[User] U ON Tbl.PersonID = U.PersonID   WHERE Tbl.Active = 1   AND (U.UserID = @UserID OR Tbl.PersonID IS NULL)   
   UNION ALL   SELECT    'Exercise_ExerciseType' TableName ,   MAX(ISNULL(Tbl.UpdatedAt, Tbl.CreatedAt)) LatestDate  FROM [Exercise].[ExerciseType] Tbl   LEFT JOIN [Security].[User] U ON Tbl.PersonID = U.PersonID   WHERE Tbl.Active = 1   AND (U.UserID = @UserID OR Tbl.PersonID IS NULL)   
   UNION ALL   SELECT    'Program_Plan' TableName ,   MAX(ISNULL(Tbl.UpdatedAt, Tbl.CreatedAt)) LatestDate  FROM [Program].[Plan] Tbl   LEFT JOIN [Security].[User] U ON Tbl.PersonID = U.PersonID   WHERE Tbl.Active = 1   AND (U.UserID = @UserID OR Tbl.PersonID IS NULL)   
   UNION ALL   SELECT    'Program_Workout' TableName ,   MAX(ISNULL(Tbl.UpdatedAt, Tbl.CreatedAt)) LatestDate  FROM [Program].[Workout] Tbl   LEFT JOIN [Security].[User] U ON Tbl.PersonID = U.PersonID   WHERE Tbl.Active = 1   AND (U.UserID = @UserID OR Tbl.PersonID IS NULL)   
   UNION ALL   SELECT    'Program_Workout_Exercise' TableName ,   MAX(ISNULL(Tbl.UpdatedAt, Tbl.CreatedAt)) LatestDate  FROM [Program].[Workout_Exercise] Tbl   LEFT JOIN [Security].[User] U ON Tbl.PersonID = U.PersonID   WHERE Tbl.Active = 1   AND (U.UserID = @UserID OR Tbl.PersonID IS NULL)   
   UNION ALL   SELECT    'Program_WorkoutStage' TableName ,   MAX(ISNULL(Tbl.UpdatedAt, Tbl.CreatedAt)) LatestDate  FROM [Program].[WorkoutStage] Tbl   LEFT JOIN [Security].[User] U ON Tbl.PersonID = U.PersonID   WHERE Tbl.Active = 1   AND (U.UserID = @UserID OR Tbl.PersonID IS NULL)   
   UNION ALL   SELECT    'Security_User' TableName ,   MAX(ISNULL(Tbl.UpdatedAt, Tbl.CreatedAt)) LatestDate  FROM [Security].[User] Tbl   LEFT JOIN [Security].[User] U ON Tbl.PersonID = U.PersonID   WHERE Tbl.Active = 1   AND (U.UserID = @UserID OR Tbl.PersonID IS NULL)   
   UNION ALL   SELECT    'Stats_Metric' TableName ,   MAX(ISNULL(Tbl.UpdatedAt, Tbl.CreatedAt)) LatestDate  FROM [Stats].[Metric] Tbl   LEFT JOIN [Security].[User] U ON Tbl.PersonID = U.PersonID   WHERE Tbl.Active = 1   AND (U.UserID = @UserID OR Tbl.PersonID IS NULL)   
   UNION ALL   SELECT    'Stats_Person' TableName ,   MAX(ISNULL(Tbl.UpdatedAt, Tbl.CreatedAt)) LatestDate  FROM [Stats].[Person] Tbl   LEFT JOIN [Security].[User] U ON Tbl.PersonID = U.PersonID   WHERE Tbl.Active = 1   AND (U.UserID = @UserID OR Tbl.PersonID IS NULL)   
   UNION ALL   SELECT    'Stats_SkinfoldMeasurement' TableName ,   MAX(ISNULL(Tbl.UpdatedAt, Tbl.CreatedAt)) LatestDate  FROM [Stats].[SkinfoldMeasurement] Tbl   LEFT JOIN [Security].[User] U ON Tbl.PersonID = U.PersonID   WHERE Tbl.Active = 1   AND (U.UserID = @UserID OR Tbl.PersonID IS NULL)   
   UNION ALL   SELECT    'Stats_TapeMeasurement' TableName ,   MAX(ISNULL(Tbl.UpdatedAt, Tbl.CreatedAt)) LatestDate  FROM [Stats].[TapeMeasurement] Tbl   LEFT JOIN [Security].[User] U ON Tbl.PersonID = U.PersonID   WHERE Tbl.Active = 1   AND (U.UserID = @UserID OR Tbl.PersonID IS NULL)   
   UNION ALL   SELECT    'Stats_WeightMeasurement' TableName ,   MAX(ISNULL(Tbl.UpdatedAt, Tbl.CreatedAt)) LatestDate  FROM [Stats].[WeightMeasurement] Tbl   LEFT JOIN [Security].[User] U ON Tbl.PersonID = U.PersonID   WHERE Tbl.Active = 1   AND (U.UserID = @UserID OR Tbl.PersonID IS NULL)   END