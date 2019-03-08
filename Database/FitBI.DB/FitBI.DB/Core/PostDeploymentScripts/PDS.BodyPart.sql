INSERT INTO [Core].[BodyPart]
           ([Code]
           ,[Name]
		   ,BodyPartTypeID
		   ,Bilateral)
     SELECT Src.Code, Src.Name, BPT.BodyPartTypeID, Src.Bilateral
	 FROM (
	 
	 SELECT 'QUAD' Code, 'Quadriceps' Name, 'MUSCLE' TypeCode, 1 Bilateral
		UNION ALL 
	SELECT 'NECK' Code, 'Neck' Name, 'STRUCTURE' TypeCode, 0 Bilateral
	UNION ALL 
	SELECT 'BELLYBUTTON_CIRC' Code, 'Bellybutton - circumference around the body' Name, 'STRUCTURE' TypeCode, 0 Bilateral
UNION ALL 
	SELECT 'BICEP' Code, 'Bicep' Name, 'MUSCLE' TypeCode, 1 Bilateral
	UNION ALL 
	SELECT 'FOREARM' Code, 'Forearm' Name, 'MUSCLE' TypeCode, 1 Bilateral
	UNION ALL 
	SELECT 'CALF' Code, 'Calf' Name, 'MUSCLE' TypeCode, 1 Bilateral
	UNION ALL 
	SELECT 'HIP' Code, 'Hip - circumference around the body' Name, 'STRUCTURE' TypeCode, 0 Bilateral
	UNION ALL 
	SELECT 'WAIST' Code, 'Waist - circumference around the body' Name, 'STRUCTURE' TypeCode, 0 Bilateral
UNION ALL 
	SELECT 'CHEST' Code, 'Chest - circumference around the body' Name, 'STRUCTURE' TypeCode, 0 Bilateral
UNION ALL 
	SELECT 'WRIST' Code, 'Wrist' Name, 'BONE' TypeCode, 1 Bilateral
UNION ALL 
	SELECT 'ANKLE' Code, 'Ankle' Name, 'BONE' TypeCode, 1 Bilateral

	 )

	 Src
	 INNER JOIN Core.BodyPartType BPT
	 ON BPT.Code = Src.TypeCode
     
	 WHERE   NOT EXISTS ( SELECT 1
                             FROM   Core.[BodyPart] Dest
                             WHERE  Dest.Code = Src.Code )
