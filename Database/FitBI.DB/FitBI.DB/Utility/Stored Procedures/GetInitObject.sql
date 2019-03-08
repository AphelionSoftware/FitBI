CREATE PROC [Utility].[GetInitObject] 
as
SELECT 'Init' as objectName, 'public object  '+ table_name + ';' as Properties
,'objInit.'+ table_name + ' = multi.Read<dynamic>().ToList();' as SetVal
, '  ' + table_name +': [],' as [state]
 from INFORMATION_SCHEMA.TABLES
where TABLE_SCHEMA not like '%settings%'
and TABLE_SCHEMA not like '%core%'
ORDER BY TABLE_SCHEMA, TABLE_Name

SELECT 'Core' as objectName, 'public object  '+ table_name + ';' as Properties
,'objCore.'+ table_name + ' = multi.Read<dynamic>().ToList();' as SetVal
, '  ' + table_name +': [],' as [state]
 from INFORMATION_SCHEMA.TABLES
where   TABLE_SCHEMA   like '%core%'
ORDER BY TABLE_SCHEMA, TABLE_Name

--- Use tt file
--select '  store.commit(''Core/SET_' + UPPER(table_name) + '_LIST, coreValues.' + table_name + ''')'
--from INFORMATION_SCHEMA.TABLES
--where   TABLE_SCHEMA   like '%core%'
--ORDER BY TABLE_SCHEMA, TABLE_Name
