INSERT INTO [Core].[Unit]
           ([Code]
           ,[Name]
		   ,UnitTypeID)
     SELECT Src.Code, Src.Name, UT.UnitTypeID
	 FROM (
	 
	 SELECT 'KG' Code, 'Kilogram' Name, 'METRIC' TypeCode
	 UNION ALL 
	 SELECT 'LB' Code, 'Pound' Name, 'IMPERIAL' TypeCode
	 UNION ALL 
	 SELECT 'CM' Code, 'Centimeter' Name, 'METRIC' TypeCode
	 UNION ALL 
	 SELECT 'IN' Code, 'Inch' Name, 'IMPERIAL' TypeCode
	 )

	 Src
	 INNER JOIN Core.UnitType UT
	 ON UT.Code = Src.TypeCode
     
	 WHERE   NOT EXISTS ( SELECT 1
                             FROM   Core.[Unit] Dest
                             WHERE  Dest.Code = Src.Code )
