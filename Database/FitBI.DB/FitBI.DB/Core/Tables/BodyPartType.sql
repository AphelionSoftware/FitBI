CREATE TABLE [Core].[BodyPartType] (
    [BodyPartTypeID] INT                IDENTITY (1, 1) NOT NULL,
    [Code]           VARCHAR (50)       NOT NULL,
    [Name]           VARCHAR (255)      NOT NULL,
    [Active]         SMALLINT           CONSTRAINT [DF_BodyPartType_Active] DEFAULT ((1)) NOT NULL,
    [ID]             VARCHAR (38)       NOT NULL,
    [CreatedAt]      DATETIMEOFFSET (7) CONSTRAINT [DF_BodyPartType_CreatedAt] DEFAULT (CONVERT([datetimeoffset],sysutcdatetime())) NOT NULL,
    [UpdatedAt]      DATETIMEOFFSET (7) NULL,
    [Deleted]        BIT                CONSTRAINT [DF_BodyPartType_Deleted] DEFAULT ((0)) NOT NULL,
    [Version]        ROWVERSION         NOT NULL,
    CONSTRAINT [PK_BodyPartTypeCategory] PRIMARY KEY CLUSTERED ([BodyPartTypeID] ASC),
    CONSTRAINT [FK_BodyPartType_Active] FOREIGN KEY ([Active]) REFERENCES [Core].[Active] ([ActiveID])
);





