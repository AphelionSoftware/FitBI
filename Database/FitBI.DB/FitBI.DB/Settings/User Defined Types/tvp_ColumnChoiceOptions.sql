CREATE TYPE [Settings].[tvp_ColumnChoiceOptions] AS TABLE (
    [Active]                SMALLINT           NULL,
    [Code]                  VARCHAR (50)       NULL,
    [ColumnChoiceOptionsID] INT                NULL,
    [CreatedAt]             DATETIMEOFFSET (7) NULL,
    [ID]                    VARCHAR (38)       NULL,
    [Name]                  VARCHAR (255)      NULL,
    [PageID]                INT                NULL,
    [UpdatedAt]             DATETIMEOFFSET (7) NULL,
    [Version]               VARCHAR (255)      NULL);



