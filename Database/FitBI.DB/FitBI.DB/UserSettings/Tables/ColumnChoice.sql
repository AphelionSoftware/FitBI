CREATE TABLE [UserSettings].[ColumnChoice] (
    [ColumnChoiceID] INT                NOT NULL,
    [PageID]         INT                NOT NULL,
    [ColumnList]     NVARCHAR (MAX)     NOT NULL,
    [Active]         SMALLINT           CONSTRAINT [DF_ColumnChoice_Active] DEFAULT ((1)) NOT NULL,
    [Code]           VARCHAR (50)       NOT NULL,
    [Name]           VARCHAR (255)      NOT NULL,
    [ID]             VARCHAR (38)       DEFAULT (newid()) NOT NULL,
    [CreatedAt]      DATETIMEOFFSET (7) DEFAULT (CONVERT([datetimeoffset],sysutcdatetime())) NOT NULL,
    [UpdatedAt]      DATETIMEOFFSET (7) NULL,
    [Deleted]        BIT                DEFAULT ((0)) NOT NULL,
    [Version]        ROWVERSION         NOT NULL,
    CONSTRAINT [PK_] PRIMARY KEY CLUSTERED ([Active] ASC),
    CONSTRAINT [IX_Active] UNIQUE NONCLUSTERED ([Active] ASC)
);



