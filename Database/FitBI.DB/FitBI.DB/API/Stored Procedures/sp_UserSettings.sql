
-- =============================================
-- Author:		Mark Stacey
-- Create date: 2018-01-02
-- Description:	Gets an initialisation load set
-- =============================================
CREATE   PROCEDURE [API].[sp_UserSettings]
	
	@UserID int,
	@Version rowversion = 0x0000000000000000
AS
BEGIN
	SET NOCOUNT ON;

	
	/*
	/*Goes in the proc right here*/
	SELECT 'SELECT ' + Utility.fnColumnList(table_schema, table_name, 'Tbl') + ' FROM [' + table_schema + '].[' + table_name + '] Tbl
	INNER JOIN [Security].[User] U ON Tbl.UserID = U.UserID
	WHERE Tbl.[Version] > @Version
	AND U.UserID = @UserID
	' 
	FROM INFORMATION_SCHEMA.TABLES where TABLE_SCHEMA like '%UserSettings%'
	ORDER BY TABLE_SCHEMA, TABLE_Name

	/*Pasted into VS for the API*/
	SELECT 'objInit.' + table_name + ' = multi.Read<dynamic>().ToList();
	' 
	FROM INFORMATION_SCHEMA.TABLES where TABLE_SCHEMA like '%UserSettings%'
	ORDER BY TABLE_SCHEMA, TABLE_Name
	*/


	SELECT 	[Tbl].[Active]
	,[Tbl].[Code]
	,[Tbl].[ColumnChoiceID]
	,[Tbl].[ColumnList]
	,[Tbl].[CreatedAt]
	,[Tbl].[Deleted]
	,[Tbl].[ID]
	,[Tbl].[Name]
	,[Tbl].[PageID]
	,CONVERT(varchar(255), [Tbl].[UpdatedAt], 127) + 'Z' AS [UpdatedAt]
	,[Tbl].[UserID]
	,[Tbl].[Version]
 FROM [UserSettings].[ColumnChoice] Tbl
	INNER JOIN [Security].[User] U ON Tbl.UserID = U.UserID
	WHERE Tbl.[Version] > @Version
	AND U.UserID = @UserID
	
SELECT 	[Tbl].[Active]
	,[Tbl].[Code]
	,[Tbl].[CreatedAt]
	,[Tbl].[Deleted]
	,[Tbl].[FavoriteID]
	,[Tbl].[ID]
	,[Tbl].[isFavorite]
	,[Tbl].[MetricSetID]
	,[Tbl].[Name]
	,CONVERT(varchar(255), [Tbl].[UpdatedAt], 127) + 'Z' AS [UpdatedAt]
	,[Tbl].[UserID]
	,[Tbl].[Version]
 FROM [UserSettings].[Favorite] Tbl
	INNER JOIN [Security].[User] U ON Tbl.UserID = U.UserID
	WHERE Tbl.[Version] > @Version
	AND U.UserID = @UserID
	
SELECT 	[Tbl].[Active]
	,[Tbl].[BooleanValue]
	,[Tbl].[Code]
	,[Tbl].[CreatedAt]
	,[Tbl].[DecimalValue]
	,[Tbl].[Deleted]
	,[Tbl].[FloatingValue]
	,[Tbl].[GeneralSettingsID]
	,[Tbl].[ID]
	,[Tbl].[IntegerValue]
	,[Tbl].[Name]
	,[Tbl].[UnitTypeID]
	,CONVERT(varchar(255), [Tbl].[UpdatedAt], 127) + 'Z' AS [UpdatedAt]
	,[Tbl].[UserID]
	,[Tbl].[Version]
 FROM [UserSettings].[GeneralSettings] Tbl
	INNER JOIN [Security].[User] U ON Tbl.UserID = U.UserID
	WHERE Tbl.[Version] > @Version
	AND U.UserID = @UserID
	
SELECT 	[Tbl].[Active]
	,[Tbl].[CreatedAt]
	,[Tbl].[Deleted]
	,[Tbl].[ID]
	,[Tbl].[StatsChoiceID]
	,[Tbl].[StatTypeID]
	,CONVERT(varchar(255), [Tbl].[UpdatedAt], 127) + 'Z' AS [UpdatedAt]
	,[Tbl].[UserID]
	,[Tbl].[Version]
 FROM [UserSettings].[StatsChoice] Tbl
	INNER JOIN [Security].[User] U ON Tbl.UserID = U.UserID
	WHERE Tbl.[Version] > @Version
	AND U.UserID = @UserID



END