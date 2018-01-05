CREATE TABLE [Program].[Workout] (
    [WorkoutID]     INT                IDENTITY (1, 1) NOT NULL,
    [PlanID]        INT                NULL,
    [PersonID]      INT                NULL,
    [Name]          VARCHAR (255)      NOT NULL,
    [GoalNarrative] VARCHAR (MAX)      NULL,
    [isTemplate]    BIT                CONSTRAINT [DF__Workout__isTempl__53A266AC] DEFAULT ((0)) NOT NULL,
    [Active]        SMALLINT           CONSTRAINT [DF_Workout_Active] DEFAULT ((1)) NOT NULL,
    [ID]            VARCHAR (38)       NOT NULL,
    [CreatedAt]     DATETIMEOFFSET (7) CONSTRAINT [DF_Workout_CreatedAt] DEFAULT (CONVERT([datetimeoffset],sysutcdatetime())) NOT NULL,
    [UpdatedAt]     DATETIMEOFFSET (7) NULL,
    [Deleted]       BIT                CONSTRAINT [DF_Workout_Deleted] DEFAULT ((0)) NOT NULL,
    [Version]       ROWVERSION         NOT NULL,
    CONSTRAINT [PK_Workout] PRIMARY KEY CLUSTERED ([WorkoutID] ASC),
    CONSTRAINT [FK_Workout_Active] FOREIGN KEY ([Active]) REFERENCES [Core].[Active] ([ActiveID]),
    CONSTRAINT [FK_Workout_Person] FOREIGN KEY ([PersonID]) REFERENCES [Stats].[Person] ([PersonID]),
    CONSTRAINT [FK_Workout_Plan] FOREIGN KEY ([PlanID]) REFERENCES [Program].[Plan] ([PlanID])
);



