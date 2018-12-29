CREATE TABLE [Core].[MeasurementTypeCategory] (
    [MeasurementTypeCategoryID] INT                IDENTITY (1, 1) NOT NULL,
    [Code]                      VARCHAR (50)       NOT NULL,
    [Name]                      VARCHAR (255)      NOT NULL,
    [Active]                    SMALLINT           CONSTRAINT [DF_MeasurementTypeCategory_Active] DEFAULT ((1)) NOT NULL,
    [ID]                        VARCHAR (38)       CONSTRAINT [DF_Metric_ID] DEFAULT (newid()) NOT NULL,
    [CreatedAt]                 DATETIMEOFFSET (7) CONSTRAINT [DF_MeasurementTypeCategory_CreatedAt] DEFAULT (CONVERT([datetimeoffset],sysutcdatetime())) NOT NULL,
    [UpdatedAt]                 DATETIME           CONSTRAINT [DF_MeasurementTypeCategory_UpdatedAt] DEFAULT (getdate()) NOT NULL,
    [Deleted]                   BIT                CONSTRAINT [DF_MeasurementTypeCategory_Deleted] DEFAULT ((0)) NOT NULL,
    [Version]                   ROWVERSION         NOT NULL,
    CONSTRAINT [PK_MeasurementTypeCategoryCategory] PRIMARY KEY CLUSTERED ([MeasurementTypeCategoryID] ASC),
    CONSTRAINT [FK_MeasurementTypeCategory_Active] FOREIGN KEY ([Active]) REFERENCES [Core].[Active] ([ActiveID])
);










GO

-- =============================================
-- Author:		Mark Stacey
-- Create date: 2018-01-04
-- Description:	Populating UpdatedAt
-- =============================================
CREATE TRIGGER [Core].trg_MeasurementTypeCategory_Update
   ON  [Core].[MeasurementTypeCategory] 
   AFTER UPDATE
AS 
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;
	UPDATE [Core].[MeasurementTypeCategory]  
	SET [Core].[MeasurementTypeCategory] .UpdatedAt = CONVERT (DATETIMEOFFSET, sysutcdatetime())    
	FROM [Core].[MeasurementTypeCategory]  INNER JOIN inserted 
	ON [Core].[MeasurementTypeCategory] .MeasurementTypeCategoryID = inserted.MeasurementTypeCategoryID
	-- Insert statements for trigger here

END