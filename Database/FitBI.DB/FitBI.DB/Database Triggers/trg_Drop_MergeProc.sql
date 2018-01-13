
CREATE TRIGGER trg_Drop_MergeProc ON DATABASE 
	FOR DROP_TABLE
AS 
DECLARE @Table_Name varchar(255), @Table_Schema varchar(255)
    SELECT 
        @TABLE_NAME = EVENTDATA().value('(/EVENT_INSTANCE/ObjectName)[1]','SYSNAME')
    SELECT         @TABLE_SCHEMA = EVENTDATA().value('(/EVENT_INSTANCE/SchemaName)[1]','SYSNAME')
	--IF EXISTS (SELECT 1 FROM sys.procedures where SCHEMA_NAME(schema_id) = @Table_Schema and name = 'API.merge_' + @Table_schema + '_' + @Table_Name)
	BEGIN
		declare @exec varchar(255) ='DROP PROC API.merge_' + @Table_schema + '_' + @Table_Name
		EXEC (@Exec)
		SET @EXEC  = 'DROP TYPE [' + @Table_schema + '].[tvp_' + @Table_Name + ']'
		EXEC (@Exec)
	END
		--print @exec