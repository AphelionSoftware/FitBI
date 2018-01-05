SET DATEFIRST 1

DECLARE @StartDate DATETIME = '1900/01/01 00:00:00',
@EndDate DATETIME = '1900/01/01 23:59:59'


;WITH cteNumbers AS (
SELECT
	(Number) AS Number,
	DATEADD(s, (Number ) , @StartDate) AS Date
FROM 
	(
		SELECT TOP 86400 ROW_NUMBER() over(order by o.object_id) - 1 number
		FROM sys.objects o
		cross join sys.objects o2
		cross join sys.objects
		
	) Src
	WHERE 
number <= DATEDIFF(s, @StartDate, @EndDate)
)

INSERT INTO [Core].[Time]
(
TimeID, TimeInt, Time, SecondOfMinute, MinuteOfHour, HourOfDay, SecondOfHour, SecondOfDay, MinuteOfDay
)
SELECT TimeID, TimeInt, Time, SecondOfMinute, MinuteOfHour, HourOfDay, SecondOfHour, SecondOfDay, MinuteOfDay

FROM (
	SELECT ROW_NUMBER() OVER (ORDER BY cte.Date) - 1 AS TimeID
	, (DATEPART(hour, cte.Date ) * 10000) 
	 + (DATEPART(minute,cte.Date )  * 100) 
	 + DATEPART(second,cte.Date  ) 
	 AS [TimeInt]
	, CAST(cte.Date AS TIME) AS [Time]
	, DATEPART(SECOND,cte.Date ) SecondOfMinute
	, DATEPART(minute,cte.Date ) MinuteOfHour
	, DATEPART(hour, cte.Date ) HourOfDay
	, (DATEPART(minute,cte.Date ) * 60) + DATEPART(SECOND,cte.Date )  SecondOfHour
	, (DATEPART(hour,cte.Date ) * 3600) + (DATEPART(minute,cte.Date ) * 60) + DATEPART(SECOND,cte.Date )  SecondOfDay
	, (DATEPART(hour,cte.Date ) * 60) + (DATEPART(minute,cte.Date ) )  MinuteOfDay
  FROM cteNumbers cte

  WHERE NOT EXISTS( SELECT 1 FROM core.time	 WHERE time.time = CAST(cte.Date AS TIME))
  ) cte
  ORDER BY cte.Time

  GO