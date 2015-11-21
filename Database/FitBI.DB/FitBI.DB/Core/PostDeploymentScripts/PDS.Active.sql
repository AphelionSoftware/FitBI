INSERT  INTO [Core].[Active]
        ( [ActiveID] ,
          [Active] ,
          [Code] ,
          [Name]
        )
        SELECT  Act ,
                Act ,
                Code ,
                Name
        FROM    ( SELECT    1 Act ,
                            'ACT' Code ,
                            'Active' Name
                  UNION ALL
                  SELECT    0 Act ,
                            'INA' Code ,
                            'Inactive' Name
                  UNION ALL
                  SELECT    -1 Act ,
                            'DEL' Code ,
                            'Deleted' Name
                ) Src
        WHERE   NOT EXISTS ( SELECT 1
                             FROM   Core.Active Dest
                             WHERE  Dest.Code = Src.Code )
