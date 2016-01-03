CREATE TABLE [Core].[BodyPart] (
    [BodyPartID]       INT           IDENTITY (1, 1) NOT NULL,
    [BodyPartTypeID]   INT           NOT NULL,
    [Code]             VARCHAR (50)  NOT NULL,
    [Name]             VARCHAR (255) NOT NULL,
    [Description]      VARCHAR (MAX) NULL,
    [ParentBodyPartID] INT           NULL,
    [Active]           SMALLINT      CONSTRAINT [DF__BodyPart__Active__22AA2996] DEFAULT ((1)) NOT NULL,
    [sysCreatedOn]     DATETIME      CONSTRAINT [DF__BodyPart__sysCreat__239E4DCF] DEFAULT (getdate()) NOT NULL,
    [sysCreatedBy]     VARCHAR (50)  CONSTRAINT [DF__BodyPart__sysCreat__24927208] DEFAULT (user_name()) NOT NULL,
    [sysModifiedOn]    DATETIME      CONSTRAINT [DF__BodyPart__sysModif__25869641] DEFAULT (getdate()) NOT NULL,
    [sysModifiedBy]    VARCHAR (50)  CONSTRAINT [DF__BodyPart__sysModif__267ABA7A] DEFAULT (user_name()) NOT NULL,
    [sysTimestamp]     ROWVERSION    NOT NULL,
    CONSTRAINT [PK_BodyPart] PRIMARY KEY CLUSTERED ([BodyPartID] ASC),
    CONSTRAINT [FK_BodyPart_Active] FOREIGN KEY ([Active]) REFERENCES [Core].[Active] ([Active]),
    CONSTRAINT [FK_BodyPart_BodyPart] FOREIGN KEY ([BodyPartID]) REFERENCES [Core].[BodyPart] ([BodyPartID]),
    CONSTRAINT [FK_BodyPart_BodyPart1] FOREIGN KEY ([ParentBodyPartID]) REFERENCES [Core].[BodyPart] ([BodyPartID]),
    CONSTRAINT [FK_BodyPart_BodyPartType] FOREIGN KEY ([BodyPartTypeID]) REFERENCES [Core].[BodyPartType] ([BodyPartTypeID])
);

