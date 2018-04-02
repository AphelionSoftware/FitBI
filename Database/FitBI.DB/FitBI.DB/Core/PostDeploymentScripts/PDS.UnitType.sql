SET IDENTITY_INSERT [Core].[UnitType] ON

INSERT  INTO [Core].[UnitType]
        ( [UnitTypeID] ,
          [Code] ,
          [Name]
        )
        SELECT  ID,
                Code ,
                Name
        FROM    ( SELECT    1 ID,
                            'IMPERIAL' Code ,
                            'Imperial / American' Name
                  UNION ALL
				  SELECT    2 ID,
                            'METRIC' Code , 
                            'Metric' Name
                  
                  
                ) Src
        WHERE   NOT EXISTS ( SELECT 1
                             FROM   Core.UnitType  Dest
                             WHERE  Dest.Code = Src.Code )

SET IDENTITY_INSERT [Core].[UnitType] OFF