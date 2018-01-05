
INSERT INTO [Core].[MeasurementTypeCategory]
           ([Code]
           ,[Name])
     SELECT Code, Name
	 FROM (
	 
	 SELECT 'BF' Code, 'Bodyfat percentage' Name
	UNION ALL
	 SELECT 'SIDE' Code, 'Body side' Name
	UNION ALL
	 SELECT 'CIRC' Code, 'Circumference' Name
	UNION ALL
	 SELECT 'SKINFOLD' Code, 'Skinfold Thickness' Name
	 	 
	 ) Src
        WHERE   NOT EXISTS ( SELECT 1
                             FROM   Core.[MeasurementTypeCategory] Dest
                             WHERE  Dest.Code = Src.Code )
