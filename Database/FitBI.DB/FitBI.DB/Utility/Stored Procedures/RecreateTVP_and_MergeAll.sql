CREATE PROC [Utility].[RecreateTVP_and_MergeAll] 
as 
begin
declare @exec varchar(max) = ''

select @exec = @exec  + '
EXEC [Utility].[RecreateTVP_and_Merge] ''' + TABLE_SCHEMA + ''', ''' +TABLE_NAME + ''''
FROM INFORMATION_SCHEMA.TABLES
where TABLE_SCHEMA in (
'exercise', 'program', 'stats', 'UserSettings' )
select @Exec 
		EXEC (@Exec)
END