@echo off
echo ========================================
echo   PATCH: Modal Upgrade Interac
echo ========================================
echo.

set PROJECT=D:\stock-du-loft
set PATCH=%~dp0

echo [1/4] Copie de AboutPage.jsx...
copy /Y "%PATCH%src\pages\AboutPage.jsx" "%PROJECT%\src\pages\AboutPage.jsx"
if errorlevel 1 (
    echo ERREUR: Impossible de copier AboutPage.jsx
    pause
    exit /b 1
)
echo       OK!

echo [2/4] Ajout des styles CSS du modal...
type "%PATCH%css-additions.css" >> "%PROJECT%\src\styles.css"
if errorlevel 1 (
    echo ERREUR: Impossible d'ajouter les styles CSS
    pause
    exit /b 1
)
echo       OK!

echo [3/4] Build du projet...
cd /d "%PROJECT%"
call npm run build
if errorlevel 1 (
    echo ERREUR: Le build a echoue
    pause
    exit /b 1
)
echo       OK!

echo [4/4] Deploiement sur Firebase...
call firebase deploy --only hosting
if errorlevel 1 (
    echo ERREUR: Le deploiement a echoue
    pause
    exit /b 1
)
echo       OK!

echo.
echo ========================================
echo   DEPLOIEMENT REUSSI!
echo   Changements:
echo   - Bouton Plan Artisan ouvre un modal
echo   - Instructions virement Interac
echo   - Activation manuelle par admin
echo ========================================
echo.
pause
