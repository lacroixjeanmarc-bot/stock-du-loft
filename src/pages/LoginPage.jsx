import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';

export default function LoginPage() {
  const { loginWithGoogle, sendMagicLink } = useAuth();
  const [mode, setMode] = useState('main'); // main | magiclink
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleMagicLink = async (e) => {
    e.preventDefault();
    setError(''); setSuccess('');
    if (!email.trim()) { setError('Entrez votre adresse courriel.'); return; }
    setLoading(true);
    try {
      await sendMagicLink(email);
      setSuccess('Un lien de connexion a été envoyé à ' + email + '. Vérifiez votre boîte de réception (et vos courriels indésirables).');
    } catch (err) {
      if (err.code === 'auth/invalid-email') {
        setError('Adresse courriel invalide.');
      } else if (err.code === 'auth/too-many-requests') {
        setError('Trop de tentatives. Réessayez plus tard.');
      } else {
        setError('Erreur de connexion. Réessayez.');
      }
    } finally { setLoading(false); }
  };

  const handleGoogleLogin = async () => {
    setError(''); setLoading(true);
    try {
      await loginWithGoogle();
    } catch (err) {
      setError('Erreur de connexion avec Google.');
    } finally { setLoading(false); }
  };

  const switchMode = (newMode) => {
    setMode(newMode);
    setError(''); setSuccess('');
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-logo">🎨</div>
        <h1 className="login-title">Vitrine Artisan</h1>
        <p className="login-subtitle">
          Gestion d'inventaire pour<br />les artisans du Québec
        </p>

        {/* ===== GOOGLE BUTTON ===== */}
        <button onClick={handleGoogleLogin} className="btn-google-login" disabled={loading}>
          <svg width="20" height="20" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Continuer avec Google
        </button>

        <div className="login-divider"><span>ou</span></div>

        {/* ===== MAIN: MAGIC LINK BUTTON ===== */}
        {mode === 'main' && (
          <button onClick={() => switchMode('magiclink')} className="btn-magic-link" disabled={loading}>
            ✉️ Recevoir un lien de connexion par courriel
          </button>
        )}

        {/* ===== MAGIC LINK FORM ===== */}
        {mode === 'magiclink' && (
          <form onSubmit={handleMagicLink} className="login-form">
            <p className="login-reset-info">
              Entrez votre courriel. Vous recevrez un lien — cliquez dessus et vous serez connecté. Aucun mot de passe nécessaire!
            </p>
            <div className="form-group">
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                className="login-input" placeholder="Adresse courriel" required autoComplete="email" autoFocus />
            </div>
            <button type="submit" className="btn btn-primary btn-login" disabled={loading}>
              {loading ? 'Envoi...' : '✉️ Envoyer le lien de connexion'}
            </button>
            <div className="login-links">
              <button type="button" className="link-btn" onClick={() => switchMode('main')}>
                ← Retour
              </button>
            </div>
          </form>
        )}

        {error && <p className="login-error">{error}</p>}
        {success && <p className="login-success">{success}</p>}
      </div>
    </div>
  );
}
