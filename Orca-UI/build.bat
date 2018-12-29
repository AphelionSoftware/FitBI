del .\dist\spa-mat\*.* /s /q
del "%userprofile%\Dropbox (Data)\Apps\Azure\FitQuasar" /s /q
call quasar build
xcopy .\dist\web.config "%userprofile%\Dropbox (Data)\Apps\Azure\FitQuasar" /y
xcopy .\dist\spa-mat\*.* "%userprofile%\Dropbox (Data)\Apps\Azure\FitQuasar" /y /s
