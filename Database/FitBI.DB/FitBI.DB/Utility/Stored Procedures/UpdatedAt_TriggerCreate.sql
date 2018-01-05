CREATE PROC Utility.UpdatedAt_TriggerCreate
as
DECLARE @SQL varchar(max) = ''
SELECT @SQL = @SQL + '
-- =============================================
-- Author:		Mark Stacey
-- Create date: 2018-01-04
-- Description:	Populating UpdatedAt
-- =============================================
CREATE TRIGGER [' + table_schema + '].trg_' + table_name + '_Update
   ON  [' + table_schema + '].[' + table_name + '] 
   AFTER UPDATE
AS 
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;
	UPDATE [' + table_schema + '].[' + table_name + ']  
	SET [' + table_schema + '].[' + table_name + '] .UpdatedAt = CONVERT (DATETIMEOFFSET, sysutcdatetime())    
	FROM [' + table_schema + '].[' + table_name + ']  INNER JOIN inserted 
	ON [' + table_schema + '].[' + table_name + '] .' + table_name + 'ID = inserted.' + table_name + 'ID
	-- Insert statements for trigger here

END
GO
' from INFORMATION_SCHEMA.TABLES t
where not exists (select 1 FROM sys.triggers WHERE name = 'trg_' + table_name + '_Update')
AND exists (SELECT 1 from INFORMATION_SCHEMA.COLUMNS c WHERE c.TABLE_SCHEMA = t.TABLE_SCHEMA and c.TABLE_NAME = t.TABLE_NAME and c.COLUMN_NAME = table_name + 'ID')
--EXEC (@SQL)
print @SQL