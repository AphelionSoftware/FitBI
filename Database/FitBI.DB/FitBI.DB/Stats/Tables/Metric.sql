CREATE TABLE [Stats].[Metric] (
    [MetricID]                 INT                IDENTITY (1, 1) NOT NULL,
    [PersonID]                 INT                NOT NULL,
    [Weight]                   DECIMAL (10, 6)    NULL,
    [BodyFatPercentage]        DECIMAL (10, 6)    NULL,
    [MusclePercentage]         DECIMAL (10, 6)    NULL,
    [WaterPercentage]          DECIMAL (10, 6)    NULL,
    [BonePercentage]           DECIMAL (10, 6)    NULL,
    [PercentMeasurementTypeID] INT                NULL,
    [Active]                   SMALLINT           CONSTRAINT [DF_Metric_Active] DEFAULT ((1)) NOT NULL,
    [ID]                       VARCHAR (38)       NOT NULL,
    [CreatedAt]                DATETIMEOFFSET (7) CONSTRAINT [DF_Metric_CreatedAt] DEFAULT (CONVERT([datetimeoffset],sysutcdatetime())) NOT NULL,
    [UpdatedAt]                DATETIMEOFFSET (7) NULL,
    [Deleted]                  BIT                CONSTRAINT [DF_Metric_Deleted] DEFAULT ((0)) NOT NULL,
    [Version]                  ROWVERSION         NOT NULL,
    CONSTRAINT [PK_Metric] PRIMARY KEY CLUSTERED ([MetricID] ASC),
    CONSTRAINT [FK_Metric_Active] FOREIGN KEY ([Active]) REFERENCES [Core].[Active] ([ActiveID]),
    CONSTRAINT [FK_Metric_Person] FOREIGN KEY ([PersonID]) REFERENCES [Stats].[Person] ([PersonID])
);





