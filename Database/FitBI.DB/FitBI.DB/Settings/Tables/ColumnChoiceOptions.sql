CREATE TABLE [Settings].[ColumnChoiceOptions] (
    [ColumnChoiceOptionsID] INT                NOT NULL,
    [Active]                SMALLINT           CONSTRAINT [DF_ColumnChoiceOptions_Active] DEFAULT ((1)) NOT NULL,
    [PageID]                INT                NULL,
    [Code]                  VARCHAR (50)       NOT NULL,
    [Name]                  VARCHAR (255)      NOT NULL,
    [ID]                    VARCHAR (38)       DEFAULT (newid()) NOT NULL,
    [CreatedAt]             DATETIMEOFFSET (7) DEFAULT (CONVERT([datetimeoffset],sysutcdatetime())) NOT NULL,
    [UpdatedAt]             DATETIMEOFFSET (7) NULL,
    [Version]               ROWVERSION         NOT NULL,
    CONSTRAINT [PK_Active] PRIMARY KEY CLUSTERED ([Active] ASC),
    CONSTRAINT [IX_Active] UNIQUE NONCLUSTERED ([Active] ASC)
);






GO

-- =============================================
-- Author:		Mark Stacey
-- Create date: 2018-01-04
-- Description:	Populating UpdatedAt
-- =============================================
CREATE TRIGGER [Settings].trg_ColumnChoiceOptions_Update
   ON  [Settings].[ColumnChoiceOptions] 
   AFTER UPDATE
AS 
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;
	UPDATE [Settings].[ColumnChoiceOptions]  
	SET [Settings].[ColumnChoiceOptions] .UpdatedAt = CONVERT (DATETIMEOFFSET, sysutcdatetime())    
	FROM [Settings].[ColumnChoiceOptions]  INNER JOIN inserted 
	ON [Settings].[ColumnChoiceOptions] .ColumnChoiceOptionsID = inserted.ColumnChoiceOptionsID
	-- Insert statements for trigger here

END