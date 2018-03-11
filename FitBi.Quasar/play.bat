xcopy .\src\config.js.Azure .\src\config.js /y 
call quasar dev --play
xcopy .\src\config.js.dev .\src\config.js /y
