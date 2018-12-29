CREATE TABLE [Core].[StatType] (
    [StatTypeID]                INT                IDENTITY (1, 1) NOT NULL,
    [Code]                      VARCHAR (50)       NOT NULL,
    [Name]                      VARCHAR (255)      NOT NULL,
    [Description]               VARCHAR (MAX)      NULL,
    [TableName]                 VARCHAR (255)      NULL,
    [ColumnName]                VARCHAR (255)      NULL,
    [MeasurementTypeCategoryID] INT                NULL,
    [Active]                    SMALLINT           CONSTRAINT [DF_StatType_Active] DEFAULT ((1)) NOT NULL,
    [ID]                        VARCHAR (38)       CONSTRAINT [DF_StatType_ID] DEFAULT (newid()) NOT NULL,
    [CreatedAt]                 DATETIMEOFFSET (7) CONSTRAINT [DF_StatType_CreatedAt] DEFAULT (CONVERT([datetimeoffset],sysutcdatetime())) NOT NULL,
    [UpdatedAt]                 DATETIME           CONSTRAINT [DF_StatType_UpdatedAt] DEFAULT (getdate()) NOT NULL,
    [Deleted]                   BIT                CONSTRAINT [DF_StatType_Deleted] DEFAULT ((0)) NOT NULL,
    [Version]                   ROWVERSION         NOT NULL,
    CONSTRAINT [PK_StatType] PRIMARY KEY CLUSTERED ([StatTypeID] ASC),
    CONSTRAINT [FK_StatType_Active] FOREIGN KEY ([Active]) REFERENCES [Core].[Active] ([ActiveID]),
    CONSTRAINT [FK_StatType_MeasurementTypeCategory] FOREIGN KEY ([MeasurementTypeCategoryID]) REFERENCES [Core].[MeasurementTypeCategory] ([MeasurementTypeCategoryID])
);



