CREATE TABLE [Exercise].[Sport] (
    [SportID]       INT                IDENTITY (1, 1) NOT NULL,
    [Code]          VARCHAR (50)       NOT NULL,
    [Name]          VARCHAR (255)      NOT NULL,
    [Description]   VARCHAR (MAX)      NULL,
    [ParentSportID] INT                NULL,
    [PersonID]      INT                NULL,
    [Active]        SMALLINT           CONSTRAINT [DF_Sport_Active] DEFAULT ((1)) NOT NULL,
    [ID]            VARCHAR (38)       CONSTRAINT [DF_Sport_ID] DEFAULT (newid()) NOT NULL,
    [CreatedAt]     DATETIMEOFFSET (7) CONSTRAINT [DF_Sport_CreatedAt] DEFAULT (CONVERT([datetimeoffset],sysutcdatetime())) NOT NULL,
    [UpdatedAt]     DATETIME           CONSTRAINT [DF_Sport_UpdatedAt] DEFAULT (getdate()) NOT NULL,
    [Deleted]       BIT                CONSTRAINT [DF_Sport_Deleted] DEFAULT ((0)) NOT NULL,
    [Version]       ROWVERSION         NOT NULL,
    CONSTRAINT [PK_Sport] PRIMARY KEY CLUSTERED ([SportID] ASC),
    CONSTRAINT [FK_Sport_Active] FOREIGN KEY ([Active]) REFERENCES [Core].[Active] ([ActiveID]),
    CONSTRAINT [FK_Sport_Person] FOREIGN KEY ([PersonID]) REFERENCES [Stats].[Person] ([PersonID]),
    CONSTRAINT [FK_Sport_Sport] FOREIGN KEY ([SportID]) REFERENCES [Exercise].[Sport] ([SportID]),
    CONSTRAINT [FK_Sport_Sport1] FOREIGN KEY ([ParentSportID]) REFERENCES [Exercise].[Sport] ([SportID])
);



