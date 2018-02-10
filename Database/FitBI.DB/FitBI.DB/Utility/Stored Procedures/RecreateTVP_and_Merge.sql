CREATE PROC Utility.RecreateTVP_and_Merge 
(@table_schema varchar(255) = 'stats', 
@table_name varchar(255) = 'WeightMeasurement'
)
as 
begin
declare @exec varchar(255) ='DROP PROC API.merge_' + @Table_schema + '_' + @Table_Name
		EXEC (@Exec)
		
SET @EXEC  = 'DROP TYPE [' + @Table_schema + '].[tvp_' + @Table_Name + ']'
		EXEC (@Exec)
		--print @exec
exec [Utility].[Create_TVP_ByTable]  @Table_schema, @Table_Name

exec [Utility].[CreateMerge_ByTable]  @Table_schema, @Table_Name
end