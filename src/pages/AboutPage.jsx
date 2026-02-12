export default function AboutPage() {
  return (
    <div className="page about-page">
      <h2 className="page-title">ℹ️ À propos</h2>

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
