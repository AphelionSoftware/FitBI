CREATE TABLE [Core].[Time] (
    [TimeID]         INT                NOT NULL,
    [TimeInt]        INT                NOT NULL,
    [Time]           TIME (7)           NOT NULL,
    [SecondOfMinute] INT                NOT NULL,
    [MinuteOfHour]   INT                NOT NULL,
    [HourOfDay]      INT                NOT NULL,
    [SecondOfHour]   INT                NOT NULL,
    [SecondOfDay]    INT                NOT NULL,
    [MinuteOfDay]    INT                NOT NULL,
    [ID]             VARCHAR (38)       DEFAULT (newid()) NOT NULL,
    [CreatedAt]      DATETIMEOFFSET (7) DEFAULT (CONVERT([datetimeoffset],sysutcdatetime())) NOT NULL,
    [UpdatedAt]      DATETIMEOFFSET (7) NULL,
    [Deleted]        BIT                DEFAULT ((0)) NOT NULL,
    [Version]        ROWVERSION         NOT NULL,
    CONSTRAINT [PK_Time] PRIMARY KEY CLUSTERED ([TimeID] ASC),
    CONSTRAINT [IX_Time] UNIQUE NONCLUSTERED ([TimeInt] ASC)
);






GO

-- =============================================
-- Author:		Mark Stacey
-- Create date: 2018-01-04
-- Description:	Populating UpdatedAt
-- =============================================
CREATE TRIGGER [Core].trg_Time_Update
   ON  [Core].[Time] 
   AFTER UPDATE
AS 
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;
	UPDATE [Core].[Time]  
	SET [Core].[Time] .UpdatedAt = CONVERT (DATETIMEOFFSET, sysutcdatetime())    
	FROM [Core].[Time]  INNER JOIN inserted 
	ON [Core].[Time] .TimeID = inserted.TimeID
	-- Insert statements for trigger here

END