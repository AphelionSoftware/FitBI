CREATE TABLE [Program].[Workout_Exercise] (
    [Workout_ExerciseID] INT                IDENTITY (1, 1) NOT NULL,
    [WorkoutID]          INT                NULL,
    [PersonID]           INT                NULL,
    [GoalNarrative]      VARCHAR (MAX)      NULL,
    [ExerciseID]         INT                NULL,
    [Active]             SMALLINT           CONSTRAINT [DF_Workout_Exercise_Active] DEFAULT ((1)) NOT NULL,
    [ID]                 VARCHAR (38)       NOT NULL,
    [CreatedAt]          DATETIMEOFFSET (7) CONSTRAINT [DF_Workout_Exercise_CreatedAt] DEFAULT (CONVERT([datetimeoffset],sysutcdatetime())) NOT NULL,
    [UpdatedAt]          DATETIMEOFFSET (7) NULL,
    [Deleted]            BIT                CONSTRAINT [DF_Workout_Exercise_Deleted] DEFAULT ((0)) NOT NULL,
    [Version]            ROWVERSION         NOT NULL,
    CONSTRAINT [PK_Workout_Exercise] PRIMARY KEY CLUSTERED ([Workout_ExerciseID] ASC),
    CONSTRAINT [FK_Workout_Exercise_Active] FOREIGN KEY ([Active]) REFERENCES [Core].[Active] ([ActiveID]),
    CONSTRAINT [FK_Workout_Exercise_Person] FOREIGN KEY ([PersonID]) REFERENCES [Stats].[Person] ([PersonID]),
    CONSTRAINT [FK_Workout_Exercise_Workout] FOREIGN KEY ([WorkoutID]) REFERENCES [Program].[Workout] ([WorkoutID])
);



