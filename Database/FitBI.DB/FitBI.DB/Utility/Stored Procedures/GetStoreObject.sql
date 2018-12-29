CREATE PROC [Utility].[GetStoreObject] 
as
SET NOCOUNT ON

--SELECT 

--'  store.dispatch(''' + TABLE_SCHEMA + '/Set_' + TABLE_NAME + ''', initValues.' + TABLE_NAME + ')'
--   Setup
--   from INFORMATION_SCHEMA.COLUMNS
--where TABLE_SCHEMA not like '%settings%'
--and TABLE_SCHEMA not like '%core%'
--and COLUMN_NAME= 'Active'
--ORDER BY TABLE_SCHEMA, TABLE_NAME



--SELECT 
--	'Core' as objectName
--, 
--'  '+ TABLE_NAME + ': [],' as Properties
--,
-- '
--  Set_' + TABLE_NAME + ': function (state, fullList) {
--    state.' + TABLE_NAME + ' = fullList
--  },
--' Mutation
--,
-- '  Get_' + TABLE_NAME + ': function () {
--    return state.' + TABLE_NAME + '
--  },' Getters
--,
--'  store.dispatch(''core/Set_' + TABLE_NAME + ''', coreValues.' + TABLE_NAME + ')'
--   Setup
-- from INFORMATION_SCHEMA.COLUMNS
--where   TABLE_SCHEMA   like '%core%'
--and COLUMN_NAME= 'Active'
--ORDER BY TABLE_SCHEMA, TABLE_NAME

SELECT 
--	TABLE_SCHEMA as objectName
--, 
--'  '+ TABLE_NAME + ': [],' as Properties
--,
-- '
--  Set_' + TABLE_NAME + ': function (state, fullList) {
--    state.' + TABLE_NAME + ' = fullList
--  },
--' Mutation
--,
 '  Get_' + TABLE_NAME + ': function () {
    return state.' + TABLE_NAME + '
  },' Getters
--,
--'  store.dispatch(''core/Set_' + TABLE_NAME + ''', coreValues.' + TABLE_NAME + ')'
   --Setup
 from INFORMATION_SCHEMA.COLUMNS
where   TABLE_SCHEMA   like '%exercise%'
and COLUMN_NAME= 'Active'
ORDER BY TABLE_SCHEMA, TABLE_NAME
