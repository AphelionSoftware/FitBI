 INSERT INTO [Core].[MeasurementType]
           ([Code]
           ,[Name]
		   ,MeasurementTypeCategoryID)
     SELECT Src.Code, Src.Name, MTC.MeasurementTypeCategoryID
	 FROM (
	 
	 SELECT 'DEXA' Code, 'DEXA' Name, 'BF' CatCode
	 UNION ALL
	 SELECT 'BIA' Code, 'Bio Electrical Impedance' Name, 'BF' CatCode
	 UNION ALL
	 SELECT 'CAL7' Code, '7 fold Caliper' Name, 'BF' CatCode
	 UNION ALL
	 SELECT 'CAL4' Code, '4 fold Caliper' Name, 'BF' CatCode
	 UNION ALL
	 SELECT 'CAL3' Code, '3 fold Caliper' Name, 'BF' CatCode
	 UNION ALL
	 SELECT 'NAVY' Code, 'Navy - tape measure' Name, 'BF' CatCode
	 UNION ALL
	 SELECT 'TAPE' Code, 'Tape measure - full' Name, 'BF' CatCode
	 UNION ALL
	 SELECT 'TAPE' Code, 'Tape measure - full' Name, 'BF' CatCode
	 /*http://www.davedraper.com/bodyfat-calculation.html*/
	 
	 UNION ALL
	 SELECT 'N/A' Code, 'Not applicable' Name, 'SIDE' CatCode
	 UNION ALL
	 SELECT 'LEFT' Code, 'Left side' Name, 'SIDE' CatCode
	 UNION ALL
	 SELECT 'RIGHT' Code, 'Right side' Name, 'SIDE' CatCode
	 UNION ALL
	 SELECT 'AVG' Code, 'Average ' Name, 'SIDE' CatCode
	 
	 
	 
	 ) Src
	 INNER JOIN Core.MeasurementTypeCategory MTC
	 ON MTC.Code = Src.CatCode
        WHERE   NOT EXISTS ( SELECT 1
                             FROM   Core.[MeasurementType] Dest
                             WHERE  Dest.Code = Src.Code )
