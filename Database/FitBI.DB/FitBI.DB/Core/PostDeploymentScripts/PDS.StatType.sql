

INSERT INTO [Core].[StatType]
           ([Code]
           ,[Name]
           ,[Description]
           ,[TableName]
           ,[ColumnName]
           ,[MeasurementTypeCategoryID]
           )
     
	 
SELECT StatName ,StatName, StatName, Tablename, StatName, MeasurementTypeCategoryID
FROM [Core].[MeasurementTypeCategory] MTC 
INNER JOIN (
select 'Weight' StatName, 
'WeightMeasurement' Tablename,
'Weight' Cat
UNION ALL
select 'BodyFatPercentage' StatName, 
'WeightMeasurement' Tablename,
'BF' Cat
UNION ALL
select 'MusclePercentage' StatName, 
'WeightMeasurement' Tablename,
'COMP' Cat
UNION ALL
select 'WaterPercentage' StatName, 
'WeightMeasurement' Tablename,
'COMP' Cat
UNION ALL
select 'BonePercentage' StatName, 
'WeightMeasurement' Tablename,
'COMP' Cat

UNION ALL
select Name ,
'TapeMeasurement' Tablename,
'CIRC' Cat
FROM Core.BodyPart
)
Src
ON SRC.Cat =  MTC.Code

WHERE NOT EXISTS (SELECT 1 FROM Core.StatType ST where ST.Code = Src.StatName)
