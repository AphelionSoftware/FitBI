CREATE TABLE [UserSettings].[ColumnChoice] (
    [ColumnChoiceID] INT                NOT NULL,
    [PageID]         INT                NOT NULL,
    [ColumnList]     NVARCHAR (MAX)     NOT NULL,
    [Active]         SMALLINT           CONSTRAINT [DF_ColumnChoice_Active] DEFAULT ((1)) NOT NULL,
    [Code]           VARCHAR (50)       NOT NULL,
    [Name]           VARCHAR (255)      NOT NULL,
    [ID]             VARCHAR (38)       DEFAULT (newid()) NOT NULL,
    [CreatedAt]      DATETIMEOFFSET (7) DEFAULT (CONVERT([datetimeoffset],sysutcdatetime())) NOT NULL,
    [UpdatedAt]      DATETIMEOFFSET (7) NULL,
    [Deleted]        BIT                DEFAULT ((0)) NOT NULL,
    [Version]        ROWVERSION         NOT NULL,
    CONSTRAINT [PK_] PRIMARY KEY CLUSTERED ([Active] ASC),
    CONSTRAINT [IX_Active] UNIQUE NONCLUSTERED ([Active] ASC)
);






GO

-- =============================================
-- Author:		Mark Stacey
-- Create date: 2018-01-04
-- Description:	Populating UpdatedAt
-- =============================================
CREATE TRIGGER [UserSettings].trg_ColumnChoice_Update
   ON  [UserSettings].[ColumnChoice] 
   AFTER UPDATE
AS 
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;
	UPDATE [UserSettings].[ColumnChoice]  
	SET [UserSettings].[ColumnChoice] .UpdatedAt = CONVERT (DATETIMEOFFSET, sysutcdatetime())    
	FROM [UserSettings].[ColumnChoice]  INNER JOIN inserted 
	ON [UserSettings].[ColumnChoice] .ColumnChoiceID = inserted.ColumnChoiceID
	-- Insert statements for trigger here

END