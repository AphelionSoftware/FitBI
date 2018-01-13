CREATE TYPE [Exercise].[tvp_Exercise_Sport] AS TABLE (
    [Active]           SMALLINT           NULL,
    [CreatedAt]        DATETIMEOFFSET (7) NULL,
    [Deleted]          BIT                NULL,
    [Exercise_SportID] INT                NULL,
    [ExerciseID]       INT                NULL,
    [GoalNarrative]    VARCHAR (MAX)      NULL,
    [ID]               VARCHAR (38)       NULL,
    [PersonID]         INT                NULL,
    [SportID]          INT                NULL,
    [UpdatedAt]        DATETIMEOFFSET (7) NULL,
    [Version]          VARCHAR (255)      NULL);



