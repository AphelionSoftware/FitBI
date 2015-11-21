CREATE TABLE [Stats].[Metric] (
    [MetricID]                 INT             IDENTITY (1, 1) NOT NULL,
    [PersonID]                 INT             NOT NULL,
    [Weight]                   DECIMAL (10, 6) NULL,
    [BodyFatPercentage]        DECIMAL (10, 6) NULL,
    [MusclePercentage]         DECIMAL (10, 6) NULL,
    [WaterPercentage]          DECIMAL (10, 6) NULL,
    [BonePercentage]           DECIMAL (10, 6) NULL,
    [PercentMeasurementTypeID] INT             NULL,
    [Active]                   SMALLINT        CONSTRAINT [DF__Metric__Active__22AA2996] DEFAULT ((1)) NOT NULL,
    [sysCreatedOn]             DATETIME        CONSTRAINT [DF__Metric__sysCreat__239E4DCF] DEFAULT (getdate()) NOT NULL,
    [sysCreatedBy]             VARCHAR (50)    CONSTRAINT [DF__Metric__sysCreat__24927208] DEFAULT (user_name()) NOT NULL,
    [sysModifiedOn]            DATETIME        CONSTRAINT [DF__Metric__sysModif__25869641] DEFAULT (getdate()) NOT NULL,
    [sysModifiedBy]            VARCHAR (50)    CONSTRAINT [DF__Metric__sysModif__267ABA7A] DEFAULT (user_name()) NOT NULL,
    [sysTimestamp]             ROWVERSION      NOT NULL,
    CONSTRAINT [PK_Metric] PRIMARY KEY CLUSTERED ([MetricID] ASC),
    CONSTRAINT [FK_Metric_Active] FOREIGN KEY ([Active]) REFERENCES [Core].[Active] ([Active])
);

