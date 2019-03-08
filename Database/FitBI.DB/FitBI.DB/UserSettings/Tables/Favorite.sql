CREATE TABLE [UserSettings].[Favorite] (
    [FavoriteID]  INT                NOT NULL,
    [MetricSetID] INT                NULL,
    [isFavorite]  BIT                DEFAULT ((1)) NOT NULL,
    [Active]      SMALLINT           CONSTRAINT [DF_Favorite_Active] DEFAULT ((1)) NOT NULL,
    [Code]        VARCHAR (50)       NOT NULL,
    [Name]        VARCHAR (255)      NOT NULL,
    [ID]          VARCHAR (38)       DEFAULT (newid()) NOT NULL,
    [CreatedAt]   DATETIMEOFFSET (7) DEFAULT (CONVERT([datetimeoffset],sysutcdatetime())) NOT NULL,
    [UpdatedAt]   DATETIME           CONSTRAINT [DF_Favorite_UpdatedAt] DEFAULT (getdate()) NOT NULL,
    [Deleted]     BIT                DEFAULT ((0)) NOT NULL,
    [Version]     ROWVERSION         NOT NULL,
    [UserID]      INT                CONSTRAINT [DF_Favorite_UserID] DEFAULT ((1)) NOT NULL,
    CONSTRAINT [PK_Favorite] PRIMARY KEY CLUSTERED ([Active] ASC),
    CONSTRAINT [FK_Favorite_MetricSet] FOREIGN KEY ([MetricSetID]) REFERENCES [Core].[MetricSet] ([MetricSetID]),
    CONSTRAINT [FK_Favorite_User] FOREIGN KEY ([UserID]) REFERENCES [Security].[User] ([UserID]),
    CONSTRAINT [IX_Active_Favorite] UNIQUE NONCLUSTERED ([Active] ASC)
);

