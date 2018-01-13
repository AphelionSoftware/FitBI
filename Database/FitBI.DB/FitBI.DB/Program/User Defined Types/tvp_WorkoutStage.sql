CREATE TYPE [Program].[tvp_WorkoutStage] AS TABLE (
    [Active]         SMALLINT           NULL,
    [CreatedAt]      DATETIMEOFFSET (7) NULL,
    [Deleted]        BIT                NULL,
    [GoalNarrative]  VARCHAR (MAX)      NULL,
    [ID]             VARCHAR (38)       NULL,
    [isTemplate]     BIT                NULL,
    [PersonID]       INT                NULL,
    [UpdatedAt]      DATETIMEOFFSET (7) NULL,
    [Version]        VARCHAR (255)      NULL,
    [WorkoutID]      INT                NULL,
    [WorkoutStageID] INT                NULL);



