CREATE TYPE [UserSettings].[tvp_ColumnChoice] AS TABLE (
    [Active]         SMALLINT           NULL,
    [Code]           VARCHAR (50)       NULL,
    [ColumnChoiceID] INT                NULL,
    [ColumnList]     NVARCHAR (MAX)     NULL,
    [CreatedAt]      DATETIMEOFFSET (7) NULL,
    [Deleted]        BIT                NULL,
    [ID]             VARCHAR (38)       NULL,
    [Name]           VARCHAR (255)      NULL,
    [PageID]         INT                NULL,
    [UpdatedAt]      DATETIMEOFFSET (7) NULL,
    [Version]        VARCHAR (255)      NULL);



