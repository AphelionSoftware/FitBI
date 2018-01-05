CREATE TABLE [Core].[Unit] (
    [UnitID]       INT                IDENTITY (1, 1) NOT NULL,
    [UnitTypeID]   INT                NOT NULL,
    [Code]         VARCHAR (50)       NOT NULL,
    [Name]         VARCHAR (255)      NOT NULL,
    [Description]  VARCHAR (MAX)      NULL,
    [ParentUnitID] INT                NULL,
    [Active]       SMALLINT           CONSTRAINT [DF_Unit_Active] DEFAULT ((1)) NOT NULL,
    [ID]           VARCHAR (38)       NOT NULL,
    [CreatedAt]    DATETIMEOFFSET (7) CONSTRAINT [DF_Unit_CreatedAt] DEFAULT ((CONVERT([datetimeoffset],sysutcdatetime()))) NOT NULL,
    [UpdatedAt]    DATETIMEOFFSET (7) NULL,
    [Deleted]      BIT                CONSTRAINT [DF_Unit_Deleted] DEFAULT ((0)) NOT NULL,
    [Version]      ROWVERSION         NOT NULL,
    CONSTRAINT [PK_Unit] PRIMARY KEY CLUSTERED ([UnitID] ASC),
    CONSTRAINT [FK_Unit_Active] FOREIGN KEY ([Active]) REFERENCES [Core].[Active] ([ActiveID]),
    CONSTRAINT [FK_Unit_Unit] FOREIGN KEY ([UnitID]) REFERENCES [Core].[Unit] ([UnitID]),
    CONSTRAINT [FK_Unit_Unit1] FOREIGN KEY ([ParentUnitID]) REFERENCES [Core].[Unit] ([UnitID]),
    CONSTRAINT [FK_Unit_UnitType] FOREIGN KEY ([UnitTypeID]) REFERENCES [Core].[UnitType] ([UnitTypeID])
);





