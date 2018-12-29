CREATE TABLE [Exercise].[ExerciseType] (
    [ExerciseTypeID]       INT                IDENTITY (1, 1) NOT NULL,
    [Code]                 VARCHAR (50)       NOT NULL,
    [Name]                 VARCHAR (255)      NOT NULL,
    [ParentExerciseTypeID] INT                NULL,
    [PersonID]             INT                NULL,
    [Active]               SMALLINT           CONSTRAINT [DF_ExerciseType_Active] DEFAULT ((1)) NOT NULL,
    [ID]                   VARCHAR (38)       CONSTRAINT [DF_ExerciseType_ID] DEFAULT (newid()) NOT NULL,
    [CreatedAt]            DATETIMEOFFSET (7) CONSTRAINT [DF_ExerciseType_CreatedAt] DEFAULT (CONVERT([datetimeoffset],sysutcdatetime())) NOT NULL,
    [UpdatedAt]            DATETIME           CONSTRAINT [DF_ExerciseType_UpdatedAt] DEFAULT (getdate()) NOT NULL,
    [Deleted]              BIT                CONSTRAINT [DF_ExerciseType_Deleted] DEFAULT ((0)) NOT NULL,
    [Version]              ROWVERSION         NOT NULL,
    CONSTRAINT [PK_ExerciseTypeCategory] PRIMARY KEY CLUSTERED ([ExerciseTypeID] ASC),
    CONSTRAINT [FK_ExerciseType_Active] FOREIGN KEY ([Active]) REFERENCES [Core].[Active] ([ActiveID]),
    CONSTRAINT [FK_ExerciseType_ExerciseType] FOREIGN KEY ([ParentExerciseTypeID]) REFERENCES [Exercise].[ExerciseType] ([ExerciseTypeID]),
    CONSTRAINT [FK_ExerciseType_Person] FOREIGN KEY ([PersonID]) REFERENCES [Stats].[Person] ([PersonID])
);










GO

-- =============================================
-- Author:		Mark Stacey
-- Create date: 2018-01-04
-- Description:	Populating UpdatedAt
-- =============================================
CREATE TRIGGER [Exercise].trg_ExerciseType_Update
   ON  [Exercise].[ExerciseType] 
   AFTER UPDATE
AS 
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;
	UPDATE [Exercise].[ExerciseType]  
	SET [Exercise].[ExerciseType] .UpdatedAt = CONVERT (DATETIMEOFFSET, sysutcdatetime())    
	FROM [Exercise].[ExerciseType]  INNER JOIN inserted 
	ON [Exercise].[ExerciseType] .ExerciseTypeID = inserted.ExerciseTypeID
	-- Insert statements for trigger here

END