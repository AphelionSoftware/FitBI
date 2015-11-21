CREATE TABLE [Core].[MeasurementTypeCategory] (
    [MeasurementTypeCategoryID] INT           IDENTITY (1, 1) NOT NULL,
    [Code]                      VARCHAR (50)  NOT NULL,
    [Name]                      VARCHAR (255) NOT NULL,
    [Active]                    SMALLINT      CONSTRAINT [DF__MeasurementTypeCategory__Active__22AA2996] DEFAULT ((1)) NOT NULL,
    [sysCreatedOn]              DATETIME      CONSTRAINT [DF__MeasurementTypeCategory__sysCreat__239E4DCF] DEFAULT (getdate()) NOT NULL,
    [sysCreatedBy]              VARCHAR (50)  CONSTRAINT [DF__MeasurementTypeCategory__sysCreat__24927208] DEFAULT (user_name()) NOT NULL,
    [sysModifiedOn]             DATETIME      CONSTRAINT [DF__MeasurementTypeCategory__sysModif__25869641] DEFAULT (getdate()) NOT NULL,
    [sysModifiedBy]             VARCHAR (50)  CONSTRAINT [DF__MeasurementTypeCategory__sysModif__267ABA7A] DEFAULT (user_name()) NOT NULL,
    [sysTimestamp]              ROWVERSION    NOT NULL,
    CONSTRAINT [PK_MeasurementTypeCategoryCategory] PRIMARY KEY CLUSTERED ([MeasurementTypeCategoryID] ASC),
    CONSTRAINT [FK_MeasurementTypeCategory_Active] FOREIGN KEY ([Active]) REFERENCES [Core].[Active] ([Active])
);

