
-- =============================================
-- Author:		Mark Stacey
-- Create date: 2018-01-02
-- Description:	Gets an initialisation load set
-- =============================================
CREATE PROCEDURE [API].[sp_Init]
	
	@UserID int
AS
BEGIN
	SET NOCOUNT ON;

	/*
	SELECT 'SELECT Tbl.* FROM [' + table_schema + '].[' + table_name + '] Tbl
	INNER JOIN [Security].[User] U ON Tbl.PersonID = U.PersonID
	WHERE U.UserID = @UserID
	UNION ALL SELECT Tbl.* FROM [' + table_schema + '].[' + table_name + '] Tbl WHERE PersonID IS NULL
	' 
	FROM INFORMATION_SCHEMA.TABLES where TABLE_SCHEMA not like '%settings%'
	and TABLE_SCHEMA not like '%core%'
	and TABLE_SCHEMA not like '%UserSettings%'
	and TABLE_SCHEMA not like '%Security%'
	ORDER BY TABLE_SCHEMA, TABLE_Name
	*/

	SELECT Tbl.* FROM [Exercise].[Exercise] Tbl   INNER JOIN [Security].[User] U ON Tbl.PersonID = U.PersonID   WHERE U.UserID = @UserID   UNION ALL SELECT Tbl.* FROM [Exercise].[Exercise] Tbl WHERE PersonID IS NULL   
SELECT Tbl.* FROM [Exercise].[Exercise_Sport] Tbl   INNER JOIN [Security].[User] U ON Tbl.PersonID = U.PersonID   WHERE U.UserID = @UserID   UNION ALL SELECT Tbl.* FROM [Exercise].[Exercise_Sport] Tbl WHERE PersonID IS NULL   
SELECT Tbl.* FROM [Exercise].[ExerciseLink] Tbl   INNER JOIN [Security].[User] U ON Tbl.PersonID = U.PersonID   WHERE U.UserID = @UserID   UNION ALL SELECT Tbl.* FROM [Exercise].[ExerciseLink] Tbl WHERE PersonID IS NULL   
SELECT Tbl.* FROM [Exercise].[ExerciseType] Tbl   INNER JOIN [Security].[User] U ON Tbl.PersonID = U.PersonID   WHERE U.UserID = @UserID   UNION ALL SELECT Tbl.* FROM [Exercise].[ExerciseType] Tbl WHERE PersonID IS NULL   
SELECT Tbl.* FROM [Exercise].[Sport] Tbl   INNER JOIN [Security].[User] U ON Tbl.PersonID = U.PersonID   WHERE U.UserID = @UserID   UNION ALL SELECT Tbl.* FROM [Exercise].[Sport] Tbl WHERE PersonID IS NULL   
SELECT Tbl.* FROM [Program].[Plan] Tbl   INNER JOIN [Security].[User] U ON Tbl.PersonID = U.PersonID   WHERE U.UserID = @UserID   UNION ALL SELECT Tbl.* FROM [Program].[Plan] Tbl WHERE PersonID IS NULL   
SELECT Tbl.* FROM [Program].[Workout] Tbl   INNER JOIN [Security].[User] U ON Tbl.PersonID = U.PersonID   WHERE U.UserID = @UserID   UNION ALL SELECT Tbl.* FROM [Program].[Workout] Tbl WHERE PersonID IS NULL   
SELECT Tbl.* FROM [Program].[Workout_Exercise] Tbl   INNER JOIN [Security].[User] U ON Tbl.PersonID = U.PersonID   WHERE U.UserID = @UserID   UNION ALL SELECT Tbl.* FROM [Program].[Workout_Exercise] Tbl WHERE PersonID IS NULL   
SELECT Tbl.* FROM [Program].[WorkoutStage] Tbl   INNER JOIN [Security].[User] U ON Tbl.PersonID = U.PersonID   WHERE U.UserID = @UserID   UNION ALL SELECT Tbl.* FROM [Program].[WorkoutStage] Tbl WHERE PersonID IS NULL   
SELECT Tbl.* FROM [Stats].[Metric] Tbl   INNER JOIN [Security].[User] U ON Tbl.PersonID = U.PersonID   WHERE U.UserID = @UserID   UNION ALL SELECT Tbl.* FROM [Stats].[Metric] Tbl WHERE PersonID IS NULL   
SELECT Tbl.* FROM [Stats].[Person] Tbl   INNER JOIN [Security].[User] U ON Tbl.PersonID = U.PersonID   WHERE U.UserID = @UserID   UNION ALL SELECT Tbl.* FROM [Stats].[Person] Tbl WHERE PersonID IS NULL   
SELECT Tbl.* FROM [Stats].[SkinfoldMeasurement] Tbl   INNER JOIN [Security].[User] U ON Tbl.PersonID = U.PersonID   WHERE U.UserID = @UserID   UNION ALL SELECT Tbl.* FROM [Stats].[SkinfoldMeasurement] Tbl WHERE PersonID IS NULL   
SELECT Tbl.* FROM [Stats].[TapeMeasurement] Tbl   INNER JOIN [Security].[User] U ON Tbl.PersonID = U.PersonID   WHERE U.UserID = @UserID   UNION ALL SELECT Tbl.* FROM [Stats].[TapeMeasurement] Tbl WHERE PersonID IS NULL   
SELECT Tbl.* FROM [Stats].[WeightMeasurement] Tbl   INNER JOIN [Security].[User] U ON Tbl.PersonID = U.PersonID   WHERE U.UserID = @UserID   UNION ALL SELECT Tbl.* FROM [Stats].[WeightMeasurement] Tbl WHERE PersonID IS NULL   
END