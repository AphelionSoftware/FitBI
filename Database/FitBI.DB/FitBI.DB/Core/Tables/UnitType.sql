CREATE TABLE [Core].[UnitType] (
    [UnitTypeID] INT                IDENTITY (1, 1) NOT NULL,
    [Code]       VARCHAR (50)       NOT NULL,
    [Name]       VARCHAR (255)      NOT NULL,
    [Active]     SMALLINT           CONSTRAINT [DF_UnitType_Active] DEFAULT ((1)) NOT NULL,
    [ID]         VARCHAR (38)       NOT NULL,
    [CreatedAt]  DATETIMEOFFSET (7) CONSTRAINT [DF_UnitType_CreatedAt] DEFAULT (CONVERT([datetimeoffset],sysutcdatetime())) NOT NULL,
    [UpdatedAt]  DATETIMEOFFSET (7) NULL,
    [Deleted]    BIT                CONSTRAINT [DF_UnitType_Deleted] DEFAULT ((0)) NOT NULL,
    [Version]    ROWVERSION         NOT NULL,
    CONSTRAINT [PK_UnitTypeCategory] PRIMARY KEY CLUSTERED ([UnitTypeID] ASC),
    CONSTRAINT [FK_UnitType_Active] FOREIGN KEY ([Active]) REFERENCES [Core].[Active] ([ActiveID])
);





