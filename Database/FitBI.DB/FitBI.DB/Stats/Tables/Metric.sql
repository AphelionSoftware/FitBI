CREATE TABLE [Stats].[Metric] (
    [MetricID]                 INT                IDENTITY (1, 1) NOT NULL,
    [PersonID]                 INT                NOT NULL,
    [Weight]                   DECIMAL (10, 6)    NULL,
    [BodyFatPercentage]        DECIMAL (10, 6)    NULL,
    [MusclePercentage]         DECIMAL (10, 6)    NULL,
    [WaterPercentage]          DECIMAL (10, 6)    NULL,
    [BonePercentage]           DECIMAL (10, 6)    NULL,
    [PercentMeasurementTypeID] INT                NULL,
    [Active]                   SMALLINT           CONSTRAINT [DF_Metric_Active] DEFAULT ((1)) NOT NULL,
    [ID]                       VARCHAR (38)       CONSTRAINT [DF_Metric_newid_ID] DEFAULT (newid()) NOT NULL,
    [CreatedAt]                DATETIMEOFFSET (7) CONSTRAINT [DF_Metric_CreatedAt] DEFAULT (CONVERT([datetimeoffset],sysutcdatetime())) NOT NULL,
    [UpdatedAt]                DATETIME           CONSTRAINT [DF_Metric_UpdatedAt] DEFAULT (getdate()) NOT NULL,
    [Deleted]                  BIT                CONSTRAINT [DF_Metric_Deleted] DEFAULT ((0)) NOT NULL,
    [Version]                  ROWVERSION         NOT NULL,
    CONSTRAINT [PK_Metric] PRIMARY KEY CLUSTERED ([MetricID] ASC),
    CONSTRAINT [FK_Metric_Active] FOREIGN KEY ([Active]) REFERENCES [Core].[Active] ([ActiveID]),
    CONSTRAINT [FK_Metric_Person] FOREIGN KEY ([PersonID]) REFERENCES [Stats].[Person] ([PersonID])
);












GO

-- =============================================
-- Author:		Mark Stacey
-- Create date: 2018-01-04
-- Description:	Populating UpdatedAt
-- =============================================
CREATE TRIGGER [Stats].trg_Metric_Update
   ON  [Stats].[Metric] 
   AFTER UPDATE
AS 
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;
	UPDATE [Stats].[Metric]  
	SET [Stats].[Metric] .UpdatedAt = CONVERT (DATETIMEOFFSET, sysutcdatetime())    
	FROM [Stats].[Metric]  INNER JOIN inserted 
	ON [Stats].[Metric] .MetricID = inserted.MetricID
	-- Insert statements for trigger here

END