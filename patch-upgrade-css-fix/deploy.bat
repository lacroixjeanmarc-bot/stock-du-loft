@echo off
echo ========================================
echo   FIX: Contraste modal upgrade
echo ========================================
echo.

set PROJECT=D:\stock-du-loft
set PATCH=%~dp0

echo [1/3] Remplacement du CSS du modal...
powershell -Command ^
  "$css = Get-Content '%PROJECT%\src\styles.css' -Raw; ^
   $start = $css.IndexOf('/* ======= UPGRADE MODAL ======='); ^
   if ($start -eq -1) { Write-Host 'ERREUR: Bloc modal non trouve'; exit 1 }; ^
   $beforeModal = $css.Substring(0, $start); ^
   $newCss = Get-Content '%PATCH%css-fix.css' -Raw; ^
   $beforeModal + $newCss | Set-Content '%PROJECT%\src\styles.css' -NoNewline"
if errorlevel 1 (
    echo ERREUR: Impossible de modifier styles.css
    pause
    exit /b 1
)
echo       OK!

echo [2/3] Build...
cd /d "%PROJECT%"
call npm run build
if errorlevel 1 (
    echo ERREUR: Build echoue
    pause
    exit /b 1
)
echo       OK!

echo [3/3] Deploiement Firebase...
call firebase deploy --only hosting
if errorlevel 1 (
    echo ERREUR: Deploiement echoue
    pause
    exit /b 1
)
echo       OK!

echo.
echo ========================================
echo   FIX DEPLOYE! Meilleur contraste.
echo ========================================
pause
