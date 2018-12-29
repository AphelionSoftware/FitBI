CREATE TABLE [Security].[User] (
    [UserID]       INT                IDENTITY (1, 1) NOT NULL,
    [PersonID]     INT                NOT NULL,
    [Active]       SMALLINT           CONSTRAINT [DF_User_Active] DEFAULT ((1)) NOT NULL,
    [ID]           VARCHAR (38)       CONSTRAINT [DF__User__ID__1FEDB87C] DEFAULT (newid()) NOT NULL,
    [auth_subject] VARCHAR (127)      NULL,
    [CreatedAt]    DATETIMEOFFSET (7) CONSTRAINT [DF__User__CreatedAt__20E1DCB5] DEFAULT (CONVERT([datetimeoffset],sysutcdatetime())) NOT NULL,
    [UpdatedAt]    DATETIME           CONSTRAINT [DF_User_UpdatedAt] DEFAULT (getdate()) NOT NULL,
    [Deleted]      BIT                CONSTRAINT [DF__User__Deleted__21D600EE] DEFAULT ((0)) NOT NULL,
    [Version]      ROWVERSION         NOT NULL,
    CONSTRAINT [PK_User] PRIMARY KEY CLUSTERED ([UserID] ASC),
    CONSTRAINT [FK_User_Active] FOREIGN KEY ([Active]) REFERENCES [Core].[Active] ([ActiveID]),
    CONSTRAINT [FK_User_Person] FOREIGN KEY ([PersonID]) REFERENCES [Stats].[Person] ([PersonID]),
    CONSTRAINT [IX_Active] UNIQUE NONCLUSTERED ([PersonID] ASC, [Active] ASC)
);












GO

-- =============================================
-- Author:		Mark Stacey
-- Create date: 2018-01-04
-- Description:	Populating UpdatedAt
-- =============================================
CREATE TRIGGER [Security].trg_User_Update
   ON  [Security].[User] 
   AFTER UPDATE
AS 
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;
	UPDATE [Security].[User]  
	SET [Security].[User] .UpdatedAt = CONVERT (DATETIMEOFFSET, sysutcdatetime())    
	FROM [Security].[User]  INNER JOIN inserted 
	ON [Security].[User] .UserID = inserted.UserID
	-- Insert statements for trigger here

END