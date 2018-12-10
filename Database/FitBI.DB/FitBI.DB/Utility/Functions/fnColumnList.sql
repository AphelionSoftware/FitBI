CREATE FUNCTION Utility.fnColumnList  (@SchemaName Varchar(255) 
, @TableName Varchar(255)
, @Prefix  Varchar(255) = 'Tbl'
 )
RETURNS VARCHAR(max)
AS
BEGIN
DECLARE @ColList Varchar(max) = ''

SELECT @ColList = @ColList + 
IIF(Row_number() over (order by column_name) = 1, '	', '	,') 
+  
IIF( c.Data_Type IN ('date'
,'datetime2'
,'smalldatetime'
,'datetime'), 
 'CONVERT(varchar(255), [' + @Prefix + '].[' + + column_name + '], 127) + ''Z'' AS [' + column_name + '', 
 '[' + @Prefix + '].[' + column_name ) + ']
'
from INFORMATION_SCHEMA.COLUMNS C
WHERE C.TABLE_SCHEMA = @SchemaName
and c.TABLE_NAME = @TableName

RETURN @ColList

END