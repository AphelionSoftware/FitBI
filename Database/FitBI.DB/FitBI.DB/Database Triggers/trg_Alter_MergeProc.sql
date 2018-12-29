


CREATE TRIGGER [trg_Alter_MergeProc] ON DATABASE
	FOR ALTER_TABLE
AS 
BEGIN
DECLARE @TABLE_NAME varchar(255), @TABLE_SCHEMA varchar(255)
    SELECT 
        @TABLE_NAME = EVENTDATA().value('(/EVENT_INSTANCE/ObjectName)[1]','SYSNAME')
    SELECT         @TABLE_SCHEMA = EVENTDATA().value('(/EVENT_INSTANCE/SchemaName)[1]','SYSNAME')
IF NOT @TABLE_NAME LIKE 'TMP_%' 
BEGIN

	IF EXISTS (SELECT 1 FROM sys.procedures where SCHEMA_NAME(schema_id) = 'API' and name = 'merge_' + @TABLE_SCHEMA + '_' + @TABLE_NAME)
	BEGIN
		declare @exec varchar(255) ='DROP PROC API.merge_' + @TABLE_SCHEMA + '_' + @TABLE_NAME
		EXEC (@Exec)
		SET @EXEC  = 'DROP TYPE [' + @TABLE_SCHEMA + '].[tvp_' + @TABLE_NAME + ']'
		EXEC (@Exec)
	END
		--print @exec
exec [Utility].[Create_TVP_ByTable]  @TABLE_SCHEMA, @TABLE_NAME
exec [Utility].[CreateMerge_ByTable]  @TABLE_SCHEMA, @TABLE_NAME

END


END
GO
DISABLE TRIGGER [trg_Alter_MergeProc]
    ON DATABASE;

