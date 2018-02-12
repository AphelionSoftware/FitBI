CREATE TABLE [Stats].[SkinfoldMeasurement] (
    [SkinfoldMeasurementID] INT                IDENTITY (1, 1) NOT NULL,
    [PersonID]              INT                NOT NULL,
    [SkinfoldThickness]     DECIMAL (10, 6)    NULL,
    [SideMeasurementTypeID] INT                NULL,
    [BodyPartID]            INT                NULL,
    [MeasurementDate]       DATETIME           CONSTRAINT [DF_SkinfoldMeasurement_MeasurementDate] DEFAULT (getdate()) NOT NULL,
    [Active]                SMALLINT           CONSTRAINT [DF_SkinfoldMeasurement_Active] DEFAULT ((1)) NOT NULL,
    [ID]                    VARCHAR (38)       CONSTRAINT [DF_SkinfoldMeasurement_ID] DEFAULT (newid()) NOT NULL,
    [CreatedAt]             DATETIMEOFFSET (7) CONSTRAINT [DF_SkinfoldMeasurement_CreatedAt] DEFAULT (CONVERT([datetimeoffset],sysutcdatetime())) NOT NULL,
    [UpdatedAt]             DATETIMEOFFSET (7) NULL,
    [Deleted]               BIT                CONSTRAINT [DF_SkinfoldMeasurement_Deleted] DEFAULT ((0)) NOT NULL,
    [Version]               ROWVERSION         NOT NULL,
    CONSTRAINT [PK_SkinfoldMeasurement] PRIMARY KEY CLUSTERED ([SkinfoldMeasurementID] ASC)
);










GO

-- =============================================
-- Author:		Mark Stacey
-- Create date: 2018-01-04
-- Description:	Populating UpdatedAt
-- =============================================
CREATE TRIGGER [Stats].trg_SkinfoldMeasurement_Update
   ON  [Stats].[SkinfoldMeasurement] 
   AFTER UPDATE
AS 
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;
	UPDATE [Stats].[SkinfoldMeasurement]  
	SET [Stats].[SkinfoldMeasurement] .UpdatedAt = CONVERT (DATETIMEOFFSET, sysutcdatetime())    
	FROM [Stats].[SkinfoldMeasurement]  INNER JOIN inserted 
	ON [Stats].[SkinfoldMeasurement] .SkinfoldMeasurementID = inserted.SkinfoldMeasurementID
	-- Insert statements for trigger here

END