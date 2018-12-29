
-- =============================================
-- Author:		Mark Stacey
-- Create date: 2018-01-02
-- Description:	Gets an initialisation load set
-- =============================================
CREATE PROCEDURE [API].[sp_Core]
	
	@UserID int  = 3,
	@Version rowversion = 0x0000000000000000
AS
BEGIN
	SET NOCOUNT ON;

	/*
	SELECT 'SELECT ' + Utility.fnColumnList(TABLE_SCHEMA, TABLE_NAME, 'Tbl') + ' FROM [' + TABLE_SCHEMA + '].[' + TABLE_NAME + '] Tbl
	WHERE Tbl.[Version] > @Version
	AND Active = 1
	' 
	FROM INFORMATION_SCHEMA.TABLES where 
	TABLE_SCHEMA not like '%settings%'
	and TABLE_SCHEMA  like '%core%'
	and TABLE_NAME not in ('Active','Dates', 'Time')
	ORDER BY TABLE_SCHEMA, TABLE_NAME


	SELECT 'objCore.' + TABLE_NAME + ' = multi.Read<dynamic>().ToList();
	' 
	
	FROM INFORMATION_SCHEMA.TABLES where 
	TABLE_SCHEMA not like '%settings%'
	and TABLE_SCHEMA  like '%core%'
	and TABLE_NAME not in ('Active','Dates', 'Time')
	ORDER BY TABLE_SCHEMA, TABLE_NAME
	*/
	SELECT @@DBTS as Version, CONVERT(varchar(255), DATEADD(SECOND, intValue, getutcdate()), 127) + 'Z' AS CacheExpiry
	FROM Settings.GlobalSettings 
	WHERE Code = 'COREEXP'

	
SELECT 	[Tbl].[Active]
	,[Tbl].[BodyPartID]
	,[Tbl].[BodyPartTypeID]
	,[Tbl].[Code]
	,[Tbl].[CreatedAt]
	,[Tbl].[Deleted]
	,[Tbl].[Description]
	,[Tbl].[ID]
	,[Tbl].[Name]
	,[Tbl].[ParentBodyPartID]
	,[Tbl].[UpdatedAt]
	,[Tbl].[Version]
 FROM [Core].[BodyPart] Tbl
	WHERE Tbl.[Version] > @Version
	AND Active = 1
	
SELECT 	[Tbl].[Active]
	,[Tbl].[BodyPartTypeID]
	,[Tbl].[Code]
	,[Tbl].[CreatedAt]
	,[Tbl].[Deleted]
	,[Tbl].[ID]
	,[Tbl].[Name]
	,[Tbl].[UpdatedAt]
	,[Tbl].[Version]
 FROM [Core].[BodyPartType] Tbl
	WHERE Tbl.[Version] > @Version
	AND Active = 1
	
SELECT 	[Tbl].[Active]
	,[Tbl].[Code]
	,[Tbl].[CreatedAt]
	,[Tbl].[Deleted]
	,[Tbl].[Description]
	,[Tbl].[ID]
	,[Tbl].[MeasurementTypeCategoryID]
	,[Tbl].[MeasurementTypeID]
	,[Tbl].[Name]
	,[Tbl].[UpdatedAt]
	,[Tbl].[Version]
 FROM [Core].[MeasurementType] Tbl
	WHERE Tbl.[Version] > @Version
	AND Active = 1
	
SELECT 	[Tbl].[Active]
	,[Tbl].[Code]
	,[Tbl].[CreatedAt]
	,[Tbl].[Deleted]
	,[Tbl].[ID]
	,[Tbl].[MeasurementTypeCategoryID]
	,[Tbl].[Name]
	,[Tbl].[UpdatedAt]
	,[Tbl].[Version]
 FROM [Core].[MeasurementTypeCategory] Tbl
	WHERE Tbl.[Version] > @Version
	AND Active = 1
	
SELECT 	[Tbl].[Active]
	,[Tbl].[Code]
	,[Tbl].[ColumnName]
	,[Tbl].[CreatedAt]
	,[Tbl].[Deleted]
	,[Tbl].[Description]
	,[Tbl].[ID]
	,[Tbl].[MeasurementTypeCategoryID]
	,[Tbl].[Name]
	,[Tbl].[StatTypeID]
	,[Tbl].[TableName]
	,[Tbl].[UpdatedAt]
	,[Tbl].[Version]
 FROM [Core].[StatType] Tbl
	WHERE Tbl.[Version] > @Version
	AND Active = 1
	
SELECT 	[Tbl].[Active]
	,[Tbl].[Code]
	,[Tbl].[CreatedAt]
	,[Tbl].[Deleted]
	,[Tbl].[Description]
	,[Tbl].[ID]
	,[Tbl].[Name]
	,[Tbl].[ParentUnitID]
	,[Tbl].[UnitID]
	,[Tbl].[UnitTypeID]
	,[Tbl].[UpdatedAt]
	,[Tbl].[Version]
 FROM [Core].[Unit] Tbl
	WHERE Tbl.[Version] > @Version
	AND Active = 1
	
SELECT 	[Tbl].[Active]
	,[Tbl].[Code]
	,[Tbl].[CreatedAt]
	,[Tbl].[Deleted]
	,[Tbl].[ID]
	,[Tbl].[Name]
	,[Tbl].[UnitTypeID]
	,[Tbl].[UpdatedAt]
	,[Tbl].[Version]
 FROM [Core].[UnitType] Tbl
	WHERE Tbl.[Version] > @Version
	AND Active = 1
	
   
END