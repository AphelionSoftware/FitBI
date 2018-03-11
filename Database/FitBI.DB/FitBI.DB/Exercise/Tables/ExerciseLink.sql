CREATE TABLE [Exercise].[ExerciseLink] (
    [ExerciseLinkID] INT                IDENTITY (1, 1) NOT NULL,
    [Code]           VARCHAR (50)       NOT NULL,
    [Name]           VARCHAR (255)      NOT NULL,
    [URL]            VARCHAR (MAX)      NULL,
    [ExerciseID]     INT                NOT NULL,
    [PersonID]       INT                NULL,
    [Active]         SMALLINT           NOT NULL,
    [ID]             VARCHAR (38)       NOT NULL,
    [CreatedAt]      DATETIMEOFFSET (7) NOT NULL,
    [UpdatedAt]      DATETIMEOFFSET (7) NULL,
    [Deleted]        BIT                NOT NULL,
    [Version]        ROWVERSION         NOT NULL,
    CONSTRAINT [PK_ExerciseLinkCategory] PRIMARY KEY CLUSTERED ([ExerciseLinkID] ASC),
    CONSTRAINT [FK_ExerciseLink_Exercise] FOREIGN KEY ([ExerciseID]) REFERENCES [Exercise].[Exercise] ([ExerciseID])
);

