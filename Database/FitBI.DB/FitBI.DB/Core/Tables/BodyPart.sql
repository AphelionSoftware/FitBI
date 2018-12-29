CREATE TABLE [Core].[BodyPart] (
    [BodyPartID]       INT                IDENTITY (1, 1) NOT NULL,
    [BodyPartTypeID]   INT                NOT NULL,
    [Code]             VARCHAR (50)       NOT NULL,
    [Name]             VARCHAR (255)      NOT NULL,
    [Description]      VARCHAR (MAX)      NULL,
    [ParentBodyPartID] INT                NULL,
    [Active]           SMALLINT           CONSTRAINT [DF_BodyPart_Active] DEFAULT ((1)) NOT NULL,
    [ID]               VARCHAR (38)       CONSTRAINT [DF_BodyPart_ID] DEFAULT (newid()) NOT NULL,
    [CreatedAt]        DATETIMEOFFSET (7) CONSTRAINT [DF_BodyPart_CreatedAt] DEFAULT (CONVERT([datetimeoffset],sysutcdatetime())) NOT NULL,
    [UpdatedAt]        DATETIME           CONSTRAINT [DF_BodyPart_UpdatedAt] DEFAULT (getdate()) NOT NULL,
    [Deleted]          BIT                CONSTRAINT [DF_BodyPart_Deleted] DEFAULT ((0)) NOT NULL,
    [Version]          ROWVERSION         NOT NULL,
    CONSTRAINT [PK_BodyPart] PRIMARY KEY CLUSTERED ([BodyPartID] ASC),
    CONSTRAINT [FK_BodyPart_Active] FOREIGN KEY ([Active]) REFERENCES [Core].[Active] ([ActiveID]),
    CONSTRAINT [FK_BodyPart_BodyPart] FOREIGN KEY ([BodyPartID]) REFERENCES [Core].[BodyPart] ([BodyPartID]),
    CONSTRAINT [FK_BodyPart_BodyPart1] FOREIGN KEY ([ParentBodyPartID]) REFERENCES [Core].[BodyPart] ([BodyPartID]),
    CONSTRAINT [FK_BodyPart_BodyPartType] FOREIGN KEY ([BodyPartTypeID]) REFERENCES [Core].[BodyPartType] ([BodyPartTypeID])
);












GO

-- =============================================
-- Author:		Mark Stacey
-- Create date: 2018-01-04
-- Description:	Populating UpdatedAt
-- =============================================
CREATE TRIGGER [Core].trg_BodyPart_Update
   ON  [Core].[BodyPart] 
   AFTER UPDATE
AS 
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;
	UPDATE [Core].[BodyPart]  
	SET [Core].[BodyPart] .UpdatedAt = CONVERT (DATETIMEOFFSET, sysutcdatetime())    
	FROM [Core].[BodyPart]  INNER JOIN inserted 
	ON [Core].[BodyPart] .BodyPartID = inserted.BodyPartID
	-- Insert statements for trigger here

END