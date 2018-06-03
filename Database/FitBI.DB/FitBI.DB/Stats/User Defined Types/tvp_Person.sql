CREATE TYPE [Stats].[tvp_Person] AS TABLE (
    [Active]      SMALLINT           NULL,
    [CreatedAt]   DATETIMEOFFSET (7) NULL,
    [DateOfBirth] DATE               NULL,
    [Deleted]     BIT                NULL,
    [FirstName]   NVARCHAR (50)      NULL,
    [Height]      SMALLINT           NULL,
    [ID]          VARCHAR (38)       NULL,
    [PersonID]    INT                NULL,
    [Surname]     NVARCHAR (50)      NULL,
    [UpdatedAt]   DATETIMEOFFSET (7) NULL,
    [Version]     VARCHAR (255)      NULL);





