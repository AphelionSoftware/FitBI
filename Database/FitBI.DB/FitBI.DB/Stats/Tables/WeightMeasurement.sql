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
    [Active]                   SMALLINT           CONSTRAINT [DF_WeightMeasurement_Active] DEFAULT ((1)) NOT NULL,
    [ID]                       VARCHAR (38)       NOT NULL,
    [CreatedAt]                DATETIMEOFFSET (7) CONSTRAINT [DF_WeightMeasurement_CreatedAt] DEFAULT (CONVERT([datetimeoffset],sysutcdatetime())) NOT NULL,
    [UpdatedAt]                DATETIMEOFFSET (7) NULL,
    [Deleted]                  BIT                CONSTRAINT [DF_WeightMeasurement_Deleted] DEFAULT ((0)) NOT NULL,
    [Version]                  ROWVERSION         NOT NULL,
    CONSTRAINT [PK_WeightMeasurement] PRIMARY KEY CLUSTERED ([WeightMeasurementID] ASC),
    CONSTRAINT [FK_WeightMeasurement_Active] FOREIGN KEY ([Active]) REFERENCES [Core].[Active] ([ActiveID]),
    CONSTRAINT [FK_WeightMeasurement_MeasurementType] FOREIGN KEY ([PercentMeasurementTypeID]) REFERENCES [Core].[MeasurementType] ([MeasurementTypeID]),
    CONSTRAINT [FK_WeightMeasurement_WeightMeasurement] FOREIGN KEY ([WeightMeasurementID]) REFERENCES [Stats].[WeightMeasurement] ([WeightMeasurementID])
);





