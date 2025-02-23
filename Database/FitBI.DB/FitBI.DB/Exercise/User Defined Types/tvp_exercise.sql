﻿CREATE TYPE [Exercise].[tvp_Exercise] AS TABLE (
    [Active]           SMALLINT           NULL,
    [Code]             VARCHAR (50)       NULL,
    [CreatedAt]        DATETIMEOFFSET (7) NULL,
    [Deleted]          BIT                NULL,
    [Description]      VARCHAR (MAX)      NULL,
    [ExerciseID]       INT                NULL,
    [ExerciseTypeID]   INT                NULL,
    [ID]               VARCHAR (38)       NULL,
    [Name]             VARCHAR (255)      NULL,
    [ParentExerciseID] INT                NULL,
    [PersonID]         INT                NULL,
    [UpdatedAt]        DATETIMEOFFSET (7) NULL,
    [Version]          VARCHAR (255)      NULL);





