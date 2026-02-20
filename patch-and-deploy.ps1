# patch-and-deploy.ps1
# Patch: Email cliquable + Admin theme clair

$ErrorActionPreference = "Stop"
Set-Location "D:\vitrineartisan"

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  PATCH: Email cliquable + Admin clair" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# ---- PATCH 1: AboutPage.jsx - Add emailCopied state + handleCopyEmail ----
Write-Host "[1/4] Patch AboutPage.jsx - Ajout copie email..." -ForegroundColor Yellow

$aboutFile = "src\pages\AboutPage.jsx"
$about = [System.IO.File]::ReadAllText($aboutFile, [System.Text.Encoding]::UTF8)

if ($about.Contains("emailCopied")) {
    Write-Host "  -> Deja patche (state), skip." -ForegroundColor Gray
} else {
    $oldState = 'const [selectedPlan, setSelectedPlan] = useState(null);'
    $newState = @'
const [selectedPlan, setSelectedPlan] = useState(null);
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('lacroix.jeanmarc@gmail.com');
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2500);
    } catch (err) {
      const input = document.createElement('input');
      input.value = 'lacroix.jeanmarc@gmail.com';
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2500);
    }
  };
'@
    $about = $about.Replace($oldState, $newState)
    Write-Host "  -> State + fonction ajoutes." -ForegroundColor Green
}

# ---- PATCH 2: AboutPage.jsx - Email box cliquable + mailto ----
Write-Host "[2/4] Patch AboutPage.jsx - Email box cliquable..." -ForegroundColor Yellow

if ($about.Contains("upgrade-modal-mailto-link")) {
    Write-Host "  -> Deja patche (mailto), skip." -ForegroundColor Gray
} else {
    $about = $about.Replace(
        '<div className="upgrade-modal-email-box">',
        '<div className="upgrade-modal-email-box" onClick={handleCopyEmail} style={{ cursor: ''pointer'' }}>'
    )

    $oldAddr = '<span className="upgrade-modal-email-address">lacroix.jeanmarc@gmail.com</span>
              </div>'
    $newAddr = @'
<span className="upgrade-modal-email-address">lacroix.jeanmarc@gmail.com</span>
                <span className="upgrade-modal-email-copy">{emailCopied ? '✅ Copié!' : '📋'}</span>
              </div>
              <a href="mailto:lacroix.jeanmarc@gmail.com" className="upgrade-modal-mailto-link">
                ✉️ Ouvrir mon application courriel
              </a>
'@
    $about = $about.Replace($oldAddr, $newAddr)
    Write-Host "  -> onClick + mailto ajoutes." -ForegroundColor Green
}

[System.IO.File]::WriteAllText($aboutFile, $about, (New-Object System.Text.UTF8Encoding $true))
Write-Host "  -> AboutPage.jsx sauvegarde." -ForegroundColor Green

# ---- PATCH 3: styles.css - Admin light theme + mailto styles ----
Write-Host "[3/4] Patch styles.css - Admin theme clair..." -ForegroundColor Yellow

$cssFile = "src\styles.css"
$css = [System.IO.File]::ReadAllText($cssFile, [System.Text.Encoding]::UTF8)

$adminPatch = [System.IO.File]::ReadAllText("admin-light-patch.css", [System.Text.Encoding]::UTF8)
$mailtoPatch = [System.IO.File]::ReadAllText("mailto-patch.css", [System.Text.Encoding]::UTF8)

if ($css.Contains("LIGHT OVERRIDE")) {
    Write-Host "  -> Admin light deja present, skip." -ForegroundColor Gray
} else {
    $marker1 = "/* ======= ADMIN PAYMENTS HISTORY ======= */"
    $css = $css.Replace($marker1, "$adminPatch`n$marker1")
    Write-Host "  -> Admin light theme insere." -ForegroundColor Green
}

if ($css.Contains("EMAIL COPY")) {
    Write-Host "  -> Mailto styles deja present, skip." -ForegroundColor Gray
} else {
    $marker2 = "@keyframes fadeIn {"
    $css = $css.Replace($marker2, "$mailtoPatch`n$marker2")
    Write-Host "  -> Mailto styles inseres." -ForegroundColor Green
}

[System.IO.File]::WriteAllText($cssFile, $css, (New-Object System.Text.UTF8Encoding $true))
Write-Host "  -> styles.css sauvegarde." -ForegroundColor Green

# ---- PATCH 4: Build + Deploy ----
Write-Host ""
Write-Host "[4/4] Build + Deploy..." -ForegroundColor Yellow
Write-Host ""

Remove-Item "admin-light-patch.css" -ErrorAction SilentlyContinue
Remove-Item "mailto-patch.css" -ErrorAction SilentlyContinue

npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "ERREUR: Build echoue!" -ForegroundColor Red
    Read-Host "Appuyez sur Entree"
    exit 1
}

git add .
git commit -m "Fix: email cliquable modal upgrade + admin theme clair"
git push

npx firebase deploy --only hosting

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "  TERMINE!" -ForegroundColor Green
Write-Host "  - Email cliquable dans modal upgrade" -ForegroundColor Green
Write-Host "  - Page admin theme clair" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Read-Host "Appuyez sur Entree"
