CREATE TABLE [Program].[Plan] (
    [PlanID]          INT                IDENTITY (1, 1) NOT NULL,
    [Name]            VARCHAR (255)      NOT NULL,
    [StartDate]       DATE               CONSTRAINT [DF_Plan_StartDate] DEFAULT (CONVERT([datetimeoffset],sysutcdatetime())) NOT NULL,
    [GoalNarrative]   VARCHAR (MAX)      NULL,
    [PersonID]        INT                NOT NULL,
    [PlannerPersonID] INT                NULL,
    [isTemplate]      BIT                CONSTRAINT [DF_Plan_isTemplate] DEFAULT ((0)) NOT NULL,
    [Active]          SMALLINT           CONSTRAINT [DF_Plan_Active] DEFAULT ((1)) NOT NULL,
    [ID]              VARCHAR (38)       NOT NULL,
    [CreatedAt]       DATETIMEOFFSET (7) CONSTRAINT [DF_Plan_CreatedAt] DEFAULT (CONVERT([datetimeoffset],sysutcdatetime())) NOT NULL,
    [UpdatedAt]       DATETIMEOFFSET (7) NULL,
    [Deleted]         BIT                CONSTRAINT [DF_Plan_Deleted] DEFAULT ((0)) NOT NULL,
    [Version]         ROWVERSION         NOT NULL,
    CONSTRAINT [PK_Plan] PRIMARY KEY CLUSTERED ([PlanID] ASC),
    CONSTRAINT [FK_Plan_Active] FOREIGN KEY ([Active]) REFERENCES [Core].[Active] ([ActiveID]),
    CONSTRAINT [FK_Plan_Person] FOREIGN KEY ([PersonID]) REFERENCES [Stats].[Person] ([PersonID]),
    CONSTRAINT [FK_Plan_Person1] FOREIGN KEY ([PlannerPersonID]) REFERENCES [Stats].[Person] ([PersonID])
);



