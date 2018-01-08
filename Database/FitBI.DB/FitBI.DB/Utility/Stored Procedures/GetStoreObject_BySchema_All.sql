CREATE PROC [Utility].[GetStoreObject_BySchema_All]
AS
DECLARE @Schema varchar(255) , @Exec varchar(255) 
DECLARE curExec CURSOR FAST_FORWARD
FOR SELECT SCHEMA_NAME from INFORMATION_SCHEMA.SCHEMATA
WHERE Schema_NAME IN (
'Stats'
,'Core',
'Exercise'
,'Program')

OPEN curExec
FETCH NEXT FROM curExec INTO @Schema 

WHILE @@FETCH_STATUS = 0  
BEGIN  
PRINT '// ' + @Schema
SET @Exec ='EXEC [Utility].[GetStoreObject_BySchema]  ''' + @Schema + ''''
exec ( @Exec) 
FETCH NEXT FROM curExec INTO @Schema 
END