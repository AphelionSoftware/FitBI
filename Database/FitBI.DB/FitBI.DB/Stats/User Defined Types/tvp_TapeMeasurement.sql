CREATE TYPE [Stats].[tvp_TapeMeasurement] AS TABLE (
    [Active]                SMALLINT           NULL,
    [BodyPartID]            INT                NULL,
    [CreatedAt]             DATETIMEOFFSET (7) NULL,
    [Deleted]               BIT                NULL,
    [ID]                    VARCHAR (38)       NULL,
    [MeasurementDate]       DATETIME           NULL,
    [PersonID]              INT                NULL,
    [SideMeasurementTypeID] INT                NULL,
    [TapeLength]            DECIMAL (10, 6)    NULL,
    [TapeMeasurementID]     INT                NULL,
    [UpdatedAt]             DATETIMEOFFSET (7) NULL,
    [Version]               VARCHAR (255)      NULL);

