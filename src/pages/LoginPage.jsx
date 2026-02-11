import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';

export default function LoginPage() {
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setError('');
    setLoading(true);
    try {
      await login();
    } catch (err) {
      setError('Erreur de connexion. Réessayez.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-logo">✂️</div>
        <h1 className="login-title">Stock du Loft</h1>
        <p className="login-subtitle">Gestion d'inventaire pour<br />L'Atelier du Loft</p>

        <button
          onClick={handleLogin}
          className="btn btn-primary btn-login"
          disabled={loading}
        >
          {loading ? 'Connexion...' : '🔑 Se connecter avec Google'}
        </button>

        {error && <p className="error-text">{error}</p>}
      </div>
    </div>
  );
}
