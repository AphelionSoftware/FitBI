CREATE PROC [Utility].[RecreateTVP_and_Merge] 
(@TABLE_SCHEMA varchar(255) = 'stats', 
@TABLE_NAME varchar(255) = 'WeightMeasurement'
)
as 
begin
declare @exec varchar(255) ='DROP PROC IF EXISTS API.merge_' + @TABLE_SCHEMA + '_' + @TABLE_NAME
		EXEC (@Exec)
		
SET @EXEC  = 'DROP TYPE IF EXISTS  [' + @TABLE_SCHEMA + '].[tvp_' + @TABLE_NAME + ']'
		EXEC (@Exec)
		--print @exec
exec [Utility].[Create_TVP_ByTable]  @TABLE_SCHEMA, @TABLE_NAME

exec [Utility].[CreateMerge_ByTable]  @TABLE_SCHEMA, @TABLE_NAME
end