CREATE TYPE [UserSettings].[tvp_StatsChoice] AS TABLE (
    [Active]        SMALLINT           NULL,
    [CreatedAt]     DATETIMEOFFSET (7) NULL,
    [Deleted]       BIT                NULL,
    [ID]            VARCHAR (38)       NULL,
    [StatsChoiceID] INT                NULL,
    [StatTypeID]    INT                NULL,
    [UpdatedAt]     DATETIMEOFFSET (7) NULL,
    [UserID]        INT                NULL,
    [Version]       VARCHAR (255)      NULL);

