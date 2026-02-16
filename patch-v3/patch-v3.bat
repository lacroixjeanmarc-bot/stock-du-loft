@echo off
chcp 65001 >nul
echo ==========================================
echo  Stock du Loft - Correctif AI v3
echo  Ajout champ "C'est quoi?" avant analyse
echo ==========================================
echo.

if not exist "src\pages\AddItem.jsx" (
    echo ERREUR: Executez depuis D:\stock-du-loft
    pause
    exit /b 1
)

echo [1/3] Mise a jour functions\index.js...
copy /Y "patch-v3\functions\index.js" "functions\index.js"

echo [2/3] Mise a jour src\services\aiService.js...
copy /Y "patch-v3\src\services\aiService.js" "src\services\aiService.js"

echo [3/3] Mise a jour src\components\AiSuggestButton.jsx...
copy /Y "patch-v3\src\components\AiSuggestButton.jsx" "src\components\AiSuggestButton.jsx"

echo.
echo ==========================================
echo  CORRECTIF v3 APPLIQUE!
echo ==========================================
echo.
echo Maintenant lancez:
echo   firebase deploy --only functions
echo   npm run build
echo   firebase deploy --only hosting
echo ==========================================
pause
