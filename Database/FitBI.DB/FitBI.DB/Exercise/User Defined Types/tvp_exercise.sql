CREATE TYPE [Exercise].[tvp_exercise] AS TABLE (
    [Active]           SMALLINT      NULL,
    [Code]             VARCHAR (50)  NULL,
    [Description]      VARCHAR (MAX) NULL,
    [ExerciseID]       INT           NULL,
    [ExerciseTypeID]   INT           NULL,
    [ID]               VARCHAR (38)  NULL,
    [Name]             VARCHAR (255) NULL,
    [ParentExerciseID] INT           NULL,
    [PersonID]         INT           NULL);

