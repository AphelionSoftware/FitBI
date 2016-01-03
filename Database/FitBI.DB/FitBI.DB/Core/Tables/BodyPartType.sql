CREATE TABLE [Core].[BodyPartType] (
    [BodyPartTypeID] INT           IDENTITY (1, 1) NOT NULL,
    [Code]           VARCHAR (50)  NOT NULL,
    [Name]           VARCHAR (255) NOT NULL,
    [Active]         SMALLINT      CONSTRAINT [DF__BodyPartType__Active__22AA2996] DEFAULT ((1)) NOT NULL,
    [sysCreatedOn]   DATETIME      CONSTRAINT [DF__BodyPartType__sysCreat__239E4DCF] DEFAULT (getdate()) NOT NULL,
    [sysCreatedBy]   VARCHAR (50)  CONSTRAINT [DF__BodyPartType__sysCreat__24927208] DEFAULT (user_name()) NOT NULL,
    [sysModifiedOn]  DATETIME      CONSTRAINT [DF__BodyPartType__sysModif__25869641] DEFAULT (getdate()) NOT NULL,
    [sysModifiedBy]  VARCHAR (50)  CONSTRAINT [DF__BodyPartType__sysModif__267ABA7A] DEFAULT (user_name()) NOT NULL,
    [sysTimestamp]   ROWVERSION    NOT NULL,
    CONSTRAINT [PK_BodyPartTypeCategory] PRIMARY KEY CLUSTERED ([BodyPartTypeID] ASC),
    CONSTRAINT [FK_BodyPartType_Active] FOREIGN KEY ([Active]) REFERENCES [Core].[Active] ([Active])
);

