CREATE TYPE [UserSettings].[tvp_Favorite] AS TABLE (
    [Active]      SMALLINT           NULL,
    [Code]        VARCHAR (50)       NULL,
    [CreatedAt]   DATETIMEOFFSET (7) NULL,
    [Deleted]     BIT                NULL,
    [FavoriteID]  INT                NULL,
    [ID]          VARCHAR (38)       NULL,
    [isFavorite]  BIT                NULL,
    [MetricSetID] INT                NULL,
    [Name]        VARCHAR (255)      NULL,
    [UpdatedAt]   DATETIME           NULL,
    [UserID]      INT                NULL,
    [Version]     VARCHAR (255)      NULL);

