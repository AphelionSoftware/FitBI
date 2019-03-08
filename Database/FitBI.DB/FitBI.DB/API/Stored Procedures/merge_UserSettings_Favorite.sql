CREATE PROC [API].merge_UserSettings_Favorite
	@tvp_Favorite [UserSettings].[tvp_Favorite] READONLY
AS
MERGE INTO [UserSettings].[Favorite] AS dest
USING @tvp_Favorite As Src
	ON dest.[FavoriteID] = src.[FavoriteID]
	WHEN MATCHED 
	AND 
		(ISNULL(CONVERT(timestamp,Src.Version), dest.Version) = dest.Version 
			OR Src.UpdatedAt > dest.UpdatedAt)
	
	THEN UPDATE SET dest.[Code] = ISNULL(src.[Code], dest.[Code]),
dest.[Deleted] = ISNULL(src.[Deleted], dest.[Deleted]),
dest.[isFavorite] = ISNULL(src.[isFavorite], dest.[isFavorite]),
dest.[MetricSetID] = ISNULL(src.[MetricSetID], dest.[MetricSetID]),
dest.[Name] = ISNULL(src.[Name], dest.[Name]),
dest.[UserID] = ISNULL(src.[UserID], dest.[UserID])

 WHEN NOT MATCHED THEN
 INSERT (
  Code,
 ID,
 isFavorite,
 MetricSetID,
 Name,
 UserID
)
VALUES(  src.Code,
 ISNULL(src.ID, newid()),
 src.isFavorite,
 src.MetricSetID,
 src.Name,
 src.UserID
)
;