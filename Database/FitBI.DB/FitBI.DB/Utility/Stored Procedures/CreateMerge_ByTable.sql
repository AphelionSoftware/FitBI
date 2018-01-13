
CREATE PROC [Utility].[CreateMerge_ByTable] 
	@Table_Schema varchar(max),
	@Table_Name varchar(max)
as
SET NOCOUNT ON


DECLARE
	@MergeStmnt		VARCHAR(MAX) = '',
	@CreateStmnt		VARCHAR(MAX) = '',
	@Line		VARCHAR(MAX) = '',
	@JoinClause	VARCHAR(MAX) = ''
	
-- Init variables

-- find the table's Primary Key column(s) to build a JOIN clause
SELECT 
	@JoinClause = 'dest.[' + @Table_Name + 'ID] = src.[' + @Table_Name + 'ID]'
FROM INFORMATION_SCHEMA.COLUMNS

WHERE TABLE_SCHEMA = @Table_Schema
AND TABLE_NAME = @Table_Name
AND COLUMN_NAME = 'Active'


SET @MergeStmnt = 'MERGE INTO [' + @Table_Schema + '].[' + @Table_Name + '] AS dest
USING @tvp_' + @Table_Name + ' As Src
	ON ' + @JoinClause + '
	WHEN MATCHED 
	AND 
		(ISNULL(CONVERT(timestamp,Src.Version), dest.Version) = dest.Version 
			OR Src.UpdatedAt > dest.UpdatedAt)
	
	THEN UPDATE SET '


	SET @line= ''
select @line = @line +  'dest.[' + column_name + '] = ISNULL(src.[' + column_name + '], dest.[' + column_name + '])'
   + case when ROW_NUMBER() over(order by table_schema desc, table_name desc,column_name desc) = 1 THEN '
' ELSE ',
' END
from INFORMATION_SCHEMA.COLUMNS c
inner join sys.columns  sc
on c.TABLE_NAME  = OBJECT_NAME(object_id)
and c.TABLE_SCHEMA = OBJECT_SCHEMA_NAME(object_id)
and c.COLUMN_NAME = sc.name
and sc.is_computed = 0
where   TABLE_SCHEMA = @table_schema
AND TABLE_NAME = @TABLE_NAME
and COLUMN_NAME NOT IN (
'Active'
,'CreatedAt'
,'Version'
, 'PersonID' --Can't update the person
, 'UpdatedAt' --Handled by trigger
, @Table_Name + 'ID')
ORDER BY TABLE_SCHEMA, TABLE_Name, COLUMN_NAME

SET @MergeStmnt = @MergeStmnt + @LIne + '
 WHEN NOT MATCHED THEN
 INSERT (
 '
  

	SET @line= ''
select @line = @line +  ' ' + column_name
   + case when ROW_NUMBER() over(order by table_schema desc, table_name desc,column_name desc) = 1 THEN '
' ELSE ',
' END
from INFORMATION_SCHEMA.COLUMNS c
inner join sys.columns  sc
on c.TABLE_NAME  = OBJECT_NAME(object_id)
and c.TABLE_SCHEMA = OBJECT_SCHEMA_NAME(object_id)
and c.COLUMN_NAME = sc.name
and sc.is_computed = 0

where   TABLE_SCHEMA   = @table_schema

AND TABLE_NAME = @TABLE_NAME
and COLUMN_NAME NOT IN (
 'Active'
,'CreatedAt'
,'Version'
, 'UpdatedAt' --Handled by trigger
, @Table_Name + 'ID'

)

ORDER BY TABLE_SCHEMA, TABLE_Name, COLUMN_NAME
SET @MergeStmnt = @MergeStmnt + @LIne + ')
VALUES( ' 



	SET @line= ''
select @line = @line +  
--CASE WHEN COLUMN_NAME = 'ID' THEN ' ISNULL(src.' + COLUMN_NAME + ', newid())' ELSE
' src.' + column_name

--END
   + case when ROW_NUMBER() over(order by table_schema desc, table_name desc,column_name desc) = 1 THEN '
' ELSE ',
' END
from INFORMATION_SCHEMA.COLUMNS c
inner join sys.columns  sc
on c.TABLE_NAME  = OBJECT_NAME(object_id)
and c.TABLE_SCHEMA = OBJECT_SCHEMA_NAME(object_id)
and c.COLUMN_NAME = sc.name
and sc.is_computed = 0
where   TABLE_SCHEMA   = @table_schema

AND TABLE_NAME = @TABLE_NAME
and COLUMN_NAME NOT IN (
 'Active'
,'CreatedAt'
,'Version'
, 'UpdatedAt' --Handled by trigger
, @Table_Name + 'ID')

ORDER BY TABLE_SCHEMA, TABLE_Name, COLUMN_NAME
SET @MergeStmnt = @MergeStmnt + @LIne + ')
;'

--PRINT @MergeStmnt

SET @CreateStmnt = 'CREATE PROC [API].merge_' + @Table_Schema + '_' + @Table_name + '
	@tvp_' + @Table_Name + ' [' + @Table_Schema + '].[tvp_' + @Table_Name + '] READONLY
AS
' + @MergeStmnt
print @CreateStmnt
EXEC (@CreateStmnt)