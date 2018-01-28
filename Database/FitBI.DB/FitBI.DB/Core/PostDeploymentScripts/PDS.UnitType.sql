INSERT INTO [Core].[UnitType]
           ([Code]
           ,[Name])
     SELECT Src.Code, Src.Name
	 FROM (
	 SELECT 'IMPERIAL' Code, 'Imperial / American' Name
	 UNION ALL 
	 SELECT 'METRIC' Code, 'Metric' Name
	 )
	Src
	WHERE   NOT EXISTS ( SELECT 1
                             FROM   Core.[UnitType] Dest
                             WHERE  Dest.Code = Src.Code )
