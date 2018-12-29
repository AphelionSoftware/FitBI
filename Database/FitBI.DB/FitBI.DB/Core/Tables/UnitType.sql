CREATE TABLE [Core].[UnitType] (
    [UnitTypeID] INT                IDENTITY (1, 1) NOT NULL,
    [Code]       VARCHAR (50)       NOT NULL,
    [Name]       VARCHAR (255)      NOT NULL,
    [Active]     SMALLINT           CONSTRAINT [DF_UnitType_Active] DEFAULT ((1)) NOT NULL,
    [ID]         VARCHAR (38)       CONSTRAINT [DF_UnitType_ID] DEFAULT (newid()) NOT NULL,
    [CreatedAt]  DATETIMEOFFSET (7) CONSTRAINT [DF_UnitType_CreatedAt] DEFAULT (CONVERT([datetimeoffset],sysutcdatetime())) NOT NULL,
    [UpdatedAt]  DATETIME           CONSTRAINT [DF_UnitType_UpdatedAt] DEFAULT (getdate()) NOT NULL,
    [Deleted]    BIT                CONSTRAINT [DF_UnitType_Deleted] DEFAULT ((0)) NOT NULL,
    [Version]    ROWVERSION         NOT NULL,
    CONSTRAINT [PK_UnitTypeCategory] PRIMARY KEY CLUSTERED ([UnitTypeID] ASC),
    CONSTRAINT [FK_UnitType_Active] FOREIGN KEY ([Active]) REFERENCES [Core].[Active] ([ActiveID])
);












GO

-- =============================================
-- Author:		Mark Stacey
-- Create date: 2018-01-04
-- Description:	Populating UpdatedAt
-- =============================================
CREATE TRIGGER [Core].trg_UnitType_Update
   ON  [Core].[UnitType] 
   AFTER UPDATE
AS 
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;
	UPDATE [Core].[UnitType]  
	SET [Core].[UnitType] .UpdatedAt = CONVERT (DATETIMEOFFSET, sysutcdatetime())    
	FROM [Core].[UnitType]  INNER JOIN inserted 
	ON [Core].[UnitType] .UnitTypeID = inserted.UnitTypeID
	-- Insert statements for trigger here

END