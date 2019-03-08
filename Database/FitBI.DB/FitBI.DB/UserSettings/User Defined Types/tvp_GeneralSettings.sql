CREATE TYPE [UserSettings].[tvp_GeneralSettings] AS TABLE (
    [Active]            SMALLINT           NULL,
    [BooleanValue]      BIGINT             NULL,
    [Code]              VARCHAR (50)       NULL,
    [CreatedAt]         DATETIMEOFFSET (7) NULL,
    [DecimalValue]      DECIMAL (22, 6)    NULL,
    [Deleted]           BIT                NULL,
    [FloatingValue]     FLOAT (53)         NULL,
    [GeneralSettingsID] INT                NULL,
    [ID]                VARCHAR (38)       NULL,
    [IntegerValue]      INT                NULL,
    [Name]              VARCHAR (255)      NULL,
    [UnitTypeID]        INT                NULL,
    [UpdatedAt]         DATETIME           NULL,
    [UserID]            INT                NULL,
    [Version]           VARCHAR (255)      NULL);



