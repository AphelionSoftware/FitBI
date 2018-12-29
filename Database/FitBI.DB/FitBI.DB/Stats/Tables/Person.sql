CREATE TABLE [Stats].[Person] (
    [PersonID]      INT                IDENTITY (1, 1) NOT NULL,
    [FirstName]     NVARCHAR (50)      NULL,
    [Surname]       NVARCHAR (50)      NULL,
    [DateOfBirth]   DATE               NULL,
    [DateOfBirthID] AS                 (CONVERT([int],CONVERT([varchar](10),[DateOfBirth],(112)))),
    [Height]        SMALLINT           NULL,
    [Active]        SMALLINT           CONSTRAINT [DF_Person_Active] DEFAULT ((1)) NOT NULL,
    [ID]            VARCHAR (38)       CONSTRAINT [DF_Metric_ID] DEFAULT (newid()) NOT NULL,
    [CreatedAt]     DATETIMEOFFSET (7) CONSTRAINT [DF_Person_CreatedAt] DEFAULT (CONVERT([datetimeoffset],sysutcdatetime())) NOT NULL,
    [UpdatedAt]     DATETIME           CONSTRAINT [DF_Person_UpdatedAt] DEFAULT (getdate()) NOT NULL,
    [Deleted]       BIT                CONSTRAINT [DF_Person_Deleted] DEFAULT ((0)) NOT NULL,
    [Version]       ROWVERSION         NOT NULL,
    CONSTRAINT [PK_Person] PRIMARY KEY CLUSTERED ([PersonID] ASC),
    CONSTRAINT [FK_Person_Active] FOREIGN KEY ([Active]) REFERENCES [Core].[Active] ([ActiveID])
);












GO

-- =============================================
-- Author:		Mark Stacey
-- Create date: 2018-01-04
-- Description:	Populating UpdatedAt
-- =============================================
CREATE TRIGGER [Stats].trg_Person_Update
   ON  [Stats].[Person] 
   AFTER UPDATE
AS 
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;
	UPDATE [Stats].[Person]  
	SET [Stats].[Person] .UpdatedAt = CONVERT (DATETIMEOFFSET, sysutcdatetime())    
	FROM [Stats].[Person]  INNER JOIN inserted 
	ON [Stats].[Person] .PersonID = inserted.PersonID
	-- Insert statements for trigger here

END