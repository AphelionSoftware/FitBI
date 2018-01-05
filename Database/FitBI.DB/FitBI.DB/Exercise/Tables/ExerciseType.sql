CREATE TABLE [Exercise].[ExerciseType] (
    [ExerciseTypeID]       INT                IDENTITY (1, 1) NOT NULL,
    [Code]                 VARCHAR (50)       NOT NULL,
    [Name]                 VARCHAR (255)      NOT NULL,
    [ParentExerciseTypeID] INT                NULL,
    [PersonID]             INT                NULL,
    [Active]               SMALLINT           CONSTRAINT [DF_ExerciseType_Active] DEFAULT ((1)) NOT NULL,
    [ID]                   VARCHAR (38)       CONSTRAINT [DF_Metric_ID] DEFAULT (newid()) NOT NULL,
    [CreatedAt]            DATETIMEOFFSET (7) CONSTRAINT [DF_ExerciseType_CreatedAt] DEFAULT (CONVERT([datetimeoffset],sysutcdatetime())) NOT NULL,
    [UpdatedAt]            DATETIMEOFFSET (7) NULL,
    [Deleted]              BIT                CONSTRAINT [DF_ExerciseType_Deleted] DEFAULT ((0)) NOT NULL,
    [Version]              ROWVERSION         NOT NULL,
    CONSTRAINT [PK_ExerciseTypeCategory] PRIMARY KEY CLUSTERED ([ExerciseTypeID] ASC),
    CONSTRAINT [FK_ExerciseType_Active] FOREIGN KEY ([Active]) REFERENCES [Core].[Active] ([ActiveID]),
    CONSTRAINT [FK_ExerciseType_ExerciseType] FOREIGN KEY ([ParentExerciseTypeID]) REFERENCES [Exercise].[ExerciseType] ([ExerciseTypeID]),
    CONSTRAINT [FK_ExerciseType_Person] FOREIGN KEY ([PersonID]) REFERENCES [Stats].[Person] ([PersonID])
);



