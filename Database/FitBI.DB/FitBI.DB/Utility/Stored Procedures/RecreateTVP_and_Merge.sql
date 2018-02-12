CREATE PROC Utility.RecreateTVP_and_Merge 
(
	@Table_Schema varchar(255) = 'stats', 
	@Table_Name varchar(255) = 'WeightMeasurement'
)
as 
begin
declare @exec varchar(255) ='DROP PROC API.merge_' + @Table_Schema + '_' + @Table_Name
		EXEC (@Exec)
		
SET @EXEC  = 'DROP TYPE [' + @Table_Schema + '].[tvp_' + @Table_Name + ']'
		EXEC (@Exec)
		--print @exec
exec [Utility].[Create_TVP_ByTable]  @Table_Schema, @Table_Name

exec [Utility].[CreateMerge_ByTable]  @Table_Schema, @Table_Name
end