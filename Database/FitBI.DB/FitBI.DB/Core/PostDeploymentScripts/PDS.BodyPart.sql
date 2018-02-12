INSERT INTO [Core].[BodyPart]
           ([Code]
           ,[Name]
		   ,BodyPartTypeID)
     SELECT Src.Code, Src.Name, BPT.BodyPartTypeID
	 FROM (
	 
	 SELECT 'QUAD' Code, 'Quadriceps' Name, 'MUSCLE' TypeCode
		UNION ALL 
	SELECT 'NECK' Code, 'Neck' Name, 'STRUCTURE' TypeCode
	UNION ALL 
	SELECT 'BELLYBUTTON_CIRC' Code, 'Bellybutton - circumference around the body' Name, 'STRUCTURE' TypeCode

	 )

	 Src
	 INNER JOIN Core.BodyPartType BPT
	 ON BPT.Code = Src.TypeCode
     
	 WHERE   NOT EXISTS ( SELECT 1
                             FROM   Core.[BodyPart] Dest
                             WHERE  Dest.Code = Src.Code )
