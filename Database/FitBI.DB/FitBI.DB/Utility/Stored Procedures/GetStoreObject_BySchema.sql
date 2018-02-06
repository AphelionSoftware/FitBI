CREATE PROC [Utility].[GetStoreObject_BySchema] 
	@table_schema varchar(max)
as
SET NOCOUNT ON

DECLARE @line varchar(max) = '', @page varchar(max) = 
'import Vue from ''vue''
import Vuex from ''vuex''

Vue.use(Vuex)

const state = {
'


select @page = @page + '  ' + TABLE_NAME + ': []'  + case when ROW_NUMBER() over(order by TABLE_SCHEMA desc, TABLE_NAME desc) = 1 THEN '
' ELSE ',
' END
from INFORMATION_SCHEMA.COLUMNS
where   TABLE_SCHEMA   like @table_schema
and COLUMN_NAME= 'Active'
ORDER BY TABLE_SCHEMA, TABLE_NAME

SET @page = @page + @line + '}

const getters = {
'
SET @line= ''
select @line = @line +  '  Get_' + TABLE_NAME + '_All: function () {
    return state.' + TABLE_NAME + '
  }' 
   + case when ROW_NUMBER() over(order by TABLE_SCHEMA desc, TABLE_NAME desc) = 1 THEN '
' ELSE ',
' END
from INFORMATION_SCHEMA.COLUMNS
where   TABLE_SCHEMA   like @table_schema
and COLUMN_NAME= 'Active'
ORDER BY TABLE_SCHEMA, TABLE_NAME



SET @Page = @page + @line + '}

const mutations = {
'

SET @Line = ''
SELECT @Line = @Line +  '  Set_' + TABLE_NAME + ': function (state, fullList) {
    state.' + TABLE_NAME + ' = fullList
  }' + case when ROW_NUMBER() over(order by TABLE_SCHEMA desc, TABLE_NAME desc) = 1 THEN '
' ELSE ',
' END
from INFORMATION_SCHEMA.COLUMNS
where   TABLE_SCHEMA   like @table_schema
and COLUMN_NAME= 'Active'
ORDER BY TABLE_SCHEMA, TABLE_NAME

SET @Page = @page + @line + '}

const ' + lower(@table_schema) + ' = {
  namespaced: true,
  state,
  getters,
  mutations
}

export default ' + lower(@table_schema) + ''

--SELECT 
----	table_schema as objectName
----, 
----'  '+ table_name + ': [],' as Properties
----,
---- '
----  Set_' + table_name + ': function (state, fullList) {
----    state.' + table_name + ' = fullList
----  },
----' Mutation
----,
 --'  Get_' + table_name + ': function () {
 --   return state.' + table_name + '
 -- },' Getters
----,
----'  store.dispatch(''core/Set_' + table_name + ''', coreValues.' + table_name + ')'
--   --Setup
-- from INFORMATION_SCHEMA.COLUMNS
--where   TABLE_SCHEMA   like @table_schema
--and COLUMN_NAME= 'Active'
--ORDER BY TABLE_SCHEMA, TABLE_Name

SELECT @page