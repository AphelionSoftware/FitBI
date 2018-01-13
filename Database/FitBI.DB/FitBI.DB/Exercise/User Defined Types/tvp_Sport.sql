CREATE TYPE [Exercise].[tvp_Sport] AS TABLE (
    [Active]        SMALLINT           NULL,
    [Code]          VARCHAR (50)       NULL,
    [CreatedAt]     DATETIMEOFFSET (7) NULL,
    [Deleted]       BIT                NULL,
    [Description]   VARCHAR (MAX)      NULL,
    [ID]            VARCHAR (38)       NULL,
    [Name]          VARCHAR (255)      NULL,
    [ParentSportID] INT                NULL,
    [PersonID]      INT                NULL,
    [SportID]       INT                NULL,
    [UpdatedAt]     DATETIMEOFFSET (7) NULL,
    [Version]       VARCHAR (255)      NULL);



