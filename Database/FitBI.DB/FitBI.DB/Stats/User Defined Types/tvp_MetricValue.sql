CREATE TYPE [Stats].[tvp_MetricValue] AS TABLE (
    [Active]         SMALLINT           NULL,
    [CreatedAt]      DATETIMEOFFSET (7) NULL,
    [Deleted]        BIT                NULL,
    [ID]             VARCHAR (38)       NULL,
    [MetricDetailID] INT                NULL,
    [MetricValueID]  INT                NULL,
    [PersonID]       INT                NULL,
    [UpdatedAt]      DATETIME           NULL,
    [Version]        VARCHAR (255)      NULL);

