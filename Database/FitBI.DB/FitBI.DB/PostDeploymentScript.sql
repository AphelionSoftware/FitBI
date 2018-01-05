﻿/*
Post-Deployment Script Template							
--------------------------------------------------------------------------------------
 This file contains SQL statements that will be appended to the build script.		
 Use SQLCMD syntax to include a file in the post-deployment script.			
 Example:      :r .\myfile.sql								
 Use SQLCMD syntax to reference a variable in the post-deployment script.		
 Example:      :setvar TableName MyTable							
               SELECT * FROM [$(TableName)]					
--------------------------------------------------------------------------------------
*/
:r .\Core\PostDeploymentScripts\PDS.Active.sql
:r .\Core\PostDeploymentScripts\PDS.Dates.sql
:r .\Core\PostDeploymentScripts\PDS.MeasurementType.sql
:r .\Core\PostDeploymentScripts\PDS.MeasurementTypeCategory.sql
:r .\Core\PostDeploymentScripts\PDS.Time.sql
