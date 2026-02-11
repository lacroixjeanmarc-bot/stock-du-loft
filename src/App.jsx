import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './hooks/useAuth';
import InventoryList from './pages/InventoryList';
import AddItem from './pages/AddItem';
import QuickSale from './pages/QuickSale';
import LoginPage from './pages/LoginPage';

function AppContent() {
  const { user, logout } = useAuth();

  if (!user) {
    return <LoginPage />;
  }

  return (
    <div className="app">
      {/* Header */}
      <header className="app-header">
        <div className="header-content">
          <h1 className="app-title">
            <span className="title-icon">✂️</span>
            Stock du Loft
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
