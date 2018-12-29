CREATE TABLE [Core].[Active] (
    [ActiveID]  SMALLINT           NOT NULL,
    [Code]      CHAR (3)           NOT NULL,
    [Name]      VARCHAR (9)        NOT NULL,
    [Id]        VARCHAR (38)       CONSTRAINT [DF_Active_Id] DEFAULT (newid()) NOT NULL,
    [Version]   ROWVERSION         NOT NULL,
    [CreatedAt] DATETIMEOFFSET (7) CONSTRAINT [DF_Active_CreatedAt] DEFAULT (CONVERT([datetimeoffset],sysutcdatetime())) NOT NULL,
    [UpdatedAt] DATETIME           CONSTRAINT [DF_Active_UpdatedAt] DEFAULT (getdate()) NOT NULL,
    [Deleted]   BIT                CONSTRAINT [DF_Active_Deleted] DEFAULT ((0)) NOT NULL,
    CONSTRAINT [PK_Active] PRIMARY KEY CLUSTERED ([ActiveID] ASC)
);










GO
-- =============================================
-- Author:		Mark Stacey
-- Create date: 2018-01-04
-- Description:	Populating UpdatedAt
-- =============================================
CREATE TRIGGER Core.trg_Active_Update
   ON  Core.Active 
   AFTER UPDATE
AS 
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;
	UPDATE Active 
	SET Active.UpdatedAt = CONVERT (DATETIMEOFFSET, sysutcdatetime())    
	FROM Active INNER JOIN inserted 
	ON Active.ActiveID = inserted.ActiveID
	-- Insert statements for trigger here

END