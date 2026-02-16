@echo off
chcp 65001 >nul
echo.
echo ========================================
echo   Stock du Loft — Abonnement Update
echo ========================================
echo.

cd /d D:\stock-du-loft

if not exist "src\pages" (
    echo ERREUR: Dossier src\pages introuvable.
    pause
    exit /b 1
)

echo [1/2] AboutPage.jsx...
copy /y "AboutPage.jsx" "src\pages\AboutPage.jsx" >nul

echo [2/2] subscription-styles.css — ajout au styles.css...
type "subscription-styles.css" >> "src\styles.css"

echo.
echo Fichiers installes!
echo.

del /q "AboutPage.jsx" 2>nul
del /q "subscription-styles.css" 2>nul

echo.
echo Build + Deploy...
echo.

call npm run build
git add .
git commit -m "Ajout section abonnement (12.99$/mois ou 100$/an)"
git push
call npx firebase deploy --only hosting

echo.
echo ========================================
echo   TERMINE! Version 1.2 en ligne.
echo ========================================
echo.
pause
