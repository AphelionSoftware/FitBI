CREATE TABLE [UserSettings].[GeneralSettings] (
    [GeneralSettingsID] INT                IDENTITY (1, 1) NOT NULL,
    [UserID]            INT                CONSTRAINT [DF_GeneralSettings_UserID] DEFAULT ((1)) NOT NULL,
    [UnitTypeID]        INT                NULL,
    [Active]            SMALLINT           CONSTRAINT [DF_GeneralSettings_Active] DEFAULT ((1)) NOT NULL,
    [Code]              VARCHAR (50)       NOT NULL,
    [Name]              VARCHAR (255)      NOT NULL,
    [BooleanValue]      BIGINT             NULL,
    [IntegerValue]      INT                NULL,
    [FloatingValue]     FLOAT (53)         NULL,
    [DecimalValue]      DECIMAL (22, 6)    NULL,
    [ID]                VARCHAR (38)       CONSTRAINT [DF__GeneralSetti__ID__32D66FBE] DEFAULT (newid()) NOT NULL,
    [CreatedAt]         DATETIMEOFFSET (7) CONSTRAINT [DF__GeneralSe__Creat__33CA93F7] DEFAULT (CONVERT([datetimeoffset],sysutcdatetime())) NOT NULL,
    [UpdatedAt]         DATETIME           CONSTRAINT [DF_GeneralSettings_UpdatedAt] DEFAULT (getdate()) NOT NULL,
    [Deleted]           BIT                CONSTRAINT [DF__GeneralSe__Delet__34BEB830] DEFAULT ((0)) NOT NULL,
    [Version]           ROWVERSION         NOT NULL,
    CONSTRAINT [PK_GeneralSettings] PRIMARY KEY CLUSTERED ([GeneralSettingsID] ASC),
    CONSTRAINT [FK_GeneralSettings_UnitType] FOREIGN KEY ([UnitTypeID]) REFERENCES [Core].[UnitType] ([UnitTypeID]),
    CONSTRAINT [FK_GeneralSettings_User] FOREIGN KEY ([UserID]) REFERENCES [Security].[User] ([UserID]),
    CONSTRAINT [IX_Active_GeneralSettings] UNIQUE NONCLUSTERED ([Active] ASC)
);





