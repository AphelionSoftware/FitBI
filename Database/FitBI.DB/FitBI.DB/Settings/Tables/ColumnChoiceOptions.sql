CREATE TABLE [Settings].[ColumnChoiceOptions] (
    [ColumnChoiceOptionsID] INT                NOT NULL,
    [Active]                SMALLINT           CONSTRAINT [DF_ColumnChoiceOptions_Active] DEFAULT ((1)) NOT NULL,
    [PageID]                INT                NULL,
    [Code]                  VARCHAR (50)       NOT NULL,
    [Name]                  VARCHAR (255)      NOT NULL,
    [ID]                    VARCHAR (38)       DEFAULT (newid()) NOT NULL,
    [CreatedAt]             DATETIMEOFFSET (7) DEFAULT (CONVERT([datetimeoffset],sysutcdatetime())) NOT NULL,
    [UpdatedAt]             DATETIMEOFFSET (7) NULL,
    [Version]               ROWVERSION         NOT NULL,
    CONSTRAINT [PK_Active] PRIMARY KEY CLUSTERED ([Active] ASC),
    CONSTRAINT [IX_Active] UNIQUE NONCLUSTERED ([Active] ASC)
);



