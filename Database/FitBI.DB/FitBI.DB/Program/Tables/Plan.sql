CREATE TABLE [Program].[Plan] (
    [PlanID]          INT                IDENTITY (1, 1) NOT NULL,
    [Name]            VARCHAR (255)      NOT NULL,
    [StartDate]       DATE               CONSTRAINT [DF_Plan_StartDate] DEFAULT (CONVERT([datetimeoffset],sysutcdatetime())) NOT NULL,
    [GoalNarrative]   VARCHAR (MAX)      NULL,
    [PersonID]        INT                NOT NULL,
    [PlannerPersonID] INT                NULL,
    [isTemplate]      BIT                CONSTRAINT [DF_Plan_isTemplate] DEFAULT ((0)) NOT NULL,
    [Active]          SMALLINT           CONSTRAINT [DF_Plan_Active] DEFAULT ((1)) NOT NULL,
    [ID]              VARCHAR (38)       CONSTRAINT [DF_Plan_ID] DEFAULT (newid()) NOT NULL,
    [CreatedAt]       DATETIMEOFFSET (7) CONSTRAINT [DF_Plan_CreatedAt] DEFAULT (CONVERT([datetimeoffset],sysutcdatetime())) NOT NULL,
    [UpdatedAt]       DATETIME           CONSTRAINT [DF_Plan_UpdatedAt] DEFAULT (getdate()) NOT NULL,
    [Deleted]         BIT                CONSTRAINT [DF_Plan_Deleted] DEFAULT ((0)) NOT NULL,
    [Version]         ROWVERSION         NOT NULL,
    CONSTRAINT [PK_Plan] PRIMARY KEY CLUSTERED ([PlanID] ASC),
    CONSTRAINT [FK_Plan_Active] FOREIGN KEY ([Active]) REFERENCES [Core].[Active] ([ActiveID]),
    CONSTRAINT [FK_Plan_Person] FOREIGN KEY ([PersonID]) REFERENCES [Stats].[Person] ([PersonID]),
    CONSTRAINT [FK_Plan_Person1] FOREIGN KEY ([PlannerPersonID]) REFERENCES [Stats].[Person] ([PersonID])
);










GO

-- =============================================
-- Author:		Mark Stacey
-- Create date: 2018-01-04
-- Description:	Populating UpdatedAt
-- =============================================
CREATE TRIGGER [Program].trg_Plan_Update
   ON  [Program].[Plan] 
   AFTER UPDATE
AS 
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;
	UPDATE [Program].[Plan]  
	SET [Program].[Plan] .UpdatedAt = CONVERT (DATETIMEOFFSET, sysutcdatetime())    
	FROM [Program].[Plan]  INNER JOIN inserted 
	ON [Program].[Plan] .PlanID = inserted.PlanID
	-- Insert statements for trigger here

END