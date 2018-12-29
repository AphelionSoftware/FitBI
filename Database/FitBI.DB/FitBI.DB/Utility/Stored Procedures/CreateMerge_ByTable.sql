

CREATE PROC [Utility].[CreateMerge_ByTable] 
	@TABLE_SCHEMA varchar(max),
	@TABLE_NAME varchar(max)
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
	@JoinClause = 'dest.[' + @TABLE_NAME + 'ID] = src.[' + @TABLE_NAME + 'ID]'
FROM INFORMATION_SCHEMA.COLUMNS

WHERE TABLE_SCHEMA = @TABLE_SCHEMA
AND TABLE_NAME = @TABLE_NAME
AND COLUMN_NAME = 'Active'


SET @MergeStmnt = 'MERGE INTO [' + @TABLE_SCHEMA + '].[' + @TABLE_NAME + '] AS dest
USING @tvp_' + @TABLE_NAME + ' As Src
	ON ' + @JoinClause 
	IF EXISTS (SELECT 1 FROM INFORMATION_SCHEMA.COLUMNS C
	WHERE C.TABLE_SCHEMA = @TABLE_SCHEMA
	AND C.TABLE_NAME = @TABLE_NAME
	AND C.COLUMN_NAME = 'MeasurementDate'
	)
		SET @MergeStmnt = @MergeStmnt  + '
		AND CAST(Src.MeasurementDate as DATE) <> CAST(Dest.MeasurementDate as DATE)'

SET @MergeStmnt = @MergeStmnt  + '
	WHEN MATCHED 
	AND 
		(ISNULL(CONVERT(timestamp,Src.Version), dest.Version) = dest.Version 
			OR Src.UpdatedAt > dest.UpdatedAt)
	
	THEN UPDATE SET '


	SET @line= ''
select @line = @line +  'dest.[' + COLUMN_NAME + '] = ISNULL(src.[' + COLUMN_NAME + '], dest.[' + COLUMN_NAME + '])'
   + case when ROW_NUMBER() over(order by TABLE_SCHEMA desc, TABLE_NAME desc,COLUMN_NAME desc) = 1 THEN '
' ELSE ',
' END
from INFORMATION_SCHEMA.COLUMNS c (nolock)
inner join sys.columns  sc (nolock)
on c.TABLE_NAME  = OBJECT_NAME(object_id)
and c.TABLE_SCHEMA = OBJECT_SCHEMA_NAME(object_id)
and c.COLUMN_NAME = sc.name
and sc.is_computed = 0
where   TABLE_SCHEMA = @TABLE_SCHEMA
AND TABLE_NAME = @TABLE_NAME
and COLUMN_NAME NOT IN (
'Active'
,'ID'
,'CreatedAt'
,'Version'
, 'PersonID' --Can't update the person
, 'UpdatedAt' --Handled by trigger
, @TABLE_NAME + 'ID')
ORDER BY TABLE_SCHEMA, TABLE_NAME, COLUMN_NAME

SET @MergeStmnt = @MergeStmnt + @LIne + '
 WHEN NOT MATCHED THEN
 INSERT (
 '
  

	SET @line= ''
select @line = @line +  ' ' + COLUMN_NAME
   + case when ROW_NUMBER() over(order by TABLE_SCHEMA desc, TABLE_NAME desc,COLUMN_NAME desc) = 1 THEN '
' ELSE ',
' END
from INFORMATION_SCHEMA.COLUMNS c
inner join sys.columns  sc
on c.TABLE_NAME  = OBJECT_NAME(object_id)
and c.TABLE_SCHEMA = OBJECT_SCHEMA_NAME(object_id)
and c.COLUMN_NAME = sc.name
and sc.is_computed = 0

where   TABLE_SCHEMA   = @TABLE_SCHEMA

AND TABLE_NAME = @TABLE_NAME
and COLUMN_NAME NOT IN (
 'Active'
,'Deleted'
,'CreatedAt'
,'Version'
, 'UpdatedAt' --Handled by trigger
, @TABLE_NAME + 'ID'

)

ORDER BY TABLE_SCHEMA, TABLE_NAME, COLUMN_NAME
SET @MergeStmnt = @MergeStmnt + @LIne + ')
VALUES( ' 



	SET @line= ''
select @line = @line +  
--CASE WHEN COLUMN_NAME = 'ID' THEN ' ISNULL(src.' + COLUMN_NAME + ', newid())' ELSE
IIF( COLUMN_NAME = 'ID' , ' ISNULL(src.ID, newid())', ' src.' + COLUMN_NAME)

--END
   + case when ROW_NUMBER() over(order by TABLE_SCHEMA desc, TABLE_NAME desc,COLUMN_NAME desc) = 1 THEN '
' ELSE ',
' END
from INFORMATION_SCHEMA.COLUMNS c
inner join sys.columns  sc
on c.TABLE_NAME  = OBJECT_NAME(object_id)
and c.TABLE_SCHEMA = OBJECT_SCHEMA_NAME(object_id)
and c.COLUMN_NAME = sc.name
and sc.is_computed = 0
where   TABLE_SCHEMA   = @TABLE_SCHEMA

AND TABLE_NAME = @TABLE_NAME
and COLUMN_NAME NOT IN (
 'Active'
,'Deleted'
,'CreatedAt'
,'Version'
, 'UpdatedAt' --Handled by trigger
, @TABLE_NAME + 'ID')

ORDER BY TABLE_SCHEMA, TABLE_NAME, COLUMN_NAME
SET @MergeStmnt = @MergeStmnt + @LIne + ')
;'

--PRINT @MergeStmnt

SET @CreateStmnt = 'CREATE PROC [API].merge_' + @TABLE_SCHEMA + '_' + @TABLE_NAME + '
	@tvp_' + @TABLE_NAME + ' [' + @TABLE_SCHEMA + '].[tvp_' + @TABLE_NAME + '] READONLY
AS
' + @MergeStmnt
-- print @CreateStmnt
EXEC (@CreateStmnt)