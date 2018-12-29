


CREATE TRIGGER [trg_Create_MergeProc] ON DATABASE 
	FOR CREATE_TABLE
AS 
DECLARE @TABLE_NAME varchar(255), @TABLE_SCHEMA varchar(255)
    SELECT 
        @TABLE_NAME = EVENTDATA().value('(/EVENT_INSTANCE/ObjectName)[1]','SYSNAME')
    SELECT         @TABLE_SCHEMA = EVENTDATA().value('(/EVENT_INSTANCE/SchemaName)[1]','SYSNAME')
		--declare @exec varchar(255) ='exec [Utility].[CreateMerge_ByTable]  ' + @TABLE_SCHEMA + ',' + @TABLE_NAME
		--print @exec
IF NOT @TABLE_NAME LIKE 'TMP_%' 
BEGIN
exec [Utility].[Create_TVP_ByTable]  @TABLE_SCHEMA, @TABLE_NAME
-- exec [Utility].[CreateMerge_ByTable]  @TABLE_SCHEMA, @TABLE_NAME
-- Done insisde create tvp
END
GO
DISABLE TRIGGER [trg_Create_MergeProc]
    ON DATABASE;

