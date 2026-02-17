@echo off
echo ========================================
echo   PATCH: Sync plan + Rapport ventes
echo ========================================
echo.

set PROJECT=D:\stock-du-loft
set PATCH=%~dp0

echo [1/5] Copie de adminService.js...
copy /Y "%PATCH%src\services\adminService.js" "%PROJECT%\src\services\adminService.js"
if errorlevel 1 (
    echo ERREUR: Impossible de copier adminService.js
    pause
    exit /b 1
)
echo       OK!

echo [2/5] Copie de AboutPage.jsx (avec rapport ventes)...
copy /Y "%PATCH%src\pages\AboutPage.jsx" "%PROJECT%\src\pages\AboutPage.jsx"
if errorlevel 1 (
    echo ERREUR: Impossible de copier AboutPage.jsx
    pause
    exit /b 1
)
echo       OK!

echo [3/5] Ajout CSS rapport ventes (si pas deja present)...
findstr /C:"SALES REPORT" "%PROJECT%\src\styles.css" >nul 2>&1
if errorlevel 1 (
    type "%PATCH%css-sales-report.css" >> "%PROJECT%\src\styles.css"
    echo       CSS ajoute!
) else (
    echo       CSS deja present, skip.
)

echo [4/5] Build...
cd /d "%PROJECT%"
call npm run build
if errorlevel 1 (
    echo ERREUR: Build echoue
    pause
    exit /b 1
)
echo       OK!

echo [5/5] Deploiement Firebase...
call firebase deploy --only hosting
if errorlevel 1 (
    echo ERREUR: Deploiement echoue
    pause
    exit /b 1
)
echo       OK!

echo.
echo ========================================
echo   DEPLOYE!
echo   - Admin: activer plan sync vers Info
echo   - Rapport ventes du mois ajoute
echo   - Renouveler/retrograder sync aussi
echo ========================================
pause
