CREATE TYPE [Exercise].[tvp_ExerciseLink] AS TABLE (
    [Active]         SMALLINT           NULL,
    [Code]           VARCHAR (50)       NULL,
    [CreatedAt]      DATETIMEOFFSET (7) NULL,
    [Deleted]        BIT                NULL,
    [ExerciseID]     INT                NULL,
    [ExerciseLinkID] INT                NULL,
    [ID]             VARCHAR (38)       NULL,
    [Name]           VARCHAR (255)      NULL,
    [PersonID]       INT                NULL,
    [UpdatedAt]      DATETIMEOFFSET (7) NULL,
    [URL]            VARCHAR (MAX)      NULL,
    [Version]        VARCHAR (255)      NULL);

