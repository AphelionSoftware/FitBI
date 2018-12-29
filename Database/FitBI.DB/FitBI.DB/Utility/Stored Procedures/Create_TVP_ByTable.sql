
CREATE PROC [Utility].[Create_TVP_ByTable] 
	@TABLE_SCHEMA varchar(max),
	@TABLE_NAME varchar(max)
as
SET NOCOUNT ON

IF EXISTS (select * from sys.table_types tt inner join sys.schemas s
on tt.schema_id = s.schema_id where tt.name = 'tvp_' + @TABLE_NAME
and s.name = @TABLE_SCHEMA
)
return

DECLARE @line varchar(max) = '', @page varchar(max)  = ''


select @page = 'CREATE TYPE [' + @TABLE_SCHEMA +'].[tvp_' + @TABLE_NAME + '] AS TABLE 
(
'

from INFORMATION_SCHEMA.TABLES
where   TABLE_SCHEMA   = @TABLE_SCHEMA
and TABLE_NAME = @TABLE_NAME
ORDER BY TABLE_SCHEMA, TABLE_NAME

SET @line= ''
select @line = @line +  ' ' + COLUMN_NAME + ' ' +
CASE WHEN DATA_TYPE = 'timestamp' THEN 'varchar(255) NULL'
 ELSE
 DATA_TYPE
 
+ case when DATA_TYPE in ('varchar', 'char','text','nvarchar', 'nchar','ntext') THEN '(' + ISNULL(NULLIF(cast(c.CHARACTER_MAXIMUM_LENGTH  as varchar(10)),'-1'), 'max')+ ')'
when DATA_TYPE in ('decimal', 'numeric') THEN '(' + cast(c.NUMERIC_PRECISION  as varchar(10)) + ',' + cast(c.NUMERIC_SCALE  as varchar(10)) + ')'
else '' END

END
   + case when ROW_NUMBER() over(order by TABLE_SCHEMA desc, TABLE_NAME desc, COLUMN_NAME desc) = 1 THEN '
' ELSE ',
' END
from INFORMATION_SCHEMA.COLUMNS c
where   TABLE_SCHEMA   like @TABLE_SCHEMA
and TABLE_NAME = @TABLE_NAME
and COLUMN_NAME NOT IN (
 
''
)
AND NOT EXISTS (SELECT 1 
FROM sys.computed_columns cc
WHERE object_id = OBJECT_ID(TABLE_SCHEMA + '.' + TABLE_NAME  )
and COL_NAME(cc.object_id ,  cc.column_id) = COLUMN_NAME
)

ORDER BY TABLE_SCHEMA, TABLE_NAME, COLUMN_NAME asc



SET @Page = @page + @line + ')
'
--SELECT @page
exec (@Page)