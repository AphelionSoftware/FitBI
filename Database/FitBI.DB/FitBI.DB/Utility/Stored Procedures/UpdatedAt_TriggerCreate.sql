CREATE PROC Utility.UpdatedAt_TriggerCreate
as
DECLARE @SQL varchar(max) = ''
SELECT @SQL = @SQL + '
-- =============================================
-- Author:		Mark Stacey
-- Create date: 2018-01-04
-- Description:	Populating UpdatedAt
-- =============================================
CREATE TRIGGER [' + TABLE_SCHEMA + '].trg_' + TABLE_NAME + '_Update
   ON  [' + TABLE_SCHEMA + '].[' + TABLE_NAME + '] 
   AFTER UPDATE
AS 
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;
	UPDATE [' + TABLE_SCHEMA + '].[' + TABLE_NAME + ']  
	SET [' + TABLE_SCHEMA + '].[' + TABLE_NAME + '] .UpdatedAt = CONVERT (DATETIMEOFFSET, sysutcdatetime())    
	FROM [' + TABLE_SCHEMA + '].[' + TABLE_NAME + ']  INNER JOIN inserted 
	ON [' + TABLE_SCHEMA + '].[' + TABLE_NAME + '] .' + TABLE_NAME + 'ID = inserted.' + TABLE_NAME + 'ID
	-- Insert statements for trigger here

END
GO
' from INFORMATION_SCHEMA.TABLES t
where not exists (select 1 FROM sys.triggers WHERE name = 'trg_' + TABLE_NAME + '_Update')
AND exists (SELECT 1 from INFORMATION_SCHEMA.COLUMNS c WHERE c.TABLE_SCHEMA = t.TABLE_SCHEMA and c.TABLE_NAME = t.TABLE_NAME and c.COLUMN_NAME = TABLE_NAME + 'ID')
--EXEC (@SQL)
print @SQL