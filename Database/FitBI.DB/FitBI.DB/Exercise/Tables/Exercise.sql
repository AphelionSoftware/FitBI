CREATE TABLE [Exercise].[Exercise] (
    [ExerciseID]       INT                IDENTITY (1, 1) NOT NULL,
    [ExerciseTypeID]   INT                NOT NULL,
    [Code]             VARCHAR (50)       NOT NULL,
    [Name]             VARCHAR (255)      NOT NULL,
    [Description]      VARCHAR (MAX)      NULL,
    [ParentExerciseID] INT                NULL,
    [PersonID]         INT                NULL,
    [Active]           SMALLINT           CONSTRAINT [DF_Exercise_Active] DEFAULT ((1)) NOT NULL,
    [ID]               VARCHAR (38)       CONSTRAINT [DF_Exercise_ID] DEFAULT (newid()) NOT NULL,
    [CreatedAt]        DATETIMEOFFSET (7) CONSTRAINT [DF_Exercise_CreatedAt] DEFAULT (CONVERT([datetimeoffset],sysutcdatetime())) NOT NULL,
    [UpdatedAt]        DATETIMEOFFSET (7) NULL,
    [Deleted]          BIT                CONSTRAINT [DF_Exercise_Deleted] DEFAULT ((0)) NOT NULL,
    [Version]          ROWVERSION         NOT NULL,
    CONSTRAINT [PK_Exercise] PRIMARY KEY CLUSTERED ([ExerciseID] ASC),
    CONSTRAINT [FK_Exercise_Active] FOREIGN KEY ([Active]) REFERENCES [Core].[Active] ([ActiveID]),
    CONSTRAINT [FK_Exercise_Exercise] FOREIGN KEY ([ExerciseID]) REFERENCES [Exercise].[Exercise] ([ExerciseID]),
    CONSTRAINT [FK_Exercise_Exercise1] FOREIGN KEY ([ParentExerciseID]) REFERENCES [Exercise].[Exercise] ([ExerciseID]),
    CONSTRAINT [FK_Exercise_ExerciseType] FOREIGN KEY ([ExerciseTypeID]) REFERENCES [Exercise].[ExerciseType] ([ExerciseTypeID]),
    CONSTRAINT [FK_Exercise_Person] FOREIGN KEY ([PersonID]) REFERENCES [Stats].[Person] ([PersonID])
);





