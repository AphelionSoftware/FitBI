
--CREATE SCHEMA Utility authorization DBO
CREATE PROC Utility.GetAttributes 
(@TableName varchar(255)) 
as

SELECT 'public ' + case when c.DATA_TYPE = 'varchar' THEN 'string' 
when c.DATA_TYPE in ('int', 'smallint', 'bigint')
THEN 'int'
when c.DATA_TYPE iN ('decimal', 'numeric') THEN 'float' 
when c.DATA_TYPE iN ('datetime', 'date', 'time') THEN 'DateTime' 
end

+ ' ' + COLUMN_NAME + ' { get; set; }
'
--, DATA_TYPE, COLUMN_NAME

from INFORMATION_SCHEMA.COLUMNS c

where TABLE_NAME  = @TableName
and COLUMN_NAME not in (
'Active'
,'sysCreatedOn'
,'sysCreatedBy'
,'sysModifiedOn'
,'sysModifiedBy'
,'sysTimestamp')