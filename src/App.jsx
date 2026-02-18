import { useState, useEffect } from 'react';
import { Routes, Route, NavLink, Navigate, useLocation } from 'react-router-dom';
import { ref, onValue } from 'firebase/database';
import { database } from './firebase';
import { AuthProvider, useAuth } from './hooks/useAuth';
import { applyTheme } from './services/themeService';

import InventoryList from './pages/InventoryList';
import AddItem from './pages/AddItem';
import QuickSale from './pages/QuickSale';
import AboutPage from './pages/AboutPage';
import Vitrine from './pages/Vitrine';
import AdminPage from './pages/AdminPage';
import LoginPage from './pages/LoginPage';
import LandingPage from './pages/LandingPage';
import OnboardingPage from './pages/OnboardingPage';
import { isSuperAdmin } from './services/adminService';

const SETTINGS_PATH = 'stockduloft/settings';

function AppContent() {
  const { user, tenant, needsOnboarding, logout } = useAuth();
  const location = useLocation();

  // â Appliquer le thÃ¨me sauvegardÃ© quand l'utilisateur est connectÃ©
  useEffect(() => {
    if (!user) return;
    const settingsRef = ref(database, `${SETTINGS_PATH}/theme`);
    const unsub = onValue(settingsRef, (snap) => {
      if (snap.exists()) {
        applyTheme(snap.val());
      }
    });
    return unsub;
  }, [user]);

  // ======= LANDING PAGE =======
  if (location.pathname === '/') {
    return <LandingPage />;
  }

  // ======= VITRINE PUBLIQUE PAR SLUG =======
  if (location.pathname.startsWith('/vitrine')) {
    return (
      <Routes>
        <Route path="/vitrine/:slug" element={<Vitrine />} />
        <Route path="/vitrine" element={
          <div className="vitrine">
            <div className="vitrine-empty">
              <p>ð</p>
              <p>Ajoutez un slug de boutique dans l'URL</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '8px' }}>
                Ex: vitrineartisan.ca/vitrine/mon-atelier
              </p>
            </div>
          </div>
        } />
      </Routes>
    );
  }

  // ======= /app â BESOIN DE LOGIN =======
  if (!user) {
    return <LoginPage />;
  }

  // Onboarding si pas encore de profil tenant
  if (needsOnboarding) {
    return <OnboardingPage />;
  }

  return (
    <div className="app">
      {/* Header professionnel avec navigation en haut */}
      <header className="app-header">
        <div className="header-content">
          <div className="header-brand">
            <a href="/app" className="brand-link">
              <img src="/logo.svg" alt="Vitrine Artisan" className="brand-logo-full" />
            </a>
            {tenant?.businessName && (
              <span className="brand-business">{tenant.businessName}</span>
            )}
          </div>

          <nav className="header-nav">
            <NavLink to="/app" end className={({ isActive }) => `header-nav-link ${isActive ? 'active' : ''}`}>
              <span className="nav-icon">ð¦</span>
              <span className="nav-text">Inventaire</span>
            </NavLink>
            <NavLink to="/app/sale" className={({ isActive }) => `header-nav-link ${isActive ? 'active' : ''}`}>
              <span className="nav-icon">ð°</span>
              <span className="nav-text">Vente</span>
            </NavLink>
            <NavLink to="/app/add" className={({ isActive }) => `header-nav-link ${isActive ? 'active' : ''}`}>
              <span className="nav-icon">â</span>
              <span className="nav-text">Ajouter</span>
            </NavLink>
            <NavLink to="/app/about" className={({ isActive }) => `header-nav-link ${isActive ? 'active' : ''}`}>
              <span className="nav-icon">âï¸</span>
              <span className="nav-text">ParamÃ¨tres</span>
            </NavLink>
          </nav>

          <div className="header-user">
            <span className="user-name">{user.displayName?.split(' ')[0]}</span>
            <button onClick={logout} className="btn-logout" title="DÃ©connexion">â</button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="app-main">
        <Routes>
          <Route path="/app" element={<InventoryList />} />
          <Route path="/app/add" element={<AddItem />} />
          <Route path="/app/sale" element={<QuickSale />} />
          <Route path="/app/about" element={<AboutPage />} />
          {isSuperAdmin(user) && (
            <Route path="/app/admin" element={<AdminPage />} />
          )}
          <Route path="*" element={<Navigate to="/app" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
