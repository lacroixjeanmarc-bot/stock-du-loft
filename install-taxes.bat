@echo off
chcp 65001 >nul
echo.
echo ========================================
echo   Vitrine Artisan — Taxes de vente
echo ========================================
echo.

cd /d D:\stock-du-loft

if not exist "src\pages" (
    echo ERREUR: Dossier src\pages introuvable.
    pause
    exit /b 1
)

echo [1/4] AboutPage.jsx (section taxes)...
copy /y "AboutPage.jsx" "src\pages\AboutPage.jsx" >nul

echo [2/4] QuickSale.jsx (calcul taxes)...
copy /y "QuickSale.jsx" "src\pages\QuickSale.jsx" >nul

echo [3/4] inventoryService.js (taxData)...
copy /y "inventoryService.js" "src\services\inventoryService.js" >nul

echo [4/4] tax-styles.css — ajout au styles.css...
type "tax-styles.css" >> "src\styles.css"

echo.
echo Fichiers installes!
echo.

del /q "AboutPage.jsx" 2>nul
del /q "QuickSale.jsx" 2>nul
del /q "inventoryService.js" 2>nul
del /q "tax-styles.css" 2>nul

echo.
echo Build + Deploy...
echo.

call npm run build
git add .
git commit -m "Ajout taxes de vente: toggle TPS/TVQ, calcul auto, section info legale"
git push
call npx firebase deploy --only hosting

echo.
echo ========================================
echo   TERMINE! Taxes de vente en ligne.
echo ========================================
echo.
pause
