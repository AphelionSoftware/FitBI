
-- =============================================
-- Author:		Mark Stacey
-- Create date: 2018-01-02
-- Description:	Gets an UserSettingsialisation load set, by using an Auth0 subject
-- =============================================
CREATE PROCEDURE [API].[sp_UserSettings_bySubject]
	
	@Subject varchar(127),
	@Version rowversion = 0x0000000000000000
AS
BEGIN
	SET NOCOUNT ON;
	DECLARE @UserID int
	SELECT @UserID = UserID FROM [Security].[User] U 
		WHERE U.auth_subject = @Subject

	IF @UserID IS NULL 
	BEGIN
	Declare @tblPerson table(PersonID int)
	Declare @tblUser table(UserID int)

	INSERT INTO [Stats].[Person]
	(
	ID)
	OUTPUT Inserted.PersonID INTO @tblPerson 
	SELECT Newid() ID	

	INSERT INTO [Security].[User]
	(PersonID, auth_subject)
	OUTPUT inserted.UserID INTO @tblUser
	SELECT PersonID, @Subject FROM @tblPerson

	SELECT @UserID = UserID FROM @tblUser
	END
	EXEC API.sp_UserSettings @UserID = @UserID, @Version = @Version
END