import { createContext, useContext, useState, useEffect } from 'react';
import {
  onAuthStateChanged,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
  signOut
} from 'firebase/auth';
import { auth, googleProvider } from '../firebase';
import { getTenantProfile, subscribeToTenantProfile, applyTheme } from '../services/tenantService';

const AuthContext = createContext(null);

googleProvider.setCustomParameters({ prompt: 'select_account' });

const actionCodeSettings = {
  url: window.location.origin + '/app',
  handleCodeInApp: true
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [tenant, setTenant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [needsOnboarding, setNeedsOnboarding] = useState(false);

  useEffect(() => {
    getRedirectResult(auth).catch(() => {});

    // Vérifier si on revient d'un lien magique
    if (isSignInWithEmailLink(auth, window.location.href)) {
      let email = window.localStorage.getItem('emailForSignIn');
      if (!email) {
        email = window.prompt('Entrez votre adresse courriel pour confirmer la connexion :');
      }
      if (email) {
        signInWithEmailLink(auth, email, window.location.href)
          .then(() => {
            window.localStorage.removeItem('emailForSignIn');
            window.history.replaceState(null, '', window.location.origin + window.location.pathname);
          })
          .catch((error) => {
            console.error('Erreur lien magique:', error);
          });
      }
    }

    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setUser(firebaseUser);
      if (firebaseUser) {
        // Vérifier si le tenant a un profil (onboarding complété)
        const profile = await getTenantProfile(firebaseUser.uid);
        if (profile) {
          setTenant(profile);
          setNeedsOnboarding(false);
          if (profile.theme) applyTheme(profile.theme);
        } else {
          setTenant(null);
          setNeedsOnboarding(true);
        }
      } else {
        setTenant(null);
        setNeedsOnboarding(false);
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  // Écouter les changements de profil en temps réel
  useEffect(() => {
    if (!user) return;
    const unsub = subscribeToTenantProfile(user.uid, (profile) => {
      if (profile) {
        setTenant(profile);
        setNeedsOnboarding(false);
        if (profile.theme) applyTheme(profile.theme);
      }
    });
    return unsub;
  }, [user]);

  const loginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      if (error.code === 'auth/popup-blocked' || error.code === 'auth/popup-closed-by-user') {
        await signInWithRedirect(auth, googleProvider);
      } else {
        throw error;
      }
    }
  };

  const sendMagicLink = async (email) => {
    await sendSignInLinkToEmail(auth, email, actionCodeSettings);
    window.localStorage.setItem('emailForSignIn', email);
  };

  const logout = async () => {
    try {
      await signOut(auth);
      // Reset theme to default
      applyTheme('dark-copper');
    } catch (error) {
      console.error('Erreur de deconnexion:', error);
    }
  };

  // Appelé après onboarding pour mettre à jour le contexte
  const completeOnboarding = (profile) => {
    setTenant(profile);
    setNeedsOnboarding(false);
    if (profile.theme) applyTheme(profile.theme);
  };

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner" />
        <p>Chargement...</p>
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{
      user,
      tenant,
      needsOnboarding,
      loginWithGoogle,
      sendMagicLink,
      logout,
      completeOnboarding
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth doit être utilisé dans un AuthProvider');
  }
  return context;
}
