﻿CREATE TABLE [Stats].[DailyMeasurement] (
    [DailyMeasurementID]       INT                IDENTITY (1, 1) NOT NULL,
    [PersonID]                 INT                NOT NULL,
    [Weight]                   DECIMAL (10, 6)    NULL,
    [BellyButtonCircumference] DECIMAL (10, 6)    NULL,
    [NeckCircumference]        DECIMAL (10, 6)    NULL,
    [WaistCircumference]       DECIMAL (10, 6)    NULL,
    [HipCircumference]         DECIMAL (10, 6)    NULL,
    [ChestCircumference]       DECIMAL (10, 6)    NULL,
    [BicepCircumference]       DECIMAL (10, 6)    NULL,
    [QuadCircumference]        DECIMAL (10, 6)    NULL,
    [CalvesCircumference]      DECIMAL (10, 6)    NULL,
    [BodyFatPercentage]        DECIMAL (10, 6)    NULL,
    [MusclePercentage]         DECIMAL (10, 6)    NULL,
    [WaterPercentage]          DECIMAL (10, 6)    NULL,
    [BonePercentage]           DECIMAL (10, 6)    NULL,
    [PercentMeasurementTypeID] INT                NULL,
    [UnitID]                   INT                NULL,
    [MeasurementDate]          DATETIME           CONSTRAINT [DF_DailyMeasurement_MeasurementDate] DEFAULT (getdate()) NOT NULL,
    [MeasurementDateID]        AS                 (CONVERT([int],CONVERT([varchar](10),[MeasurementDate],(112)))) PERSISTED,
    [Active]                   SMALLINT           CONSTRAINT [DF_DailyMeasurement_Active] DEFAULT ((1)) NOT NULL,
    [ID]                       VARCHAR (38)       CONSTRAINT [DF_DailyMeasurement_ID] DEFAULT (newid()) NOT NULL,
    [CreatedAt]                DATETIMEOFFSET (7) CONSTRAINT [DF_DailyMeasurement_CreatedAt] DEFAULT (CONVERT([datetimeoffset],sysutcdatetime())) NOT NULL,
    [UpdatedAt]                DATETIME           CONSTRAINT [DF_DailyMeasurement_UpdatedAt] DEFAULT (getdate()) NOT NULL,
    [Deleted]                  BIT                CONSTRAINT [DF_DailyMeasurement_Deleted] DEFAULT ((0)) NOT NULL,
    [Version]                  ROWVERSION         NOT NULL,
    CONSTRAINT [PK_DailyMeasurement] PRIMARY KEY CLUSTERED ([DailyMeasurementID] ASC),
    CONSTRAINT [FK_DailyMeasurement_Active] FOREIGN KEY ([Active]) REFERENCES [Core].[Active] ([ActiveID]),
    CONSTRAINT [FK_DailyMeasurement_DailyMeasurement] FOREIGN KEY ([DailyMeasurementID]) REFERENCES [Stats].[DailyMeasurement] ([DailyMeasurementID]),
    CONSTRAINT [FK_DailyMeasurement_MeasurementType] FOREIGN KEY ([PercentMeasurementTypeID]) REFERENCES [Core].[MeasurementType] ([MeasurementTypeID])
);



