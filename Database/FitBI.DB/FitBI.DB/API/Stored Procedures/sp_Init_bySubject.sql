
-- =============================================
-- Author:		Mark Stacey
-- Create date: 2018-01-02
-- Description:	Gets an initialisation load set, by using an Auth0 subject
-- =============================================
CREATE PROCEDURE [API].[sp_Init_bySubject]
	
	@Subject varchar(127),
	@Version rowversion = 0x0000000000000000
AS
BEGIN
	SET NOCOUNT ON;
	DECLARE @UserID int
	SELECT @UserID = UserID FROM [Security].[User] U 
		WHERE U.auth_subject = @Subject

	EXEC API.sp_Init @UserID = @UserID, @Version = @Version
END