import { useState, useEffect } from 'react';
import { ref, onValue, update } from 'firebase/database';
import { database } from '../firebase';

const SETTINGS_PATH = 'stockduloft/settings';

export default function AboutPage() {
  const [soldDays, setSoldDays] = useState(7);

  useEffect(() => {
    const settingsRef = ref(database, SETTINGS_PATH);
    const unsub = onValue(settingsRef, (snap) => {
      if (snap.exists() && snap.val().vitrineSoldDays !== undefined) {
        setSoldDays(snap.val().vitrineSoldDays);
      }
    });
    return unsub;
  }, []);

  const handleChangeDays = async (value) => {
    const days = parseInt(value);
    setSoldDays(days);
    await update(ref(database, SETTINGS_PATH), { vitrineSoldDays: days });
  };

  return (
    <div className="page about-page">
      <h2 className="page-title">ℹ️ À propos</h2>

      {/* Paramètres Vitrine */}
      <div className="about-card" style={{ marginBottom: '12px' }}>
        <h4>⚙️ Paramètres Vitrine</h4>
        <div className="form-group" style={{ marginTop: '10px' }}>
          <label className="form-label">Afficher les articles vendus pendant :</label>
          <select
            value={soldDays}
            onChange={(e) => handleChangeDays(e.target.value)}
            className="form-input"
          >
            <option value={0}>Ne pas afficher</option>
            <option value={3}>3 jours</option>
            <option value={7}>7 jours (1 semaine)</option>
            <option value={14}>14 jours (2 semaines)</option>
            <option value={30}>30 jours (1 mois)</option>
          </select>
          <p className="about-setting-hint">
            Les articles vendus apparaîtront avec un bandeau « VENDU » dans la vitrine publique.
          </p>
        </div>
      </div>

      <div className="about-card">
        <div className="about-logo">
          <img src="/pwa-192x192.png" alt="Stock du Loft" />
        </div>
        <h3>✂️ Stock du Loft</h3>
        <p className="about-version">Version 1.0</p>

        <p className="about-description">
          Application de gestion d'inventaire conçue pour les artisans et créateurs.
          Gérez vos articles, suivez vos consignes et enregistrez vos ventes en toute simplicité.
        </p>

        <div className="about-features">
          <h4>Fonctionnalités</h4>
          <ul>
            <li>📦 Gestion d'inventaire avec numéros uniques (ADL-001, ADL-002...)</li>
            <li>📸 Photos des articles avec miniatures rapides</li>
            <li>💰 Vente rapide par numéro d'article</li>
            <li>📍 Suivi des consignes chez les marchands</li>
            <li>🏷️ Rabais et prix de vente personnalisés</li>
            <li>🔄 Synchronisation en temps réel</li>
            <li>🔒 Authentification sécurisée Google</li>
            <li>📱 Application installable (PWA)</li>
          </ul>
        </div>

        <div className="about-author">
          <p>Créé par <strong>Jean-Marc Lacroix</strong></p>
          <p>© 2026 — Tous droits réservés</p>
          <p style={{ marginTop: '12px' }}>
            💬 Commentaires et suggestions bienvenus
          </p>
          <a href="mailto:lacroix.jeanmarc@gmail.com" className="about-email">
            📧 lacroix.jeanmarc@gmail.com
          </a>
        </div>

        <div className="about-donate">
          <p>☕ Vous aimez cette application?</p>
          <p>Payez-moi un café par Virement Interac :</p>
          <p className="about-donate-email">lacroix.jeanmarc@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
