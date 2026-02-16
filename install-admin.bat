@echo off
chcp 65001 >nul
echo.
echo ========================================
echo   Vitrine Artisan — Admin Page Update
echo ========================================
echo.

cd /d D:\stock-du-loft

if not exist "src\pages" (
    echo ERREUR: Dossier src\pages introuvable.
    pause
    exit /b 1
)

echo [1/4] AdminPage.jsx...
copy /y "AdminPage.jsx" "src\pages\AdminPage.jsx" >nul

echo [2/4] adminService.js...
copy /y "adminService.js" "src\services\adminService.js" >nul

echo [3/4] App.jsx...
copy /y "App.jsx" "src\App.jsx" >nul

echo [4/4] admin-styles.css — ajout au styles.css...
type "admin-styles.css" >> "src\styles.css"

echo.
echo Fichiers installes!
echo.

del /q "AdminPage.jsx" 2>nul
del /q "adminService.js" 2>nul
del /q "App.jsx" 2>nul
del /q "admin-styles.css" 2>nul

echo.
echo Build + Deploy...
echo.

call npm run build
git add .
git commit -m "Ajout page admin: gestion tenants, plans, stats"
git push
call npx firebase deploy --only hosting

echo.
echo ========================================
echo   TERMINE! Page admin en ligne.
echo ========================================
echo.
pause
