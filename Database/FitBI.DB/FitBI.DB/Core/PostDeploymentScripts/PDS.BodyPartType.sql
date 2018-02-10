INSERT INTO [Core].[BodyPartType]
           ([Code]
           ,[Name])
     SELECT Src.Code, Src.Name
	 FROM (
	 SELECT 'MUSCLE' Code, 'Muscle' Name
	 UNION ALL 
	 SELECT 'TENDON' Code, 'Tendon' Name
	 UNION ALL 
	 SELECT 'LIGAMENT' Code, 'Ligament' Name
	 UNION ALL 
	SELECT 'BONE' Code, 'Skeletal - bone' Name
	 UNION ALL 
	SELECT 'STRUCTURE' Code, 'Structural - multipart' Name
	)
	Src
	WHERE   NOT EXISTS ( SELECT 1
                             FROM   Core.[BodyPartType] Dest
                             WHERE  Dest.Code = Src.Code )
