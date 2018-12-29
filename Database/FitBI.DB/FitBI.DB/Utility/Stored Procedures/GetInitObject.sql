CREATE PROC [Utility].[GetInitObject] 
as
SELECT 'Init' as objectName, 'public object  '+ TABLE_NAME + ';' as Properties
,'objInit.'+ TABLE_NAME + ' = multi.Read<dynamic>().ToList();' as SetVal
, '  ' + TABLE_NAME +': [],' as [state]
 from INFORMATION_SCHEMA.TABLES
where TABLE_SCHEMA not like '%settings%'
and TABLE_SCHEMA not like '%core%'
ORDER BY TABLE_SCHEMA, TABLE_NAME

SELECT 'Core' as objectName, 'public object  '+ TABLE_NAME + ';' as Properties
,'objCore.'+ TABLE_NAME + ' = multi.Read<dynamic>().ToList();' as SetVal
, '  ' + TABLE_NAME +': [],' as [state]
 from INFORMATION_SCHEMA.TABLES
where   TABLE_SCHEMA   like '%core%'
ORDER BY TABLE_SCHEMA, TABLE_NAME
