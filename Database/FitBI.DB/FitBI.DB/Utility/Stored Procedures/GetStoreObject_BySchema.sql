CREATE PROC [Utility].[GetStoreObject_BySchema] 
	@TABLE_SCHEMA varchar(max)
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
where   TABLE_SCHEMA   like @TABLE_SCHEMA
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
where   TABLE_SCHEMA   like @TABLE_SCHEMA
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
where   TABLE_SCHEMA   like @TABLE_SCHEMA
and COLUMN_NAME= 'Active'
ORDER BY TABLE_SCHEMA, TABLE_NAME

SET @Page = @page + @line + '}

const ' + lower(@TABLE_SCHEMA) + ' = {
  namespaced: true,
  state,
  getters,
  mutations
}

export default ' + lower(@TABLE_SCHEMA) + ''

--SELECT 
----	TABLE_SCHEMA as objectName
----, 
----'  '+ TABLE_NAME + ': [],' as Properties
----,
---- '
----  Set_' + TABLE_NAME + ': function (state, fullList) {
----    state.' + TABLE_NAME + ' = fullList
----  },
----' Mutation
----,
 --'  Get_' + TABLE_NAME + ': function () {
 --   return state.' + TABLE_NAME + '
 -- },' Getters
----,
----'  store.dispatch(''core/Set_' + TABLE_NAME + ''', coreValues.' + TABLE_NAME + ')'
--   --Setup
-- from INFORMATION_SCHEMA.COLUMNS
--where   TABLE_SCHEMA   like @TABLE_SCHEMA
--and COLUMN_NAME= 'Active'
--ORDER BY TABLE_SCHEMA, TABLE_NAME

SELECT @page