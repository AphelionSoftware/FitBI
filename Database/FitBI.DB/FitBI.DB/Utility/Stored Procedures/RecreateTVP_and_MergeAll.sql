﻿CREATE PROC [Utility].[RecreateTVP_and_MergeAll] 
as 
begin
declare @exec varchar(max) = ''

select @exec = @exec  + '
EXEC [Utility].[RecreateTVP_and_Merge] ''' + Table_schema + ''', ''' +Table_Name + ''''
FROM INFORMATION_SCHEMA.TABLES
where TABLE_SCHEMA in (
'exercise', 'program', 'stats')
select @Exec 
		EXEC (@Exec)
END