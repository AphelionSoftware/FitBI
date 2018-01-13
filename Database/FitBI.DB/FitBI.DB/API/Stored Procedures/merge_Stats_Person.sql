CREATE PROC [API].merge_Stats_Person
	@tvp_Person [Stats].[tvp_Person] READONLY
AS
MERGE INTO [Stats].[Person] AS dest
USING @tvp_Person As Src
	ON dest.[PersonID] = src.[PersonID]
	WHEN MATCHED 
	AND 
		(ISNULL(CONVERT(timestamp,Src.Version), dest.Version) = dest.Version 
			OR Src.UpdatedAt > dest.UpdatedAt)
	
	THEN UPDATE SET dest.[DateOfBirth] = ISNULL(src.[DateOfBirth], dest.[DateOfBirth]),
dest.[Deleted] = ISNULL(src.[Deleted], dest.[Deleted]),
dest.[FirstName] = ISNULL(src.[FirstName], dest.[FirstName]),
dest.[Height] = ISNULL(src.[Height], dest.[Height]),
dest.[ID] = ISNULL(src.[ID], dest.[ID]),
dest.[Surname] = ISNULL(src.[Surname], dest.[Surname])

 WHEN NOT MATCHED THEN
 INSERT (
  DateOfBirth,
 Deleted,
 FirstName,
 Height,
 ID,
 Surname
)
VALUES(  src.DateOfBirth,
 src.Deleted,
 src.FirstName,
 src.Height,
 ISNULL(src.ID, newid()),
 src.Surname
)
;