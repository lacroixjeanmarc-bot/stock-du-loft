@echo off
chcp 65001 >nul
echo ==========================================
echo  Stock du Loft - Installation AI Photo
echo ==========================================
echo.

REM Verifier qu'on est dans le bon dossier
if not exist "src\pages\AddItem.jsx" (
    echo ERREUR: Ce script doit etre execute depuis D:\stockduloft
    echo Lancez: cd /d D:\stockduloft puis install-ai.bat
    pause
    exit /b 1
)

echo [1/6] Creation du dossier functions...
if not exist "functions" mkdir functions

echo [2/6] Copie de functions\package.json...
copy /Y "stockduloft-ai\functions\package.json" "functions\package.json"

echo [3/6] Copie de functions\index.js...
copy /Y "stockduloft-ai\functions\index.js" "functions\index.js"

echo [4/6] Copie de src\services\aiService.js...
copy /Y "stockduloft-ai\src\services\aiService.js" "src\services\aiService.js"

echo [5/6] Creation de src\components et copie du bouton AI...
if not exist "src\components" mkdir src\components
copy /Y "stockduloft-ai\src\components\AiSuggestButton.jsx" "src\components\AiSuggestButton.jsx"

echo [6/6] Installation des dependances Cloud Functions...
cd functions
call npm install
cd ..

echo.
echo ==========================================
echo  FICHIERS COPIES AVEC SUCCES!
echo ==========================================
echo.
echo PROCHAINES ETAPES MANUELLES:
echo.
echo 1. Modifiez AddItem.jsx (3 ajouts - voir LISEZMOI.txt)
echo.
echo 2. Mettez a jour firebase.json (ajoutez section functions)
echo.
echo 3. Configurez la cle API Anthropic:
echo    firebase functions:secrets:set ANTHROPIC_API_KEY
echo    (collez votre cle sk-ant-... quand demande)
echo.
echo 4. Deployez:
echo    firebase deploy --only functions
echo    npm run build
echo    firebase deploy --only hosting
echo.
echo 5. Testez! Prenez une photo et cliquez "Suggestion AI"
echo ==========================================
pause
