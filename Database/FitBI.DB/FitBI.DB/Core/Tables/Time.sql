CREATE TABLE [Core].[Time] (
    [TimeID]         INT      NOT NULL,
    [TimeInt]        INT      NOT NULL,
    [Time]           TIME (7) NOT NULL,
    [SecondOfMinute] INT      NOT NULL,
    [MinuteOfHour]   INT      NOT NULL,
    [HourOfDay]      INT      NOT NULL,
    [SecondOfHour]   INT      NOT NULL,
    [SecondOfDay]    INT      NOT NULL,
    [MinuteOfDay]    INT      NOT NULL,
    CONSTRAINT [PK_Time] PRIMARY KEY CLUSTERED ([TimeID] ASC),
    CONSTRAINT [IX_Time] UNIQUE NONCLUSTERED ([TimeInt] ASC)
);

