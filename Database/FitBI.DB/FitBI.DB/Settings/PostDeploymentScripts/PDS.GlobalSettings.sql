USE [FitBI]
GO

INSERT INTO [Settings].[GlobalSettings]
           ([Code]
           ,[Name]
           ,[Unit]
           ,[intValue]
           )
		SELECT Code, Name, Unit, [intValue]
		FROM (
			 SELECT 'INITEXP' Code, 'Initialization expiry' Name, 'SECONDS' Unit, 86400 [intValue]
			 UNION ALL 
			 SELECT 'COREEXP' Code, 'Core expiry' Name, 'SECONDS' Unit,  86400 [intValue]
		) Src
		WHERE NOT EXISTS (SELECT 1 FROM [Settings].[GlobalSettings] Extant WHERE Extant.Code = Src.Code)