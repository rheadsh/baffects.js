REM @ECHO OFF 

md   %userprofile%\Documents\baffectsjs-target
xcopy . %userprofile%\Documents\baffectsjs-target\lib\ /E
md %userprofile%\Documents\baffectsjs-target\sketches