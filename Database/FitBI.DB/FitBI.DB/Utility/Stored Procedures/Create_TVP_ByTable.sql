
CREATE PROC [Utility].[Create_TVP_ByTable] 
	@Table_schema varchar(max),
	@table_name varchar(max)
as
SET NOCOUNT ON

IF EXISTS (select * from sys.table_types tt inner join sys.schemas s
on tt.schema_id = s.schema_id where tt.name = 'tvp_' + @table_name
and s.name = @Table_schema
)
return

DECLARE @line varchar(max) = '', @page varchar(max)  = ''


select @page = 'CREATE TYPE [' + @Table_schema +'].[tvp_' + @table_name + '] AS TABLE 
(
'

from INFORMATION_SCHEMA.TABLES
where   TABLE_SCHEMA   = @table_schema
and TABLE_NAME = @Table_name
ORDER BY TABLE_SCHEMA, TABLE_Name

SET @line= ''
select @line = @line +  ' ' + COLUMN_NAME + ' ' +
CASE WHEN DATA_TYPE = 'timestamp' THEN 'varchar(255) NULL'
 ELSE
 DATA_TYPE
 
+ case when DATA_TYPE in ('varchar', 'char','text','nvarchar', 'nchar','ntext') THEN '(' + ISNULL(NULLIF(cast(c.CHARACTER_MAXIMUM_LENGTH  as varchar(10)),'-1'), 'max')+ ')'
when DATA_TYPE in ('decimal', 'numeric') THEN '(' + cast(c.NUMERIC_PRECISION  as varchar(10)) + ',' + cast(c.NUMERIC_SCALE  as varchar(10)) + ')'
else '' END

END
   + case when ROW_NUMBER() over(order by table_schema desc, table_name desc, column_name desc) = 1 THEN '
' ELSE ',
' END
from INFORMATION_SCHEMA.COLUMNS c
where   TABLE_SCHEMA   like @table_schema
and TABLE_NAME = @Table_name
and COLUMN_NAME NOT IN (
 
''
)
AND NOT EXISTS (SELECT 1 
FROM sys.computed_columns cc
WHERE object_id = OBJECT_ID(TABLE_SCHEMA + '.' + table_name  )
and COL_NAME(cc.object_id ,  cc.column_id) = COLUMN_NAME
)

ORDER BY TABLE_SCHEMA, TABLE_Name, column_name asc



SET @Page = @page + @line + ')
'
--SELECT @page
exec (@Page)