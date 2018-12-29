CREATE FUNCTION Utility.fnColumnList  (@SchemaName Varchar(255) 
, @TableName Varchar(255)
, @Prefix  Varchar(255) = 'Tbl'
 )
RETURNS VARCHAR(max)
AS
BEGIN
DECLARE @ColList Varchar(max) = ''

SELECT @ColList = @ColList + 
IIF(Row_number() over (order by COLUMN_NAME) = 1, '	', '	,') 
+  
IIF( c.Data_Type IN ('date'
,'datetime2'
,'smalldatetime'
,'datetime'), 
 'CONVERT(varchar(255), [' + @Prefix + '].[' + + COLUMN_NAME + '], 127) + ''Z'' AS [' + COLUMN_NAME + '', 
 '[' + @Prefix + '].[' + COLUMN_NAME ) + ']
'
from INFORMATION_SCHEMA.COLUMNS C
WHERE C.TABLE_SCHEMA = @SchemaName
and c.TABLE_NAME = @TableName

RETURN @ColList

END