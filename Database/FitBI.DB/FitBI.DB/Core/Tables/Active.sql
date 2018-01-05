CREATE TABLE [Core].[Active] (
    [ActiveID]  SMALLINT           NOT NULL,
    [Code]      CHAR (3)           NOT NULL,
    [Name]      VARCHAR (9)        NOT NULL,
    [Id]        VARCHAR (38)       CONSTRAINT [DF_Active_Id] DEFAULT (newid()) NOT NULL,
    [Version]   ROWVERSION         NOT NULL,
    [CreatedAt] DATETIMEOFFSET (7) CONSTRAINT [DF_Active_CreatedAt] DEFAULT (CONVERT([datetimeoffset],sysutcdatetime())) NOT NULL,
    [UpdatedAt] DATETIMEOFFSET (7) NULL,
    [Deleted]   BIT                CONSTRAINT [DF_Active_Deleted] DEFAULT ((0)) NOT NULL,
    CONSTRAINT [PK_Active] PRIMARY KEY CLUSTERED ([ActiveID] ASC)
);





