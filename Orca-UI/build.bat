call quasar build
del .\dist\spa-mat\*.* /s /q
del "C:\Users\MarkGStacey\Dropbox (Data)\Apps\Azure\FitQuasar" /s /q
xcopy .\dist\spa-mat\*.* "C:\Users\MarkGStacey\Dropbox (Data)\Apps\Azure\FitQuasar" /y /s
