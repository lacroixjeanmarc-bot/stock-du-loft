@echo off
echo ========================================
echo   PATCH: Suivi paiements Interac
echo ========================================
echo.

set PROJECT=D:\stock-du-loft
set PATCH=%~dp0

echo [1/6] Copie adminService.js...
copy /Y "%PATCH%src\services\adminService.js" "%PROJECT%\src\services\adminService.js"
if errorlevel 1 ( echo ERREUR & pause & exit /b 1 )
echo       OK!

echo [2/6] Copie AdminPage.jsx...
copy /Y "%PATCH%src\pages\AdminPage.jsx" "%PROJECT%\src\pages\AdminPage.jsx"
if errorlevel 1 ( echo ERREUR & pause & exit /b 1 )
echo       OK!

echo [3/6] Copie AboutPage.jsx (rapport ventes)...
copy /Y "%PATCH%src\pages\AboutPage.jsx" "%PROJECT%\src\pages\AboutPage.jsx"
if errorlevel 1 ( echo ERREUR & pause & exit /b 1 )
echo       OK!

echo [4/6] Ajout CSS...
findstr /C:"ADMIN PAYMENTS" "%PROJECT%\src\styles.css" >nul 2>&1
if errorlevel 1 (
    type "%PATCH%css-payments.css" >> "%PROJECT%\src\styles.css"
    echo       CSS paiements ajoute!
) else (
    echo       CSS paiements deja present.
)
findstr /C:"SALES REPORT" "%PROJECT%\src\styles.css" >nul 2>&1
if errorlevel 1 (
    type "%PATCH%css-sales-report.css" >> "%PROJECT%\src\styles.css"
    echo       CSS rapport ventes ajoute!
) else (
    echo       CSS rapport ventes deja present.
)

echo [5/6] Build...
cd /d "%PROJECT%"
call npm run build
if errorlevel 1 ( echo ERREUR build & pause & exit /b 1 )
echo       OK!

echo [6/6] Deploiement Firebase...
call firebase deploy --only hosting
if errorlevel 1 ( echo ERREUR deploy & pause & exit /b 1 )
echo       OK!

echo.
echo ========================================
echo   DEPLOYE!
echo   - Modal paiement Interac dans Admin
echo   - Champs: montant, envoyeur, ref, date
echo   - Historique paiements par tenant
echo   - Rapport ventes dans Info
echo   - Sync plan vers Info
echo ========================================
pause
