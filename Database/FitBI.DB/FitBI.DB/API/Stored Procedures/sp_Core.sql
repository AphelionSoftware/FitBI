
-- =============================================
-- Author:		Mark Stacey
-- Create date: 2018-01-02
-- Description:	Gets an initialisation load set
-- =============================================
CREATE PROCEDURE [API].[sp_Core]
	
	@UserID int
AS
BEGIN
	SET NOCOUNT ON;

	/*
	SELECT 'SELECT * FROM [' + table_schema + '].[' + table_name + '] Tbl
	WHERE Active = 1
	' 
	FROM INFORMATION_SCHEMA.TABLES where TABLE_SCHEMA not like '%settings%'
	and TABLE_SCHEMA  like '%core%'
	ORDER BY TABLE_SCHEMA, TABLE_Name
	*/

	
	SELECT * FROM [Core].[BodyPart] Tbl   WHERE Active = 1   
	SELECT * FROM [Core].[BodyPartType] Tbl   WHERE Active = 1   
	SELECT * FROM [Core].[MeasurementType] Tbl   WHERE Active = 1   
	SELECT * FROM [Core].[MeasurementTypeCategory] Tbl   WHERE Active = 1   
	SELECT * FROM [Core].[Unit] Tbl   WHERE Active = 1   
	SELECT * FROM [Core].[UnitType] Tbl   WHERE Active = 1   
    
END