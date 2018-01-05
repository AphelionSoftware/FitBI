CREATE TABLE [Stats].[SkinfoldMeasurement] (
    [SkinfoldMeasurementID] INT                IDENTITY (1, 1) NOT NULL,
    [PersonID]              INT                NOT NULL,
    [SkinfoldThickness]     DECIMAL (10, 6)    NULL,
    [SideMeasurementTypeID] INT                NULL,
    [BodyPartID]            INT                NULL,
    [Active]                SMALLINT           CONSTRAINT [DF_SkinfoldMeasurement_Active] DEFAULT ((1)) NOT NULL,
    [ID]                    VARCHAR (38)       NOT NULL,
    [CreatedAt]             DATETIMEOFFSET (7) CONSTRAINT [DF_SkinfoldMeasurement_CreatedAt] DEFAULT (CONVERT([datetimeoffset],sysutcdatetime())) NOT NULL,
    [UpdatedAt]             DATETIMEOFFSET (7) NULL,
    [Deleted]               BIT                CONSTRAINT [DF_SkinfoldMeasurement_Deleted] DEFAULT ((0)) NOT NULL,
    [Version]               ROWVERSION         NOT NULL,
    CONSTRAINT [PK_SkinfoldMeasurement] PRIMARY KEY CLUSTERED ([SkinfoldMeasurementID] ASC),
    CONSTRAINT [FK_SkinfoldMeasurement_BodyPart] FOREIGN KEY ([BodyPartID]) REFERENCES [Core].[BodyPart] ([BodyPartID]),
    CONSTRAINT [FK_SkinfoldMeasurement_MeasurementType] FOREIGN KEY ([SideMeasurementTypeID]) REFERENCES [Core].[MeasurementType] ([MeasurementTypeID])
);



