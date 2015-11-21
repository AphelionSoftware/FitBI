CREATE TABLE [Core].[MeasurementType] (
    [MeasurementTypeID]         INT           IDENTITY (1, 1) NOT NULL,
    [MeasurementTypeCategoryID] INT           NOT NULL,
    [Code]                      VARCHAR (50)  NOT NULL,
    [Name]                      VARCHAR (255) NOT NULL,
    [Description]               VARCHAR (MAX) NULL,
    [Active]                    SMALLINT      CONSTRAINT [DF__MeasurementType__Active__22AA2996] DEFAULT ((1)) NOT NULL,
    [sysCreatedOn]              DATETIME      CONSTRAINT [DF__MeasurementType__sysCreat__239E4DCF] DEFAULT (getdate()) NOT NULL,
    [sysCreatedBy]              VARCHAR (50)  CONSTRAINT [DF__MeasurementType__sysCreat__24927208] DEFAULT (user_name()) NOT NULL,
    [sysModifiedOn]             DATETIME      CONSTRAINT [DF__MeasurementType__sysModif__25869641] DEFAULT (getdate()) NOT NULL,
    [sysModifiedBy]             VARCHAR (50)  CONSTRAINT [DF__MeasurementType__sysModif__267ABA7A] DEFAULT (user_name()) NOT NULL,
    [sysTimestamp]              ROWVERSION    NOT NULL,
    CONSTRAINT [PK_MeasurementType] PRIMARY KEY CLUSTERED ([MeasurementTypeID] ASC),
    CONSTRAINT [FK_MeasurementType_Active] FOREIGN KEY ([Active]) REFERENCES [Core].[Active] ([Active]),
    CONSTRAINT [FK_MeasurementType_MeasurementType] FOREIGN KEY ([MeasurementTypeID]) REFERENCES [Core].[MeasurementType] ([MeasurementTypeID]),
    CONSTRAINT [FK_MeasurementType_MeasurementTypeCategory] FOREIGN KEY ([MeasurementTypeCategoryID]) REFERENCES [Core].[MeasurementTypeCategory] ([MeasurementTypeCategoryID])
);

