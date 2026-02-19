@echo off
echo ========================================
echo   Patch - Logo + Routing v2
echo ========================================

set PROJECT=d:\vitrineartisan

echo.
echo === Copie des fichiers source ===
copy /Y "src\App.jsx" "%PROJECT%\src\App.jsx"
copy /Y "src\pages\Vitrine.jsx" "%PROJECT%\src\pages\Vitrine.jsx"
copy /Y "src\pages\AboutPage.jsx" "%PROJECT%\src\pages\AboutPage.jsx"

echo.
echo === Ajout CSS vitrine link ===
type "css-vitrine-link.css" >> "%PROJECT%\src\styles.css"

echo.
echo === Copie des icones et logos ===
copy /Y "public\pwa-192x192.png" "%PROJECT%\public\pwa-192x192.png"
copy /Y "public\pwa-512x512.png" "%PROJECT%\public\pwa-512x512.png"
copy /Y "public\favicon.ico" "%PROJECT%\public\favicon.ico"
copy /Y "public\favicon.svg" "%PROJECT%\public\favicon.svg"
copy /Y "public\logo.svg" "%PROJECT%\public\logo.svg"
copy /Y "public\icon-palette.svg" "%PROJECT%\public\icon-palette.svg"

echo.
echo === Build ===
cd /d %PROJECT%
call npm run build

echo.
echo === Deploy ===
call firebase deploy --only hosting

echo.
echo ========================================
echo   TERMINE!
echo.
echo   URLs:
echo   - vitrineartisan.web.app/       = Landing page
echo   - vitrineartisan.web.app/app    = Gestion inventaire
echo   - vitrineartisan.web.app/vitrine/slug = Vitrine publique
echo.
echo   Nouveau logo palette deploye!
echo ========================================
pause
