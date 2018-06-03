


CREATE TRIGGER [trg_Create_MergeProc] ON DATABASE 
	FOR CREATE_TABLE
AS 
DECLARE @Table_Name varchar(255), @Table_Schema varchar(255)
    SELECT 
        @TABLE_NAME = EVENTDATA().value('(/EVENT_INSTANCE/ObjectName)[1]','SYSNAME')
    SELECT         @TABLE_SCHEMA = EVENTDATA().value('(/EVENT_INSTANCE/SchemaName)[1]','SYSNAME')
		--declare @exec varchar(255) ='exec [Utility].[CreateMerge_ByTable]  ' + @Table_schema + ',' + @Table_Name
		--print @exec
IF NOT @Table_Name LIKE 'TMP_%' 
BEGIN
exec [Utility].[Create_TVP_ByTable]  @Table_schema, @Table_Name
-- exec [Utility].[CreateMerge_ByTable]  @Table_schema, @Table_Name
-- Done insisde create tvp
END
GO
DISABLE TRIGGER [trg_Create_MergeProc]
    ON DATABASE;

