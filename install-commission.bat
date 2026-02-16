@echo off
chcp 65001 >nul
echo.
echo ========================================
echo   Stock du Loft — Commission Update
echo ========================================
echo.

cd /d D:\stock-du-loft

:: Vérifier qu'on est au bon endroit
if not exist "src\pages" (
    echo ERREUR: Dossier src\pages introuvable.
    echo Assure-toi que ce script est dans D:\stock-du-loft\
    pause
    exit /b 1
)

:: Vérifier que les fichiers téléchargés sont présents
if not exist "inventoryService.js" (
    echo ERREUR: inventoryService.js introuvable.
    echo Place les 6 fichiers téléchargés dans D:\stock-du-loft\
    pause
    exit /b 1
)

echo [1/6] inventoryService.js...
copy /y "inventoryService.js" "src\services\inventoryService.js" >nul

echo [2/6] AboutPage.jsx...
copy /y "AboutPage.jsx" "src\pages\AboutPage.jsx" >nul

echo [3/6] InventoryList.jsx...
copy /y "InventoryList.jsx" "src\pages\InventoryList.jsx" >nul

echo [4/6] QuickSale.jsx...
copy /y "QuickSale.jsx" "src\pages\QuickSale.jsx" >nul

echo [5/6] Vitrine.jsx...
copy /y "Vitrine.jsx" "src\pages\Vitrine.jsx" >nul

echo [6/6] commission-styles.css — ajout au styles.css...
type "commission-styles.css" >> "src\styles.css"

echo.
echo Fichiers installes avec succes!
echo.

:: Nettoyage des fichiers temporaires
echo Nettoyage...
del /q "inventoryService.js" 2>nul
del /q "AboutPage.jsx" 2>nul
del /q "InventoryList.jsx" 2>nul
del /q "QuickSale.jsx" 2>nul
del /q "Vitrine.jsx" 2>nul
del /q "commission-styles.css" 2>nul

echo.
echo ========================================
echo   Git commit + push
echo ========================================
echo.

git add .
git commit -m "Ajout suivi commissions consigne: magasins, rapport mensuel, calcul auto"
git push

echo.
echo ========================================
echo   Firebase deploy
echo ========================================
echo.

call npx firebase deploy

echo.
echo ========================================
echo   TERMINE! Tout est en ligne.
echo ========================================
echo.
pause
