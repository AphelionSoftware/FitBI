xcopy .\src\config.js.Azure .\src\config.js /y 
call quasar build
xcopy .\dist\*.* "C:\Users\MarkGStacey\Dropbox (Data)\Apps\Azure\FitQuasar" /y /s
xcopy .\src\config.js.dev .\src\config.js /y