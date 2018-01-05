CREATE PROC [Utility].[GetStoreObject] 
as
/*SELECT 'Init' as objectName, 'public object  '+ table_name + ';' as Properties
,'objInit.'+ table_name + ' = multi.Read<dynamic>().ToList();' as SetVal
 from INFORMATION_SCHEMA.TABLES
where TABLE_SCHEMA not like '%settings%'
and TABLE_SCHEMA not like '%core%'
ORDER BY TABLE_SCHEMA, TABLE_Name
*/


SELECT 'Core' as objectName
, 
'  '+ table_name + ': [],' as Properties

 from INFORMATION_SCHEMA.COLUMNS
where   TABLE_SCHEMA   like '%core%'
and COLUMN_NAME= 'Active'
ORDER BY TABLE_SCHEMA, TABLE_Name