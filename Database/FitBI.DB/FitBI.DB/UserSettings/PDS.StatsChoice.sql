INSERT INTO [UserSettings].[StatsChoice]
           ([UserID]
           ,[StatTypeID]
           )
     

SELECT UserID, ST.StatTypeID
FROM [Security].[User] U
CROSS JOIN Core.StatType ST
WHERE ST.Code IN
(
'Neck'
,'Bellybutton - circumference around the body'
,'Weight')

AND NOT EXISTS (SELECT 1 FROM [UserSettings].[StatsChoice] SC WHERE SC.UserID = U.UserID)
