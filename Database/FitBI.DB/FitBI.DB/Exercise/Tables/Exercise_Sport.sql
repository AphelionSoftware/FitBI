CREATE TABLE [Exercise].[Exercise_Sport] (
    [Exercise_SportID] INT                IDENTITY (1, 1) NOT NULL,
    [ExerciseID]       INT                NULL,
    [PersonID]         INT                NULL,
    [GoalNarrative]    VARCHAR (MAX)      NULL,
    [SportID]          INT                NULL,
    [Active]           SMALLINT           CONSTRAINT [DF_Exercise_Sport_Active] DEFAULT ((1)) NOT NULL,
    [ID]               VARCHAR (38)       CONSTRAINT [DF_Exercise_Sport_ID] DEFAULT (newid()) NOT NULL,
    [CreatedAt]        DATETIMEOFFSET (7) CONSTRAINT [DF_Exercise_Sport_CreatedAt] DEFAULT (CONVERT([datetimeoffset],sysutcdatetime())) NOT NULL,
    [UpdatedAt]        DATETIMEOFFSET (7)          CONSTRAINT  [DF_Exercise_Sport_UpdatedAt] DEFAULT (getdate()) NOT NULL,
    [Deleted]          BIT                CONSTRAINT [DF_Exercise_Sport_Deleted] DEFAULT ((0)) NOT NULL,
    [Version]          ROWVERSION         NOT NULL,
    CONSTRAINT [PK_Exercise_Sport] PRIMARY KEY CLUSTERED ([Exercise_SportID] ASC),
    CONSTRAINT [FK_Exercise_Sport_Active] FOREIGN KEY ([Active]) REFERENCES [Core].[Active] ([ActiveID]),
    CONSTRAINT [FK_Exercise_Sport_Exercise] FOREIGN KEY ([ExerciseID]) REFERENCES [Exercise].[Exercise] ([ExerciseID]),
    CONSTRAINT [FK_Exercise_Sport_Person] FOREIGN KEY ([PersonID]) REFERENCES [Stats].[Person] ([PersonID])
);





