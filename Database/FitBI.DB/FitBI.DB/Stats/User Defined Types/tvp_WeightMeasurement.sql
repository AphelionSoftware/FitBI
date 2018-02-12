CREATE TYPE [Stats].[tvp_WeightMeasurement] AS TABLE (
    [Active]                   SMALLINT           NULL,
    [BodyFatPercentage]        DECIMAL (10, 6)    NULL,
    [BonePercentage]           DECIMAL (10, 6)    NULL,
    [CreatedAt]                DATETIMEOFFSET (7) NULL,
    [Deleted]                  BIT                NULL,
    [ID]                       VARCHAR (38)       NULL,
    [MeasurementDate]          DATETIME           NULL,
    [MusclePercentage]         DECIMAL (10, 6)    NULL,
    [PercentMeasurementTypeID] INT                NULL,
    [PersonID]                 INT                NULL,
    [UnitID]                   INT                NULL,
    [UpdatedAt]                DATETIMEOFFSET (7) NULL,
    [Version]                  VARCHAR (255)      NULL,
    [WaterPercentage]          DECIMAL (10, 6)    NULL,
    [Weight]                   DECIMAL (10, 6)    NULL,
    [WeightMeasurementID]      INT                NULL);





