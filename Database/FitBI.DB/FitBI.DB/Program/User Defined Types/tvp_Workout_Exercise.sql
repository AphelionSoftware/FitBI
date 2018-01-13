CREATE TYPE [Program].[tvp_Workout_Exercise] AS TABLE (
    [Active]             SMALLINT           NULL,
    [CreatedAt]          DATETIMEOFFSET (7) NULL,
    [Deleted]            BIT                NULL,
    [ExerciseID]         INT                NULL,
    [GoalNarrative]      VARCHAR (MAX)      NULL,
    [ID]                 VARCHAR (38)       NULL,
    [PersonID]           INT                NULL,
    [UpdatedAt]          DATETIMEOFFSET (7) NULL,
    [Version]            VARCHAR (255)      NULL,
    [Workout_ExerciseID] INT                NULL,
    [WorkoutID]          INT                NULL);



