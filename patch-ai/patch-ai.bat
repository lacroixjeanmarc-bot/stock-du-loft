@echo off
chcp 65001 >nul
echo ==========================================
echo  Stock du Loft - Correctif AI v2
echo  Titre + Description detaillee + Categorie
echo ==========================================
echo.

if not exist "src\pages\AddItem.jsx" (
    echo ERREUR: Executez depuis D:\stock-du-loft
    pause
    exit /b 1
)

echo [1/3] Mise a jour functions\index.js...
copy /Y "patch-ai\functions\index.js" "functions\index.js"

echo [2/3] Mise a jour src\services\aiService.js...
copy /Y "patch-ai\src\services\aiService.js" "src\services\aiService.js"

echo [3/3] Mise a jour src\pages\AddItem.jsx...
copy /Y "patch-ai\src\pages\AddItem.jsx" "src\pages\AddItem.jsx"

echo.
echo ==========================================
echo  CORRECTIF APPLIQUE!
echo ==========================================
echo.
echo Maintenant lancez:
echo   firebase deploy --only functions
echo   npm run build
echo   firebase deploy --only hosting
echo ==========================================
pause
