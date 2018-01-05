-- =============================================
-- Author:		Mark Stacey
-- Create date: 2018-01-02
-- Description:	Gets an initialisation load set
-- =============================================
CREATE PROCEDURE [UserSettings].[sp_Init]
	
	@UserID int
AS
BEGIN
	SET NOCOUNT ON;

	/*
	SELECT 'SELECT * FROM [' + table_schema + '].[' + table_name + '] Tbl
	INNER JOIN [Security].[User] U ON Tbl.PersonID = U.PersonID
	WHERE U.UserID = @UserID
	' 
	FROM INFORMATION_SCHEMA.TABLES where TABLE_SCHEMA not like '%settings%'
	and TABLE_SCHEMA not like '%core%'
	ORDER BY TABLE_SCHEMA, TABLE_Name
	*/

	SELECT * FROM [Exercise].[Exercise] Tbl   INNER JOIN [Security].[User] U ON Tbl.PersonID = U.PersonID   WHERE U.UserID = @UserID   
	SELECT * FROM [Exercise].[ExerciseType] Tbl   INNER JOIN [Security].[User] U ON Tbl.PersonID = U.PersonID   WHERE U.UserID = @UserID   
	SELECT * FROM [Program].[Plan] Tbl   INNER JOIN [Security].[User] U ON Tbl.PersonID = U.PersonID   WHERE U.UserID = @UserID   
	SELECT * FROM [Program].[Workout] Tbl   INNER JOIN [Security].[User] U ON Tbl.PersonID = U.PersonID   WHERE U.UserID = @UserID   
	SELECT * FROM [Program].[Workout_Exercise] Tbl   INNER JOIN [Security].[User] U ON Tbl.PersonID = U.PersonID   WHERE U.UserID = @UserID   
	SELECT * FROM [Program].[WorkoutStage] Tbl   INNER JOIN [Security].[User] U ON Tbl.PersonID = U.PersonID   WHERE U.UserID = @UserID   
	SELECT * FROM [Security].[User] Tbl   INNER JOIN [Security].[User] U ON Tbl.PersonID = U.PersonID   WHERE U.UserID = @UserID   
	SELECT * FROM [Stats].[Metric] Tbl   INNER JOIN [Security].[User] U ON Tbl.PersonID = U.PersonID   WHERE U.UserID = @UserID   
	SELECT * FROM [Stats].[Person] Tbl   INNER JOIN [Security].[User] U ON Tbl.PersonID = U.PersonID   WHERE U.UserID = @UserID   
	SELECT * FROM [Stats].[SkinfoldMeasurement] Tbl   INNER JOIN [Security].[User] U ON Tbl.PersonID = U.PersonID   WHERE U.UserID = @UserID   
	SELECT * FROM [Stats].[TapeMeasurement] Tbl   INNER JOIN [Security].[User] U ON Tbl.PersonID = U.PersonID   WHERE U.UserID = @UserID   
	SELECT * FROM [Stats].[WeightMeasurement] Tbl   INNER JOIN [Security].[User] U ON Tbl.PersonID = U.PersonID   WHERE U.UserID = @UserID   
    
END