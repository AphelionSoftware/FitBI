CREATE TABLE [Core].[Active] (
    [ActiveID] INT         NOT NULL,
    [Active]   SMALLINT    NOT NULL,
    [Code]     CHAR (3)    NOT NULL,
    [Name]     VARCHAR (9) NOT NULL,
    CONSTRAINT [PK_Active] PRIMARY KEY CLUSTERED ([ActiveID] ASC),
    CONSTRAINT [IX_Active] UNIQUE NONCLUSTERED ([Active] ASC)
);

