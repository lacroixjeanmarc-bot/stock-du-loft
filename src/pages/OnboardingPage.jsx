import { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import {
  generateSlug,
  isSlugAvailable,
  isPrefixAvailable,
  createTenant,
  THEMES
} from '../services/tenantService';

export default function OnboardingPage() {
  const { user, completeOnboarding, logout } = useAuth();

  const [step, setStep] = useState(1);
  const [businessName, setBusinessName] = useState('');
  const [ownerName, setOwnerName] = useState(user?.displayName || '');
  const [prefix, setPrefix] = useState('');
  const [slug, setSlug] = useState('');
  const [theme, setTheme] = useState('dark-copper');
  const [slugAvailable, setSlugAvailable] = useState(null);
  const [prefixAvailable, setPrefixAvailable] = useState(null);
  const [checkingSlug, setCheckingSlug] = useState(false);
  const [checkingPrefix, setCheckingPrefix] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  // Auto-générer slug et préfixe quand le nom change
  useEffect(() => {
    if (businessName.trim().length >= 3) {
      const autoSlug = generateSlug(businessName);
      setSlug(autoSlug);

      // Générer un préfixe de 3 lettres à partir du nom
      const words = businessName.trim().split(/\s+/);
      let autoPrefix;
      if (words.length >= 3) {
        autoPrefix = words.map(w => w[0]).join('').substring(0, 3).toUpperCase();
      } else if (words.length === 2) {
        autoPrefix = (words[0].substring(0, 2) + words[1][0]).toUpperCase();
      } else {
        autoPrefix = words[0].substring(0, 3).toUpperCase();
      }
      setPrefix(autoPrefix);
    }
  }, [businessName]);

  // Vérifier disponibilité du slug
  useEffect(() => {
    if (slug.length < 3) { setSlugAvailable(null); return; }
    setCheckingSlug(true);
    const timer = setTimeout(async () => {
      const available = await isSlugAvailable(slug);
      setSlugAvailable(available);
      setCheckingSlug(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [slug]);

  // Vérifier disponibilité du préfixe
  useEffect(() => {
    if (prefix.length < 2) { setPrefixAvailable(null); return; }
    setCheckingPrefix(true);
    const timer = setTimeout(async () => {
      const available = await isPrefixAvailable(prefix);
      setPrefixAvailable(available);
      setCheckingPrefix(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [prefix]);

  const canProceedStep1 = businessName.trim().length >= 3 && ownerName.trim().length >= 2;
  const canProceedStep2 = prefixAvailable && slugAvailable && prefix.length >= 2 && slug.length >= 3;

  const handleSubmit = async () => {
    setError('');
    setSaving(true);
    try {
      const profile = await createTenant(user.uid, {
        businessName: businessName.trim(),
        ownerName: ownerName.trim(),
        email: user.email || '',
        prefix: prefix.toUpperCase(),
        slug,
        theme
      });
      completeOnboarding(profile);
    } catch (err) {
      console.error('Erreur onboarding:', err);
      setError('Erreur lors de la création. Réessayez.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="onboarding-page">
      <div className="onboarding-card">
        <div className="onboarding-header">
          <span className="onboarding-logo">🎨</span>
          <h1>Bienvenue sur Vitrine Artisan</h1>
          <p>Configurons votre espace en quelques étapes</p>
        </div>

        {/* Indicateur d'étapes */}
        <div className="onboarding-steps-indicator">
          {[1, 2, 3].map(s => (
            <div key={s} className={`step-dot ${step >= s ? 'active' : ''} ${step === s ? 'current' : ''}`}>
              {s}
            </div>
          ))}
        </div>

        {/* Étape 1 : Infos de base */}
        {step === 1 && (
          <div className="onboarding-step">
            <h2>Votre atelier</h2>
            <div className="form-group">
              <label className="form-label">Nom de votre entreprise / atelier *</label>
              <input
                type="text"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                className="form-input"
                placeholder="Ex: L'Atelier de Marie, Créations Soleil..."
                autoFocus
              />
            </div>
            <div className="form-group">
              <label className="form-label">Votre nom *</label>
              <input
                type="text"
                value={ownerName}
                onChange={(e) => setOwnerName(e.target.value)}
                className="form-input"
                placeholder="Votre prénom et nom"
              />
            </div>
            <button
              className="btn btn-primary btn-full"
              onClick={() => setStep(2)}
              disabled={!canProceedStep1}
            >
              Continuer →
            </button>
          </div>
        )}

        {/* Étape 2 : Préfixe et slug */}
        {step === 2 && (
          <div className="onboarding-step">
            <h2>Identifiants uniques</h2>

            <div className="form-group">
              <label className="form-label">Préfixe pour vos articles *</label>
              <input
                type="text"
                value={prefix}
                onChange={(e) => setPrefix(e.target.value.toUpperCase().replace(/[^A-Z]/g, '').substring(0, 5))}
                className="form-input"
                placeholder="Ex: ADL, CRS, MAR"
                maxLength={5}
                style={{ textTransform: 'uppercase' }}
              />
              <p className="form-hint">
                Vos articles seront numérotés {prefix || 'XXX'}-001, {prefix || 'XXX'}-002...
                {checkingPrefix && ' ⏳'}
                {!checkingPrefix && prefixAvailable === true && ' ✅ Disponible'}
                {!checkingPrefix && prefixAvailable === false && ' ❌ Déjà pris'}
              </p>
            </div>

            <div className="form-group">
              <label className="form-label">Adresse de votre vitrine *</label>
              <div className="slug-input-wrapper">
                <span className="slug-prefix">vitrineartisan.ca/vitrine/</span>
                <input
                  type="text"
                  value={slug}
                  onChange={(e) => setSlug(generateSlug(e.target.value))}
                  className="form-input slug-input"
                  placeholder="mon-atelier"
                />
              </div>
              <p className="form-hint">
                {checkingSlug && '⏳ Vérification...'}
                {!checkingSlug && slugAvailable === true && '✅ Disponible'}
                {!checkingSlug && slugAvailable === false && '❌ Déjà pris — essayez un autre'}
              </p>
            </div>

            <div className="onboarding-nav-btns">
              <button className="btn btn-secondary" onClick={() => setStep(1)}>
                ← Retour
              </button>
              <button
                className="btn btn-primary"
                onClick={() => setStep(3)}
                disabled={!canProceedStep2}
              >
                Continuer →
              </button>
            </div>
          </div>
        )}

        {/* Étape 3 : Thème */}
        {step === 3 && (
          <div className="onboarding-step">
            <h2>Choisissez votre thème</h2>
            <p className="onboarding-step-desc">Vous pourrez le changer plus tard dans les paramètres.</p>

            <div className="theme-grid">
              {Object.entries(THEMES).map(([id, t]) => (
                <button
                  key={id}
                  className={`theme-card ${theme === id ? 'selected' : ''}`}
                  onClick={() => setTheme(id)}
                >
                  <div className="theme-preview-swatch" style={{ backgroundColor: t.vars['--bg-primary'] }}>
                    <div className="theme-preview-accent" style={{ backgroundColor: t.preview }} />
                  </div>
                  <span className="theme-name">{t.name}</span>
                </button>
              ))}
            </div>

            {error && <p className="onboarding-error">{error}</p>}

            <div className="onboarding-summary">
              <h4>Résumé</h4>
              <p>🏪 {businessName}</p>
              <p>👤 {ownerName}</p>
              <p>🏷️ Préfixe : {prefix}</p>
              <p>🔗 vitrineartisan.ca/vitrine/{slug}</p>
            </div>

            <div className="onboarding-nav-btns">
              <button className="btn btn-secondary" onClick={() => setStep(2)}>
                ← Retour
              </button>
              <button
                className="btn btn-primary btn-full"
                onClick={handleSubmit}
                disabled={saving}
              >
                {saving ? 'Création en cours...' : '✨ Créer mon espace'}
              </button>
            </div>
          </div>
        )}

        <button className="onboarding-logout" onClick={logout}>
          Se déconnecter
        </button>
      </div>
    </div>
  );
}
