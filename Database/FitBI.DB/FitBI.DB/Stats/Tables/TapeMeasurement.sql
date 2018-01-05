CREATE TABLE [Stats].[TapeMeasurement] (
    [TapeMeasurementID]     INT                IDENTITY (1, 1) NOT NULL,
    [PersonID]              INT                NOT NULL,
    [TapeLength]            DECIMAL (10, 6)    NULL,
    [SideMeasurementTypeID] INT                NULL,
    [BodyPartID]            INT                NULL,
    [Active]                SMALLINT           CONSTRAINT [DF_TapeMeasurement_Active] DEFAULT ((1)) NOT NULL,
    [ID]                    VARCHAR (38)       NOT NULL,
    [CreatedAt]             DATETIMEOFFSET (7) CONSTRAINT [DF_TapeMeasurement_CreatedAt] DEFAULT (CONVERT([datetimeoffset],sysutcdatetime())) NOT NULL,
    [UpdatedAt]             DATETIMEOFFSET (7) NULL,
    [Deleted]               BIT                CONSTRAINT [DF_TapeMeasurement_Deleted] DEFAULT ((0)) NOT NULL,
    [Version]               ROWVERSION         NOT NULL,
    CONSTRAINT [PK_TapeMeasurement] PRIMARY KEY CLUSTERED ([TapeMeasurementID] ASC),
    CONSTRAINT [Active] FOREIGN KEY ([Active]) REFERENCES [Core].[Active] ([ActiveID]),
    CONSTRAINT [FK_TapeMeasurement_BodyPart] FOREIGN KEY ([BodyPartID]) REFERENCES [Core].[BodyPart] ([BodyPartID]),
    CONSTRAINT [FK_TapeMeasurement_MeasurementType] FOREIGN KEY ([SideMeasurementTypeID]) REFERENCES [Core].[MeasurementType] ([MeasurementTypeID])
);







