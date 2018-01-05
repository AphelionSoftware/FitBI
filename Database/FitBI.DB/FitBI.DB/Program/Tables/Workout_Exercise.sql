CREATE TABLE [Program].[Workout_Exercise] (
    [Workout_ExerciseID] INT                IDENTITY (1, 1) NOT NULL,
    [WorkoutID]          INT                NULL,
    [PersonID]           INT                NULL,
    [GoalNarrative]      VARCHAR (MAX)      NULL,
    [ExerciseID]         INT                NULL,
    [Active]             SMALLINT           CONSTRAINT [DF_Workout_Exercise_Active] DEFAULT ((1)) NOT NULL,
    [ID]                 VARCHAR (38)       CONSTRAINT [DF_Workout_Exercise_ID] DEFAULT (newid()) NOT NULL,
    [CreatedAt]          DATETIMEOFFSET (7) CONSTRAINT [DF_Workout_Exercise_CreatedAt] DEFAULT (CONVERT([datetimeoffset],sysutcdatetime())) NOT NULL,
    [UpdatedAt]          DATETIMEOFFSET (7) NULL,
    [Deleted]            BIT                CONSTRAINT [DF_Workout_Exercise_Deleted] DEFAULT ((0)) NOT NULL,
    [Version]            ROWVERSION         NOT NULL,
    CONSTRAINT [PK_Workout_Exercise] PRIMARY KEY CLUSTERED ([Workout_ExerciseID] ASC),
    CONSTRAINT [FK_Workout_Exercise_Active] FOREIGN KEY ([Active]) REFERENCES [Core].[Active] ([ActiveID]),
    CONSTRAINT [FK_Workout_Exercise_Person] FOREIGN KEY ([PersonID]) REFERENCES [Stats].[Person] ([PersonID]),
    CONSTRAINT [FK_Workout_Exercise_Workout] FOREIGN KEY ([WorkoutID]) REFERENCES [Program].[Workout] ([WorkoutID])
);








GO

-- =============================================
-- Author:		Mark Stacey
-- Create date: 2018-01-04
-- Description:	Populating UpdatedAt
-- =============================================
CREATE TRIGGER [Program].trg_Workout_Exercise_Update
   ON  [Program].[Workout_Exercise] 
   AFTER UPDATE
AS 
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;
	UPDATE [Program].[Workout_Exercise]  
	SET [Program].[Workout_Exercise] .UpdatedAt = CONVERT (DATETIMEOFFSET, sysutcdatetime())    
	FROM [Program].[Workout_Exercise]  INNER JOIN inserted 
	ON [Program].[Workout_Exercise] .Workout_ExerciseID = inserted.Workout_ExerciseID
	-- Insert statements for trigger here

END