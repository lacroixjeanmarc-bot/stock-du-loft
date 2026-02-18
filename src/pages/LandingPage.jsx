import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  useEffect(() => {
    // Scroll nav background
    const handleScroll = () => {
      const nav = document.getElementById('landing-nav');
      if (nav) nav.classList.toggle('scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);

    // Fade in on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.15 });
    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="landing">
      {/* NAV */}
      <nav className="lp-nav" id="landing-nav">
        <div className="lp-nav-inner">
          <a href="#" className="lp-nav-logo">Vitrine <span>Artisan</span></a>
          <ul className="lp-nav-links">
            <li><a href="#fonctionnalites">Fonctionnalités</a></li>
            <li><a href="#comment-ca-marche">Comment ça marche</a></li>
            <li><a href="#tarifs">Tarifs</a></li>
            <li><Link to="/app" className="lp-nav-cta">Essayer gratuitement</Link></li>
          </ul>
          <button className="lp-mobile-menu-btn" onClick={() => document.querySelector('.lp-nav-links').classList.toggle('show')} aria-label="Menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="lp-hero">
        <div className="lp-hero-inner">
          <div className="lp-hero-text">
            <div className="lp-hero-badge">✨ Conçu pour les artisans québécois</div>
            <h1>Gérez votre inventaire,<br />exposez vos <em>créations</em></h1>
            <p className="lp-hero-subtitle">L'outil tout-en-un pour les artisans et créateurs. Gérez vos articles, suivez vos ventes aux marchés et en consigne, et offrez une vitrine en ligne à vos créations.</p>
            <div className="lp-hero-actions">
              <Link to="/app" className="lp-btn-primary">Commencer gratuitement →</Link>
              <a href="#fonctionnalites" className="lp-btn-secondary">Découvrir les fonctions</a>
            </div>
            <p className="lp-hero-note">✓ Gratuit jusqu'à 25 articles — aucune carte de crédit requise</p>
          </div>
          <div className="lp-hero-visual">
            <div className="lp-hero-phone">
              <div className="lp-phone-screen">
                <div className="lp-phone-header">
                  <span className="lp-phone-title">🎨 Vitrine Artisan</span>
                  <span className="lp-phone-user">Marie</span>
                </div>
                <div className="lp-phone-items">
                  <div className="lp-phone-item">
                    <div className="lp-phone-thumb" style={{background: 'linear-gradient(135deg, #C4704B, #D4845F)'}}></div>
                    <div className="lp-phone-info"><div className="lp-phone-name">Sac en tissu fleuri</div><div className="lp-phone-price">35,00 $</div></div>
                    <span className="lp-phone-status lp-st-inv">En stock</span>
                  </div>
                  <div className="lp-phone-item">
                    <div className="lp-phone-thumb" style={{background: 'linear-gradient(135deg, #8FA68A, #B5CCAF)'}}></div>
                    <div className="lp-phone-info"><div className="lp-phone-name">Boucles d'oreilles bois</div><div className="lp-phone-price">22,00 $</div></div>
                    <span className="lp-phone-status lp-st-con">Consigne</span>
                  </div>
                  <div className="lp-phone-item">
                    <div className="lp-phone-thumb" style={{background: 'linear-gradient(135deg, #C9A96E, #E0CC9F)'}}></div>
                    <div className="lp-phone-info"><div className="lp-phone-name">Chandelle artisanale</div><div className="lp-phone-price">18,00 $</div></div>
                    <span className="lp-phone-status lp-st-sold">Vendu ✓</span>
                  </div>
                  <div className="lp-phone-item">
                    <div className="lp-phone-thumb" style={{background: 'linear-gradient(135deg, #7C6FA0, #A89BC4)'}}></div>
                    <div className="lp-phone-info"><div className="lp-phone-name">Savon lavande bio</div><div className="lp-phone-price">12,00 $</div></div>
                    <span className="lp-phone-status lp-st-inv">En stock</span>
                  </div>
                </div>
                <div className="lp-phone-nav">
                  <div className="lp-phone-nav-item active"><span>📦</span><span>Inventaire</span></div>
                  <div className="lp-phone-nav-item"><span>💰</span><span>Vente</span></div>
                  <div className="lp-phone-nav-item"><span>➕</span><span>Ajouter</span></div>
                  <div className="lp-phone-nav-item"><span>ℹ️</span><span>Info</span></div>
                </div>
              </div>
            </div>
            <div className="lp-float-card lp-float-1">
              <div className="lp-float-icon">📈</div>
              <div><div className="lp-float-label">Ventes ce mois</div><div className="lp-float-value">847,00 $</div></div>
            </div>
            <div className="lp-float-card lp-float-2">
              <div className="lp-float-label">Inventaire actif</div>
              <div className="lp-float-bar"><div className="lp-float-bar-fill"></div></div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="lp-features" id="fonctionnalites">
        <div className="lp-section-inner">
          <div className="lp-section-tag">Fonctionnalités</div>
          <h2 className="lp-section-title">Tout ce qu'il faut pour<br />gérer votre atelier</h2>
          <p className="lp-section-subtitle">Plus besoin de carnets et de feuilles Excel. Une seule application pour tout suivre.</p>
          <div className="lp-features-grid">
            <div className="lp-feature-card fade-in"><div className="lp-feature-icon lp-fi-inv">📦</div><h3 className="lp-feature-title">Inventaire complet</h3><p className="lp-feature-desc">Ajoutez vos articles avec photo, description, prix et catégorie. Numéro unique auto-généré pour chaque pièce.</p></div>
            <div className="lp-feature-card fade-in"><div className="lp-feature-icon lp-fi-vit">🖼️</div><h3 className="lp-feature-title">Vitrine en ligne</h3><p className="lp-feature-desc">Votre catalogue public accessible en tout temps. Partagez le lien avec vos clients — ils voient vos créations en temps réel.</p></div>
            <div className="lp-feature-card fade-in"><div className="lp-feature-icon lp-fi-sale">💰</div><h3 className="lp-feature-title">Vente rapide</h3><p className="lp-feature-desc">Entrez le numéro de l'article, confirmez le prix et c'est vendu. Support des taxes TPS/TVQ et des rabais.</p></div>
            <div className="lp-feature-card fade-in"><div className="lp-feature-icon lp-fi-con">🏪</div><h3 className="lp-feature-title">Suivi des consignes</h3><p className="lp-feature-desc">Gérez vos articles en boutique. Commission par magasin, loyer mensuel, rapport de revenus nets automatique.</p></div>
            <div className="lp-feature-card fade-in"><div className="lp-feature-icon lp-fi-photo">📸</div><h3 className="lp-feature-title">Photos multiples</h3><p className="lp-feature-desc">Jusqu'à 5 photos par article. Prenez la photo directement avec votre téléphone, la compression est automatique.</p></div>
            <div className="lp-feature-card fade-in"><div className="lp-feature-icon lp-fi-pwa">📱</div><h3 className="lp-feature-title">Installable sur mobile</h3><p className="lp-feature-desc">Ajoutez l'app sur l'écran d'accueil de votre téléphone. Fonctionne comme une vraie application, partout.</p></div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="lp-how" id="comment-ca-marche">
        <div className="lp-section-inner">
          <div className="lp-section-tag">Comment ça marche</div>
          <h2 className="lp-section-title">Prêt en 3 minutes</h2>
          <p className="lp-section-subtitle">Pas besoin d'être techno. Si vous savez prendre une photo, vous savez utiliser Vitrine Artisan.</p>
          <div className="lp-steps-grid">
            <div className="lp-step fade-in"><div className="lp-step-number">1</div><h3 className="lp-step-title">Créez votre compte</h3><p className="lp-step-desc">Connectez-vous avec votre compte Google ou par courriel. C'est gratuit et instantané.</p></div>
            <div className="lp-step fade-in"><div className="lp-step-number">2</div><h3 className="lp-step-title">Ajoutez vos articles</h3><p className="lp-step-desc">Prenez une photo, ajoutez le prix et la description. Le numéro unique se génère tout seul.</p></div>
            <div className="lp-step fade-in"><div className="lp-step-number">3</div><h3 className="lp-step-title">Vendez et suivez</h3><p className="lp-step-desc">Au marché ou en consigne, enregistrez chaque vente. Votre vitrine se met à jour automatiquement.</p></div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="lp-pricing" id="tarifs">
        <div className="lp-section-inner">
          <div className="lp-section-tag">Tarifs</div>
          <h2 className="lp-section-title">Simple et honnête</h2>
          <p className="lp-section-subtitle">Commencez gratuitement. Passez au plan Artisan quand vous êtes prêt.</p>
          <div className="lp-pricing-grid">
            <div className="lp-pricing-card">
              <div className="lp-pricing-name">🆓 Découverte</div>
              <div className="lp-pricing-price">0 $ <span>/ mois</span></div>
              <div className="lp-pricing-period">Gratuit pour toujours</div>
              <ul className="lp-pricing-features">
                <li><span className="lp-check">✓</span> Jusqu'à 25 articles</li>
                <li><span className="lp-check">✓</span> Vitrine publique (10 articles)</li>
                <li><span className="lp-check">✓</span> Vente rapide</li>
                <li><span className="lp-check">✓</span> Photos par article</li>
                <li><span className="lp-cross">—</span> Suivi des consignes</li>
                <li><span className="lp-cross">—</span> Rapport de ventes</li>
              </ul>
              <Link to="/app" className="lp-btn-pricing lp-btn-pricing-free">Commencer gratuitement</Link>
            </div>
            <div className="lp-pricing-card lp-featured">
              <div className="lp-pricing-name">⭐ Artisan</div>
              <div className="lp-pricing-price">12,99 $ <span>/ mois</span></div>
              <div className="lp-pricing-period">ou 100 $ / an (économisez 56 $)</div>
              <ul className="lp-pricing-features">
                <li><span className="lp-check">✓</span> Articles illimités</li>
                <li><span className="lp-check">✓</span> Vitrine publique illimitée</li>
                <li><span className="lp-check">✓</span> Vente rapide + taxes</li>
                <li><span className="lp-check">✓</span> Photos multiples (5/article)</li>
                <li><span className="lp-check">✓</span> Suivi des consignes</li>
                <li><span className="lp-check">✓</span> Rapport de ventes mensuel</li>
              </ul>
              <Link to="/app" className="lp-btn-pricing lp-btn-pricing-feat">Essayer maintenant →</Link>
            </div>
          </div>
          <p className="lp-pricing-note">💡 Moins cher qu'un espace de table au marché — et <strong>ça travaille 24/7</strong> avec votre vitrine en ligne.</p>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="lp-testimonial">
        <div className="lp-section-inner">
          <div className="lp-testimonial-card fade-in">
            <p className="lp-testimonial-quote">Avant, je gérais tout dans un cahier. Maintenant, je prends la photo, j'entre le prix, et c'est fait. Mes clientes peuvent voir mes créations en ligne même entre les marchés.</p>
            <p className="lp-testimonial-author">Une artisane satisfaite</p>
            <p className="lp-testimonial-role">Couture et créations textiles — Québec</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="lp-cta">
        <div className="lp-section-inner">
          <h2 className="lp-cta-title">Prêt à simplifier votre gestion?</h2>
          <p className="lp-cta-subtitle">Créez votre compte en 30 secondes. Gratuit, sans engagement, sans carte de crédit.</p>
          <Link to="/app" className="lp-btn-primary">Commencer gratuitement →</Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="lp-footer">
        <div className="lp-footer-inner">
          <div className="lp-footer-brand">Vitrine <span>Artisan</span></div>
          <p className="lp-footer-copy">© 2026 Vitrine Artisan — Créé avec ❤️ au Québec</p>
          <div className="lp-footer-links">
            <Link to="/app" className="lp-footer-link">Déjà inscrit? Accéder à l'app →</Link>
            <a href="mailto:info@vitrineartisan.ca" className="lp-footer-link">📧 Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
