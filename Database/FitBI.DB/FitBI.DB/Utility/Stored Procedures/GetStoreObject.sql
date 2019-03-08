CREATE PROC [Utility].[GetStoreObject] 
as
SET NOCOUNT ON

--SELECT 

--'  store.dispatch(''' + table_schema + '/Set_' + table_name + ''', initValues.' + table_name + ')'
--   Setup
--   from INFORMATION_SCHEMA.COLUMNS
--where TABLE_SCHEMA not like '%settings%'
--and TABLE_SCHEMA not like '%core%'
--and COLUMN_NAME= 'Active'
--ORDER BY TABLE_SCHEMA, TABLE_Name



--SELECT 
--	'Core' as objectName
--, 
--'  '+ table_name + ': [],' as Properties
--,
-- '
--  Set_' + table_name + ': function (state, fullList) {
--    state.' + table_name + ' = fullList
--  },
--' Mutation
--,
-- '  Get_' + table_name + ': function () {
--    return state.' + table_name + '
--  },' Getters
--,
--'  store.dispatch(''core/Set_' + table_name + ''', coreValues.' + table_name + ')'
--   Setup
-- from INFORMATION_SCHEMA.COLUMNS
--where   TABLE_SCHEMA   like '%core%'
--and COLUMN_NAME= 'Active'
--ORDER BY TABLE_SCHEMA, TABLE_Name

SELECT 
--	table_schema as objectName
--, 
--'  '+ table_name + ': [],' as Properties
--,
-- '
--  Set_' + table_name + ': function (state, fullList) {
--    state.' + table_name + ' = fullList
--  },
--' Mutation
--,
 '  Get_' + table_name + ': function () {
    return state.' + table_name + '
  },' Getters
--,
--'  store.dispatch(''core/Set_' + table_name + ''', coreValues.' + table_name + ')'
   --Setup
 from INFORMATION_SCHEMA.COLUMNS
where   TABLE_SCHEMA   like '%exercise%'
and COLUMN_NAME= 'Active'
ORDER BY TABLE_SCHEMA, TABLE_Name
