CREATE TYPE [Stats].[tvp_SkinfoldMeasurement] AS TABLE (
    [Active]                SMALLINT           NULL,
    [BodyPartID]            INT                NULL,
    [CreatedAt]             DATETIMEOFFSET (7) NULL,
    [Deleted]               BIT                NULL,
    [ID]                    VARCHAR (38)       NULL,
    [PersonID]              INT                NULL,
    [SideMeasurementTypeID] INT                NULL,
    [SkinfoldMeasurementID] INT                NULL,
    [SkinfoldThickness]     DECIMAL (10, 6)    NULL,
    [UpdatedAt]             DATETIMEOFFSET (7) NULL,
    [Version]               VARCHAR (255)      NULL);



