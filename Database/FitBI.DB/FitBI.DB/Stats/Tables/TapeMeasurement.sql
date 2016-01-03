CREATE TABLE [Stats].[TapeMeasurement] (
    [TapeMeasurementID]     INT             IDENTITY (1, 1) NOT NULL,
    [PersonID]              INT             NOT NULL,
    [TapeLength]            DECIMAL (10, 6) NULL,
    [SideMeasurementTypeID] INT             NULL,
    [BodyPartID]            INT             NULL,
    [Active]                SMALLINT        CONSTRAINT [DF__TapeMeasurement__Active__22AA2996] DEFAULT ((1)) NOT NULL,
    [sysCreatedOn]          DATETIME        CONSTRAINT [DF__TapeMeasurement__sysCreat__239E4DCF] DEFAULT (getdate()) NOT NULL,
    [sysCreatedBy]          VARCHAR (50)    CONSTRAINT [DF__TapeMeasurement__sysCreat__24927208] DEFAULT (user_name()) NOT NULL,
    [sysModifiedOn]         DATETIME        CONSTRAINT [DF__TapeMeasurement__sysModif__25869641] DEFAULT (getdate()) NOT NULL,
    [sysModifiedBy]         VARCHAR (50)    CONSTRAINT [DF__TapeMeasurement__sysModif__267ABA7A] DEFAULT (user_name()) NOT NULL,
    [sysTimestamp]          ROWVERSION      NOT NULL,
    CONSTRAINT [PK_TapeMeasurement] PRIMARY KEY CLUSTERED ([TapeMeasurementID] ASC),
    CONSTRAINT [Active] FOREIGN KEY ([Active]) REFERENCES [Core].[Active] ([Active]),
    CONSTRAINT [FK_TapeMeasurement_BodyPart] FOREIGN KEY ([BodyPartID]) REFERENCES [Core].[BodyPart] ([BodyPartID]),
    CONSTRAINT [FK_TapeMeasurement_MeasurementType] FOREIGN KEY ([SideMeasurementTypeID]) REFERENCES [Core].[MeasurementType] ([MeasurementTypeID])
);



