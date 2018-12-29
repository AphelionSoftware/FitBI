CREATE TABLE [Core].[MeasurementType] (
    [MeasurementTypeID]         INT                IDENTITY (1, 1) NOT NULL,
    [MeasurementTypeCategoryID] INT                NOT NULL,
    [Code]                      VARCHAR (50)       NOT NULL,
    [Name]                      VARCHAR (255)      NOT NULL,
    [Description]               VARCHAR (MAX)      NULL,
    [Active]                    SMALLINT           CONSTRAINT [DF_MeasurementType_Active] DEFAULT ((1)) NOT NULL,
    [ID]                        VARCHAR (38)       CONSTRAINT [DF_MeasurementType_ID] DEFAULT (newid()) NOT NULL,
    [CreatedAt]                 DATETIMEOFFSET (7) CONSTRAINT [DF_MeasurementType_CreatedAt] DEFAULT (CONVERT([datetimeoffset],sysutcdatetime())) NOT NULL,
    [UpdatedAt]                 DATETIME           CONSTRAINT [DF_MeasurementType_UpdatedAt] DEFAULT (getdate()) NOT NULL,
    [Deleted]                   BIT                CONSTRAINT [DF_MeasurementType_Deleted] DEFAULT ((0)) NOT NULL,
    [Version]                   ROWVERSION         NOT NULL,
    CONSTRAINT [PK_MeasurementType] PRIMARY KEY CLUSTERED ([MeasurementTypeID] ASC),
    CONSTRAINT [FK_MeasurementType_Active] FOREIGN KEY ([Active]) REFERENCES [Core].[Active] ([ActiveID]),
    CONSTRAINT [FK_MeasurementType_MeasurementType] FOREIGN KEY ([MeasurementTypeID]) REFERENCES [Core].[MeasurementType] ([MeasurementTypeID]),
    CONSTRAINT [FK_MeasurementType_MeasurementTypeCategory] FOREIGN KEY ([MeasurementTypeCategoryID]) REFERENCES [Core].[MeasurementTypeCategory] ([MeasurementTypeCategoryID])
);












GO

-- =============================================
-- Author:		Mark Stacey
-- Create date: 2018-01-04
-- Description:	Populating UpdatedAt
-- =============================================
CREATE TRIGGER [Core].trg_MeasurementType_Update
   ON  [Core].[MeasurementType] 
   AFTER UPDATE
AS 
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;
	UPDATE [Core].[MeasurementType]  
	SET [Core].[MeasurementType] .UpdatedAt = CONVERT (DATETIMEOFFSET, sysutcdatetime())    
	FROM [Core].[MeasurementType]  INNER JOIN inserted 
	ON [Core].[MeasurementType] .MeasurementTypeID = inserted.MeasurementTypeID
	-- Insert statements for trigger here

END