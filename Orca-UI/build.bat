del .\dist\spa-mat\*.* /s /q
del "C:\Users\MarkGStacey\Dropbox (Data)\Apps\Azure\FitQuasar" /s /q
call quasar build
xcopy .\dist\web.config "C:\Users\MarkGStacey\Dropbox (Data)\Apps\Azure\FitQuasar" /y
xcopy .\dist\spa-mat\*.* "C:\Users\MarkGStacey\Dropbox (Data)\Apps\Azure\FitQuasar" /y /s
