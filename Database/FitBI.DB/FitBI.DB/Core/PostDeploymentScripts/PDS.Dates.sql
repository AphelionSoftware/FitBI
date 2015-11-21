SET DATEFIRST 1

DECLARE @StartDate DATE = '1900/01/01',
@EndDate DATE = '2020/12/01'


;WITH cteNumbers AS (
SELECT
	(a.Number * 2048) + b.Number AS Number,
	DATEADD(d, (a.Number * 2048) + b.Number, @StartDate) AS Date
FROM 
	(
		SELECT number
		FROM master..spt_values
		WHERE 
			type = 'P'
	) a (Number),
	(
		SELECT number
		FROM master..spt_values
		WHERE 
			type = 'P'
	) b (Number)

WHERE (a.Number * 2048) + b.Number <= DATEDIFF(d, @StartDate, @EndDate)
)

INSERT INTO [Core].[Dates]
           ([DateID]
		   ,[FullDate]
           ,[Date]
           ,[DateCounter]
           ,[Day]
           ,[DaySuffix]
           ,[DayOfWeekNumber]
           ,[DayOfWeek]
           ,[DayOfYear]
           ,[WeekOfMonth]
           ,[WeekOfMonthName]
           ,[WeekOfYear]
           ,[WeekOfYearName]
           ,[MonthNumber]
           ,[ShortMonthName]
           ,[MonthName]
           ,[Quarter]
           ,[QuarterName]
           ,[YearName]
           ,[YearNumber]
           ,[YearMonth]
           ,[YearMonthNumber])

SELECT DateID, FullDate, Date, DateCounter, Day, DaySuffix, DayOfWeekNumber, DayOfWeek, DayOfYear, WeekOfMonth, WeekOfMonthName, WeekOfYear, WeekOfYearName, MonthNumber, ShortMonthName, MonthName, Quarter, QuarterName, YearName, YearNumber, YearMonth, YearMonthNumber
FROM (

SELECT  CAST(CONVERT(VARCHAR(10), cte.Date, 112) AS INT) [DateID]
      ,cte.Date [FullDate]
      ,cte.Date [Date]
	  ,CAST(ROW_NUMBER() OVER (ORDER BY cte.Date) AS INT) [DateCounter]
      ,DAY(cte.Date) [Day]
      ,CASE WHEN DAY(cte.Date) = 1 THEN  'st' 
			WHEN DAY(cte.Date) = 2 THEN 'nd'
			ELSE 'rd' END [DaySuffix]
      ,DATEPART(dw, GETDATE()) [DayOfWeekNumber]
      ,CAST(DATENAME(dw, GETDATE()) AS VARCHAR(11)) [DayOfWeek]
      ,DATEPART(DAYOFYEAR, GETDATE()) [DayOfYear]
      ,datediff(week, dateadd(month, datediff(month, 0, cte.Date), 0), cte.Date) +1 [WeekOfMonth]
      ,CAST(YEAR(cte.Date) AS CHAR(4)) + ' ' + RIGHT( '00' + CAST(DATEDIFF(week, dateadd(month, datediff(month, 0, cte.Date), 0), cte.Date) +1 AS VARCHAR(3)),2) +' wk' [WeekOfMonthName]
      ,DATEPART(wk, GETDATE()) [WeekOfYear]
      ,CAST(YEAR(cte.Date) AS CHAR(4)) + ' ' + RIGHT( '00' + CAST(DATEPART(wk, GETDATE()) AS VARCHAR(3)),2) +' wk' [WeekOfYearName]
	  ,DATEPART(M, cte.Date) [MonthNumber]
      ,CAST(DATENAME(M, cte.Date) AS VARCHAR(11)) [MonthName]
      ,CAST(LEFT(DATENAME(M, cte.Date),3) AS VARCHAR(3))  [ShortMonthName]
      ,DATEPART(Q, cte.Date)  [Quarter]
      ,CAST(YEAR(cte.Date) AS CHAR(4)) + ' Q' + CAST(DATEPART(Q, cte.Date) AS varchar(3))[QuarterName]
      ,CAST(YEAR(cte.Date) AS CHAR(4)) [YearName]
      ,YEAR(cte.Date) [YearNumber]
      ,CAST(YEAR(cte.Date) AS CHAR(4)) + ' - ' + RIGHT( '00' + CAST(DATEPART(m, GETDATE()) AS VARCHAR(3)),2) [YearMonth]
      ,CAST(ROW_NUMBER() OVER( PARTITION BY DAY(cte.Date) ORDER BY CTE.Date) AS INT ) [YearMonthNumber]
	  --INTO temp
  FROM cteNumbers cte

  WHERE NOT EXISTS( SELECT 1 FROM core.dates	 WHERE dates.date = cte.date)
  ) cte
  ORDER BY cte.Date
