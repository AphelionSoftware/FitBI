CREATE TABLE [Program].[Workout] (
    [WorkoutID]     INT                IDENTITY (1, 1) NOT NULL,
    [PlanID]        INT                NULL,
    [PersonID]      INT                NULL,
    [Name]          VARCHAR (255)      NOT NULL,
    [GoalNarrative] VARCHAR (MAX)      NULL,
    [isTemplate]    BIT                CONSTRAINT [DF__Workout__isTempl__53A266AC] DEFAULT ((0)) NOT NULL,
    [Active]        SMALLINT           CONSTRAINT [DF_Workout_Active] DEFAULT ((1)) NOT NULL,
    [ID]            VARCHAR (38)       CONSTRAINT [DF_Workout_ID] DEFAULT (newid()) NOT NULL,
    [CreatedAt]     DATETIMEOFFSET (7) CONSTRAINT [DF_Workout_CreatedAt] DEFAULT (CONVERT([datetimeoffset],sysutcdatetime())) NOT NULL,
    [UpdatedAt]     DATETIMEOFFSET (7) NULL,
    [Deleted]       BIT                CONSTRAINT [DF_Workout_Deleted] DEFAULT ((0)) NOT NULL,
    [Version]       ROWVERSION         NOT NULL,
    CONSTRAINT [PK_Workout] PRIMARY KEY CLUSTERED ([WorkoutID] ASC),
    CONSTRAINT [FK_Workout_Active] FOREIGN KEY ([Active]) REFERENCES [Core].[Active] ([ActiveID]),
    CONSTRAINT [FK_Workout_Person] FOREIGN KEY ([PersonID]) REFERENCES [Stats].[Person] ([PersonID]),
    CONSTRAINT [FK_Workout_Plan] FOREIGN KEY ([PlanID]) REFERENCES [Program].[Plan] ([PlanID])
);








GO

-- =============================================
-- Author:		Mark Stacey
-- Create date: 2018-01-04
-- Description:	Populating UpdatedAt
-- =============================================
CREATE TRIGGER [Program].trg_Workout_Update
   ON  [Program].[Workout] 
   AFTER UPDATE
AS 
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;
	UPDATE [Program].[Workout]  
	SET [Program].[Workout] .UpdatedAt = CONVERT (DATETIMEOFFSET, sysutcdatetime())    
	FROM [Program].[Workout]  INNER JOIN inserted 
	ON [Program].[Workout] .WorkoutID = inserted.WorkoutID
	-- Insert statements for trigger here

END