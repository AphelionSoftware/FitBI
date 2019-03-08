CREATE TABLE [Stats].[MetricValue] (
    [MetricValueID]  INT                IDENTITY (1, 1) NOT NULL,
    [PersonID]       INT                NOT NULL,
    [MetricDetailID] INT                NOT NULL,
    [Active]         SMALLINT           CONSTRAINT [DF_MetricValue_Active] DEFAULT ((1)) NOT NULL,
    [ID]             VARCHAR (38)       CONSTRAINT [DF_MetricValue_newid_ID] DEFAULT (newid()) NOT NULL,
    [CreatedAt]      DATETIMEOFFSET (7) CONSTRAINT [DF_MetricValue_CreatedAt] DEFAULT (CONVERT([datetimeoffset],sysutcdatetime())) NOT NULL,
    [UpdatedAt]      DATETIME           CONSTRAINT [DF_MetricValue_UpdatedAt] DEFAULT (getdate()) NOT NULL,
    [Deleted]        BIT                CONSTRAINT [DF_MetricValue_Deleted] DEFAULT ((0)) NOT NULL,
    [Version]        ROWVERSION         NOT NULL,
    CONSTRAINT [PK_MetricValue] PRIMARY KEY CLUSTERED ([MetricValueID] ASC),
    CONSTRAINT [FK_MetricValue_Active] FOREIGN KEY ([Active]) REFERENCES [Core].[Active] ([ActiveID]),
    CONSTRAINT [FK_MetricValue_MetricDetail] FOREIGN KEY ([MetricDetailID]) REFERENCES [Core].[MetricDetail] ([MetricDetailID]),
    CONSTRAINT [FK_MetricValue_Person] FOREIGN KEY ([PersonID]) REFERENCES [Stats].[Person] ([PersonID])
);

