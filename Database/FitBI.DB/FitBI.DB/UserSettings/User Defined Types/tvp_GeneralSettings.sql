CREATE TYPE [UserSettings].[tvp_GeneralSettings] AS TABLE (
    [Active]            SMALLINT           NULL,
    [Code]              VARCHAR (50)       NULL,
    [CreatedAt]         DATETIMEOFFSET (7) NULL,
    [Deleted]           BIT                NULL,
    [GeneralSettingsID] INT                NULL,
    [ID]                VARCHAR (38)       NULL,
    [Name]              VARCHAR (255)      NULL,
    [UnitTypeID]        INT                NULL,
    [UpdatedAt]         DATETIMEOFFSET (7) NULL,
    [UserID]            INT                NULL,
    [Version]           VARCHAR (255)      NULL);

