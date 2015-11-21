CREATE TABLE [Stats].[Person] (
    [PersonID]      INT           IDENTITY (1, 1) NOT NULL,
    [FirstName]     NVARCHAR (50) NULL,
    [Surname]       NVARCHAR (50) NULL,
    [DateOfBirth]   DATE          NULL,
    [DateOfBirthID] AS            (CONVERT([int],CONVERT([varchar](10),[DateOfBirth],(112)))),
    [Height]        SMALLINT      NULL,
    [Active]        SMALLINT      CONSTRAINT [DF__Person__Active__22AA2996] DEFAULT ((1)) NOT NULL,
    [sysCreatedOn]  DATETIME      CONSTRAINT [DF__Person__sysCreat__239E4DCF] DEFAULT (getdate()) NOT NULL,
    [sysCreatedBy]  VARCHAR (50)  CONSTRAINT [DF__Person__sysCreat__24927208] DEFAULT (user_name()) NOT NULL,
    [sysModifiedOn] DATETIME      CONSTRAINT [DF__Person__sysModif__25869641] DEFAULT (getdate()) NOT NULL,
    [sysModifiedBy] VARCHAR (50)  CONSTRAINT [DF__Person__sysModif__267ABA7A] DEFAULT (user_name()) NOT NULL,
    [sysTimestamp]  ROWVERSION    NOT NULL,
    CONSTRAINT [PK_Person] PRIMARY KEY CLUSTERED ([PersonID] ASC),
    CONSTRAINT [FK_Person_Active] FOREIGN KEY ([Active]) REFERENCES [Core].[Active] ([Active])
);



