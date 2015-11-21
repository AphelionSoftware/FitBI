CREATE TABLE [Stats].[WeightMeasurement] (
    [WeightMeasurementID]      INT             IDENTITY (1, 1) NOT NULL,
    [PersonID]                 INT             NOT NULL,
    [Weight]                   DECIMAL (10, 6) NULL,
    [BodyFatPercentage]        DECIMAL (10, 6) NULL,
    [MusclePercentage]         DECIMAL (10, 6) NULL,
    [WaterPercentage]          DECIMAL (10, 6) NULL,
    [BonePercentage]           DECIMAL (10, 6) NULL,
    [PercentMeasurementTypeID] INT             NULL,
    [Active]                   SMALLINT        CONSTRAINT [DF__WeightMeasurement__Active__22AA2996] DEFAULT ((1)) NOT NULL,
    [sysCreatedOn]             DATETIME        CONSTRAINT [DF__WeightMeasurement__sysCreat__239E4DCF] DEFAULT (getdate()) NOT NULL,
    [sysCreatedBy]             VARCHAR (50)    CONSTRAINT [DF__WeightMeasurement__sysCreat__24927208] DEFAULT (user_name()) NOT NULL,
    [sysModifiedOn]            DATETIME        CONSTRAINT [DF__WeightMeasurement__sysModif__25869641] DEFAULT (getdate()) NOT NULL,
    [sysModifiedBy]            VARCHAR (50)    CONSTRAINT [DF__WeightMeasurement__sysModif__267ABA7A] DEFAULT (user_name()) NOT NULL,
    [sysTimestamp]             ROWVERSION      NOT NULL,
    CONSTRAINT [PK_WeightMeasurement] PRIMARY KEY CLUSTERED ([WeightMeasurementID] ASC),
    CONSTRAINT [FK_WeightMeasurement_Active] FOREIGN KEY ([Active]) REFERENCES [Core].[Active] ([Active]),
    CONSTRAINT [FK_WeightMeasurement_MeasurementType] FOREIGN KEY ([PercentMeasurementTypeID]) REFERENCES [Core].[MeasurementType] ([MeasurementTypeID]),
    CONSTRAINT [FK_WeightMeasurement_WeightMeasurement] FOREIGN KEY ([WeightMeasurementID]) REFERENCES [Stats].[WeightMeasurement] ([WeightMeasurementID])
);

