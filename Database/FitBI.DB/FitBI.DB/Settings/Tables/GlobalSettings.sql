CREATE TABLE [Settings].[GlobalSettings] (
    [GlobalSettingsID] INT                IDENTITY (1, 1) NOT NULL,
    [Active]           SMALLINT           CONSTRAINT [DF_GlobalSettings_Active] DEFAULT ((1)) NOT NULL,
    [Code]             VARCHAR (50)       NOT NULL,
    [Name]             VARCHAR (255)      NOT NULL,
    [ID]               VARCHAR (38)       CONSTRAINT [DF__GlobalSetti__ID__32D66FBE] DEFAULT (newid()) NOT NULL,
    [Unit]             VARCHAR (50)       NULL,
    [intValue]         INT                NULL,
    [floatValue]       FLOAT (53)         NULL,
    [CreatedAt]        DATETIMEOFFSET (7) CONSTRAINT [DF__GlobalSe__Creat__33CA93F7] DEFAULT (CONVERT([datetimeoffset],sysutcdatetime())) NOT NULL,
    [UpdatedAt]        DATETIME           CONSTRAINT [DF_GlobalSettings_UpdatedAt] DEFAULT (getdate()) NOT NULL,
    [Deleted]          BIT                CONSTRAINT [DF__GlobalSe__Delet__34BEB830] DEFAULT ((0)) NOT NULL,
    [Version]          ROWVERSION         NOT NULL,
    CONSTRAINT [PK_GlobalSettings] PRIMARY KEY CLUSTERED ([GlobalSettingsID] ASC)
);




GO
CREATE UNIQUE NONCLUSTERED INDEX [IX_GlobalSettings]
    ON [Settings].[GlobalSettings]([Code] ASC);

