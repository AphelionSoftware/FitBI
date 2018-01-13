CREATE PROC [Utility].[CreateTVP_ByTable_All]
AS
DECLARE @Schema varchar(255) ,@Table varchar(255) , @Exec varchar(255) 
DECLARE curExec CURSOR FAST_FORWARD
FOR SELECT TABLE_SCHEMA, TABLE_NAME from INFORMATION_SCHEMA.TABLES
WHERE TABLE_SCHEMA NOT IN (
'Core', 'Security'
)

OPEN curExec
FETCH NEXT FROM curExec INTO @Schema , @Table

WHILE @@FETCH_STATUS = 0  
BEGIN  
PRINT '// ' + @Schema
SET @Exec ='[Utility].[Create_TVP_ByTable]  ''' + @Schema + ''', ''' + @Table  +''''
exec ( @Exec) 
SET @Exec ='[Utility].[CreateMerge_ByTable]  ''' + @Schema + ''', ''' + @Table  +''''
exec ( @Exec) 

FETCH NEXT FROM curExec INTO @Schema , @Table
END