CREATE TABLE [Stats].[WeightMeasurement] (
    [WeightMeasurementID]      INT                IDENTITY (1, 1) NOT NULL,
    [PersonID]                 INT                NOT NULL,
    [Weight]                   DECIMAL (10, 6)    NULL,
    [BodyFatPercentage]        DECIMAL (10, 6)    NULL,
    [MusclePercentage]         DECIMAL (10, 6)    NULL,
    [WaterPercentage]          DECIMAL (10, 6)    NULL,
    [BonePercentage]           DECIMAL (10, 6)    NULL,
    [PercentMeasurementTypeID] INT                NULL,
    [UnitID]                   INT                NULL,
    [MeasurementDate]          DATETIME           CONSTRAINT [DF_WeightMeasurement_MeasurementDate] DEFAULT (getdate()) NOT NULL,
    [Active]                   SMALLINT           CONSTRAINT [DF_WeightMeasurement_Active] DEFAULT ((1)) NOT NULL,
    [ID]                       VARCHAR (38)       CONSTRAINT [DF_WeightMeasurement_ID] DEFAULT (newid()) NOT NULL,
    [CreatedAt]                DATETIMEOFFSET (7) CONSTRAINT [DF_WeightMeasurement_CreatedAt] DEFAULT (CONVERT([datetimeoffset],sysutcdatetime())) NOT NULL,
    [UpdatedAt]                DATETIMEOFFSET (7) NULL,
    [Deleted]                  BIT                CONSTRAINT [DF_WeightMeasurement_Deleted] DEFAULT ((0)) NOT NULL,
    [Version]                  ROWVERSION         NOT NULL,
    CONSTRAINT [PK_WeightMeasurement] PRIMARY KEY CLUSTERED ([WeightMeasurementID] ASC),
    CONSTRAINT [FK_WeightMeasurement_Active] FOREIGN KEY ([Active]) REFERENCES [Core].[Active] ([ActiveID]),
    CONSTRAINT [FK_WeightMeasurement_MeasurementType] FOREIGN KEY ([PercentMeasurementTypeID]) REFERENCES [Core].[MeasurementType] ([MeasurementTypeID]),
    CONSTRAINT [FK_WeightMeasurement_Person] FOREIGN KEY ([PersonID]) REFERENCES [Stats].[Person] ([PersonID]),
    CONSTRAINT [FK_WeightMeasurement_WeightMeasurement] FOREIGN KEY ([WeightMeasurementID]) REFERENCES [Stats].[WeightMeasurement] ([WeightMeasurementID])
);












GO

-- =============================================
-- Author:		Mark Stacey
-- Create date: 2018-01-04
-- Description:	Populating UpdatedAt
-- =============================================
CREATE TRIGGER [Stats].trg_WeightMeasurement_Update
   ON  [Stats].[WeightMeasurement] 
   AFTER UPDATE
AS 
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;
	UPDATE [Stats].[WeightMeasurement]  
	SET [Stats].[WeightMeasurement] .UpdatedAt = CONVERT (DATETIMEOFFSET, sysutcdatetime())    
	FROM [Stats].[WeightMeasurement]  INNER JOIN inserted 
	ON [Stats].[WeightMeasurement] .WeightMeasurementID = inserted.WeightMeasurementID
	-- Insert statements for trigger here

END