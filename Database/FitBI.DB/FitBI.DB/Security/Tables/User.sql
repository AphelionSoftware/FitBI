CREATE TABLE [Security].[User] (
    [UserID]    INT                NOT NULL,
    [PersonID]  INT                NOT NULL,
    [Active]    SMALLINT           CONSTRAINT [DF_User_Active] DEFAULT ((1)) NOT NULL,
    [ID]        VARCHAR (38)       CONSTRAINT [DF__User__ID__1FEDB87C] DEFAULT (newid()) NOT NULL,
    [CreatedAt] DATETIMEOFFSET (7) CONSTRAINT [DF__User__CreatedAt__20E1DCB5] DEFAULT (CONVERT([datetimeoffset],sysutcdatetime())) NOT NULL,
    [UpdatedAt] DATETIMEOFFSET (7) NULL,
    [Deleted]   BIT                CONSTRAINT [DF__User__Deleted__21D600EE] DEFAULT ((0)) NOT NULL,
    [Version]   ROWVERSION         NOT NULL,
    CONSTRAINT [PK_User] PRIMARY KEY CLUSTERED ([UserID] ASC),
    CONSTRAINT [FK_User_Active] FOREIGN KEY ([Active]) REFERENCES [Core].[Active] ([ActiveID]),
    CONSTRAINT [FK_User_Person] FOREIGN KEY ([PersonID]) REFERENCES [Stats].[Person] ([PersonID]),
    CONSTRAINT [IX_Active] UNIQUE NONCLUSTERED ([Active] ASC)
);



