CREATE TABLE [UserSettings].[StatsChoice] (
    [StatsChoiceID] INT                IDENTITY (1, 1) NOT NULL,
    [UserID]        INT                CONSTRAINT [DF_StatsChoice_UserID] DEFAULT ((1)) NOT NULL,
    [StatTypeID]    INT                NOT NULL,
    [Active]        SMALLINT           CONSTRAINT [DF_StatsChoice_Active] DEFAULT ((1)) NOT NULL,
    [ID]            VARCHAR (38)       CONSTRAINT [DF__StatsChoice__ID__32D66FBE] DEFAULT (newid()) NOT NULL,
    [CreatedAt]     DATETIMEOFFSET (7) CONSTRAINT [DF__StatsChoice__Creat__33CA93F7] DEFAULT (CONVERT([datetimeoffset],sysutcdatetime())) NOT NULL,
    [UpdatedAt]     DATETIMEOFFSET (7) NULL,
    [Deleted]       BIT                CONSTRAINT [DF__StatsChoice__Delet__34BEB830] DEFAULT ((0)) NOT NULL,
    [Version]       ROWVERSION         NOT NULL,
    CONSTRAINT [PK_StatsChoice] PRIMARY KEY NONCLUSTERED ([StatsChoiceID] ASC),
    CONSTRAINT [FK_StatsChoice_StatType] FOREIGN KEY ([StatTypeID]) REFERENCES [Core].[StatType] ([StatTypeID]),
    CONSTRAINT [FK_StatsChoice_User] FOREIGN KEY ([UserID]) REFERENCES [Security].[User] ([UserID])
);


GO
CREATE NONCLUSTERED INDEX [IX_Active_StatsChoice]
    ON [UserSettings].[StatsChoice]([Active] ASC);


GO
CREATE UNIQUE CLUSTERED INDEX [IX_StatsChoice]
    ON [UserSettings].[StatsChoice]([UserID] ASC, [StatTypeID] ASC);

