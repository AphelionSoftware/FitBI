﻿
-- =============================================
-- Author:		Mark Stacey
-- Create date: 2018-01-02
-- Description:	Gets an initialisation load set
-- =============================================
CREATE   PROCEDURE [API].[sp_UserSettings]
	
	@UserID int
AS
BEGIN
	SET NOCOUNT ON;

	/*
	SELECT 'SELECT Tbl.* FROM [' + table_schema + '].[' + table_name + '] Tbl	
	WHERE Tbl.UserID = @UserID
	UNION ALL SELECT Tbl.* FROM [' + table_schema + '].[' + table_name + '] Tbl
	' 
	FROM INFORMATION_SCHEMA.TABLES where 
	TABLE_SCHEMA like '%UserSettings%'
	ORDER BY TABLE_SCHEMA, TABLE_Name
	*/

SELECT Tbl.* FROM [UserSettings].[ColumnChoice] Tbl    WHERE Tbl.UserID = @UserID   UNION ALL SELECT Tbl.* FROM [UserSettings].[ColumnChoice] Tbl   
SELECT Tbl.* FROM [UserSettings].[GeneralSettings] Tbl    WHERE Tbl.UserID = @UserID   UNION ALL SELECT Tbl.* FROM [UserSettings].[GeneralSettings] Tbl   
SELECT Tbl.* FROM [UserSettings].[StatsChoice] Tbl    WHERE Tbl.UserID = @UserID   UNION ALL SELECT Tbl.* FROM [UserSettings].[StatsChoice] Tbl   
END