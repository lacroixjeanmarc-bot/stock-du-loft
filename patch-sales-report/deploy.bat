@echo off
echo ========================================
echo   PATCH: Rapport des ventes
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

echo [2/4] Ajout des styles CSS du rapport...
type "%PATCH%css-sales-report.css" >> "%PROJECT%\src\styles.css"
if errorlevel 1 (
    echo ERREUR: Impossible d'ajouter les styles CSS
    pause
    exit /b 1
)
echo       OK!

echo [3/4] Build...
cd /d "%PROJECT%"
call npm run build
if errorlevel 1 (
    echo ERREUR: Build echoue
    pause
    exit /b 1
)
echo       OK!

echo [4/4] Deploiement Firebase...
call firebase deploy --only hosting
if errorlevel 1 (
    echo ERREUR: Deploiement echoue
    pause
    exit /b 1
)
echo       OK!

echo.
echo ========================================
echo   DEPLOYE! Rapport des ventes ajoute.
echo   - Ventes brutes du mois
echo   - Nombre d'articles vendus
echo   - Prix moyen
echo   - Cadeaux
echo   - Ventilation par lieu / categorie
echo ========================================
pause
