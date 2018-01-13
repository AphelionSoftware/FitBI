CREATE TYPE [Program].[tvp_Workout] AS TABLE (
    [Active]        SMALLINT           NULL,
    [CreatedAt]     DATETIMEOFFSET (7) NULL,
    [Deleted]       BIT                NULL,
    [GoalNarrative] VARCHAR (MAX)      NULL,
    [ID]            VARCHAR (38)       NULL,
    [isTemplate]    BIT                NULL,
    [Name]          VARCHAR (255)      NULL,
    [PersonID]      INT                NULL,
    [PlanID]        INT                NULL,
    [UpdatedAt]     DATETIMEOFFSET (7) NULL,
    [Version]       VARCHAR (255)      NULL,
    [WorkoutID]     INT                NULL);



