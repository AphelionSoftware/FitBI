CREATE TABLE [Core].[MetricSet] (
    [MetricSetID] INT                IDENTITY (1, 1) NOT NULL,
    [Code]        VARCHAR (50)       NOT NULL,
    [Name]        VARCHAR (255)      NOT NULL,
    [Description] VARCHAR (MAX)      NULL,
    [icon]        VARCHAR (255)      NULL,
    [Active]      SMALLINT           CONSTRAINT [DF_MetricSet_Active] DEFAULT ((1)) NOT NULL,
    [ID]          VARCHAR (38)       CONSTRAINT [DF_MetricSet_ID] DEFAULT (newid()) NOT NULL,
    [CreatedAt]   DATETIMEOFFSET (7) CONSTRAINT [DF_MetricSet_CreatedAt] DEFAULT (CONVERT([datetimeoffset],sysutcdatetime())) NOT NULL,
    [UpdatedAt]   DATETIME           CONSTRAINT [DF_MetricSet_UpdatedAt] DEFAULT (getdate()) NOT NULL,
    [Deleted]     BIT                CONSTRAINT [DF_MetricSet_Deleted] DEFAULT ((0)) NOT NULL,
    [Version]     ROWVERSION         NOT NULL,
    CONSTRAINT [PK_MetricSetCategory] PRIMARY KEY CLUSTERED ([MetricSetID] ASC),
    CONSTRAINT [FK_MetricSet_Active] FOREIGN KEY ([Active]) REFERENCES [Core].[Active] ([ActiveID])
);

