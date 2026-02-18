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
import { isSuperAdmin } from './services/adminService';

const SETTINGS_PATH = 'stockduloft/settings';

function AppContent() {
  const { user, logout } = useAuth();
  const location = useLocation();

  // ★ Appliquer le thème sauvegardé quand l'utilisateur est connecté
  useEffect(() => {
    const settingsRef = ref(database, `${SETTINGS_PATH}/theme`);
    const unsub = onValue(settingsRef, (snap) => {
      if (snap.exists()) {
        applyTheme(snap.val());
      }
    });
    return unsub;
  }, []);

  // Vitrine publique — pas besoin de login
  if (location.pathname === '/vitrine') {
    return <Vitrine />;
  }

  if (!user) {
    return <LoginPage />;
  }

  return (
    <div className="app">
      {/* Header */}
      <header className="app-header">
        <div className="header-content">
          <h1 className="app-title">
            <span className="title-icon">✂️</span> Stock du Loft
          </h1>
          <div className="header-user">
            <span className="user-name">{user.displayName?.split(' ')[0]}</span>
            <button onClick={logout} className="btn-logout" title="Déconnexion">
              ↗
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="app-main">
        <Routes>
          <Route path="/" element={<InventoryList />} />
          <Route path="/add" element={<AddItem />} />
          <Route path="/sale" element={<QuickSale />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Bottom Navigation */}
      <nav className="bottom-nav">
        <NavLink to="/" end className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <span className="nav-icon">📦</span>
          <span className="nav-label">Inventaire</span>
        </NavLink>
        <NavLink to="/sale" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <span className="nav-icon">💰</span>
          <span className="nav-label">Vente</span>
        </NavLink>
        <NavLink to="/add" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <span className="nav-icon">➕</span>
          <span className="nav-label">Ajouter</span>
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <span className="nav-icon">ℹ️</span>
          <span className="nav-label">Info</span>
        </NavLink>
        {isSuperAdmin(user) && (
          <NavLink to="/admin" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <span className="nav-icon">🛡️</span>
            <span className="nav-label">Admin</span>
          </NavLink>
        )}
      </nav>
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
