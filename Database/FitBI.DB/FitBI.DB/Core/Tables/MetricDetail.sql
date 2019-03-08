CREATE TABLE [Core].[MetricDetail] (
    [MetricDetailID]    INT                IDENTITY (1, 1) NOT NULL,
    [MetricSetID]       INT                CONSTRAINT [DF_MetricDetail_MetricSetID] DEFAULT ((1)) NOT NULL,
    [MeasurementTypeID] INT                CONSTRAINT [DF_MetricDetail_MeasurementTypeID] DEFAULT ((1)) NOT NULL,
    [BodyPartID]        INT                NULL,
    [OrdinalPosition]   INT                CONSTRAINT [DF_MetricDetail_OrdinalPosition] DEFAULT ((0)) NOT NULL,
    [Active]            SMALLINT           CONSTRAINT [DF_MetricDetail_Active] DEFAULT ((1)) NOT NULL,
    [ID]                VARCHAR (38)       CONSTRAINT [DF_MetricDetail_ID] DEFAULT (newid()) NOT NULL,
    [CreatedAt]         DATETIMEOFFSET (7) CONSTRAINT [DF_MetricDetail_CreatedAt] DEFAULT (CONVERT([datetimeoffset],sysutcdatetime())) NOT NULL,
    [UpdatedAt]         DATETIME           CONSTRAINT [DF_MetricDetail_UpdatedAt] DEFAULT (getdate()) NOT NULL,
    [Deleted]           BIT                CONSTRAINT [DF_MetricDetail_Deleted] DEFAULT ((0)) NOT NULL,
    [Version]           ROWVERSION         NOT NULL,
    CONSTRAINT [PK_MetricDetail] PRIMARY KEY CLUSTERED ([MetricDetailID] ASC),
    CONSTRAINT [FK_MetricDetail_Active] FOREIGN KEY ([Active]) REFERENCES [Core].[Active] ([ActiveID]),
    CONSTRAINT [FK_MetricDetail_BodyPart] FOREIGN KEY ([BodyPartID]) REFERENCES [Core].[BodyPart] ([BodyPartID]),
    CONSTRAINT [FK_MetricDetail_MetricSet] FOREIGN KEY ([MetricSetID]) REFERENCES [Core].[MetricSet] ([MetricSetID])
);

