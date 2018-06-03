


CREATE TRIGGER [trg_Drop_MergeProc] ON DATABASE 
	FOR DROP_TABLE
AS 
DECLARE @Table_Name varchar(255), @Table_Schema varchar(255)
    SELECT 
        @TABLE_NAME = EVENTDATA().value('(/EVENT_INSTANCE/ObjectName)[1]','SYSNAME')
    SELECT         @TABLE_SCHEMA = EVENTDATA().value('(/EVENT_INSTANCE/SchemaName)[1]','SYSNAME')
IF NOT @Table_Name LIKE 'TMP_%' 
BEGIN

	IF EXISTS (SELECT 1 FROM sys.procedures where SCHEMA_NAME(schema_id) = 'API' and name = 'API.merge_' + @Table_schema + '_' + @Table_Name)
	BEGIN
		declare @exec varchar(255) ='DROP PROC API.merge_' + @Table_schema + '_' + @Table_Name
		EXEC (@Exec)
		SET @EXEC  = 'DROP TYPE [' + @Table_schema + '].[tvp_' + @Table_Name + ']'
		EXEC (@Exec)
	END
		--print @exec
END
GO
DISABLE TRIGGER [trg_Drop_MergeProc]
    ON DATABASE;

