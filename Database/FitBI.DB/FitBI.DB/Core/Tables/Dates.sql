﻿CREATE TABLE [Core].[Dates] (
    [DateID]          INT                NOT NULL,
    [FullDate]        DATETIME           NOT NULL,
    [Date]            DATE               NOT NULL,
    [DateCounter]     INT                NOT NULL,
    [Day]             INT                NOT NULL,
    [DaySuffix]       VARCHAR (11)       NOT NULL,
    [DayOfWeekNumber] INT                NOT NULL,
    [DayOfWeek]       VARCHAR (11)       NOT NULL,
    [DayOfYear]       INT                NOT NULL,
    [WeekOfMonth]     INT                NOT NULL,
    [WeekOfMonthName] VARCHAR (11)       NULL,
    [WeekOfYear]      INT                NOT NULL,
    [WeekOfYearName]  VARCHAR (11)       NULL,
    [MonthNumber]     INT                NOT NULL,
    [ShortMonthName]  VARCHAR (3)        NULL,
    [MonthName]       VARCHAR (11)       NOT NULL,
    [Quarter]         INT                NOT NULL,
    [QuarterName]     VARCHAR (11)       NOT NULL,
    [YearName]        CHAR (4)           NOT NULL,
    [YearNumber]      INT                NOT NULL,
    [YearMonth]       VARCHAR (11)       NOT NULL,
    [YearMonthNumber] INT                NOT NULL,
    [ID]              VARCHAR (38)       DEFAULT (newid()) NOT NULL,
    [CreatedAt]       DATETIMEOFFSET (7) DEFAULT (CONVERT([datetimeoffset],sysutcdatetime())) NOT NULL,
    [UpdatedAt]       DATETIME           CONSTRAINT [DF_Dates_UpdatedAt] DEFAULT (getdate()) NOT NULL,
    [Deleted]         BIT                DEFAULT ((0)) NOT NULL,
    [Version]         ROWVERSION         NOT NULL,
    CONSTRAINT [PK_Dates] PRIMARY KEY CLUSTERED ([DateID] ASC),
    CONSTRAINT [IX_Dates_Date] UNIQUE NONCLUSTERED ([Date] ASC),
    CONSTRAINT [IX_Dates_FullDate] UNIQUE NONCLUSTERED ([FullDate] ASC)
);





