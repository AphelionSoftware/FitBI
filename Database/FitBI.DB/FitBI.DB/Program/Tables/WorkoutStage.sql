CREATE TABLE [Program].[WorkoutStage] (
    [WorkoutStageID] INT                IDENTITY (1, 1) NOT NULL,
    [WorkoutID]      INT                NULL,
    [PersonID]       INT                NULL,
    [GoalNarrative]  VARCHAR (MAX)      NULL,
    [isTemplate]     BIT                CONSTRAINT [DF_WorkoutStage_isTemplate] DEFAULT ((0)) NOT NULL,
    [Active]         SMALLINT           CONSTRAINT [DF_WorkoutStage_Active] DEFAULT ((1)) NOT NULL,
    [ID]             VARCHAR (38)       NOT NULL,
    [CreatedAt]      DATETIMEOFFSET (7) CONSTRAINT [DF_WorkoutStage_CreatedAt] DEFAULT (CONVERT([datetimeoffset],sysutcdatetime())) NOT NULL,
    [UpdatedAt]      DATETIMEOFFSET (7) NULL,
    [Deleted]        BIT                CONSTRAINT [DF_WorkoutStage_Deleted] DEFAULT ((0)) NOT NULL,
    [Version]        ROWVERSION         NOT NULL,
    CONSTRAINT [PK_WorkoutStage] PRIMARY KEY CLUSTERED ([WorkoutStageID] ASC),
    CONSTRAINT [CK_WorkoutStage_isTemplateCheck] CHECK (isnull([WorkoutID],(0))=nullif([isTemplate],(1))),
    CONSTRAINT [FK_WorkoutStage_Active] FOREIGN KEY ([Active]) REFERENCES [Core].[Active] ([ActiveID]),
    CONSTRAINT [FK_WorkoutStage_Person] FOREIGN KEY ([PersonID]) REFERENCES [Stats].[Person] ([PersonID]),
    CONSTRAINT [FK_WorkoutStage_Workout] FOREIGN KEY ([WorkoutID]) REFERENCES [Program].[Workout] ([WorkoutID]),
    CONSTRAINT [IX_WorkoutStage] UNIQUE NONCLUSTERED ([WorkoutStageID] ASC)
);



