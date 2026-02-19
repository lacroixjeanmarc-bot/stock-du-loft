import { useState, useEffect } from 'react';
import { ref, onValue, update } from 'firebase/database';
import { database } from '../firebase';
import { useAuth } from '../hooks/useAuth';
import { subscribeToStores, addStore, updateStore, deleteStore, subscribeToItems } from '../services/inventoryService';
import { THEMES, applyTheme } from '../services/themeService';

const SETTINGS_PATH = 'stockduloft/settings';

function formatPrice(price) {
  return price?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

const PLANS = {
  free: { name: 'Découverte', badge: '🆓', articlesLimit: 25, vitrineLimit: 10, price: null },
  artisan: { name: 'Artisan', badge: '⭐', articlesLimit: Infinity, vitrineLimit: Infinity, price: { monthly: 12.99, yearly: 100.00 } }
};

export default function AboutPage() {
  const { tenant } = useAuth();
  const [soldDays, setSoldDays] = useState(7);
  const [stores, setStores] = useState([]);
  const [items, setItems] = useState([]);
  const [showAddStore, setShowAddStore] = useState(false);
  const [editingStore, setEditingStore] = useState(null);
  const [storeForm, setStoreForm] = useState({ name: '', commissionPercent: '', locationFee: '' });
  const [subscription, setSubscription] = useState(null);
  const [reportMonth, setReportMonth] = useState(() => {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
  });
  // Tax settings
  const [taxEnabled, setTaxEnabled] = useState(false);
  const [tpsRate, setTpsRate] = useState('5');
  const [tvqRate, setTvqRate] = useState('9.975');
  const [tpsNumber, setTpsNumber] = useState('');
  const [tvqNumber, setTvqNumber] = useState('');
  const [showTaxInfo, setShowTaxInfo] = useState(false);
  // Upgrade modal
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  // ★ Theme
  const [currentTheme, setCurrentTheme] = useState('dark-copper');
  // ★ Vitrine link copy feedback
  const [linkCopied, setLinkCopied] = useState(false);

  // ★ Vitrine URL
  const vitrineSlug = tenant?.slug;
  const vitrineUrl = vitrineSlug ? `${window.location.origin}/vitrine/${vitrineSlug}` : null;
  const vitrineUrlShort = vitrineSlug ? `vitrineartisan.ca/vitrine/${vitrineSlug}` : null;

  const handleCopyLink = async () => {
    if (!vitrineUrl) return;
    try {
      await navigator.clipboard.writeText(vitrineUrl);
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 2500);
    } catch (err) {
      // Fallback for older browsers
      const input = document.createElement('input');
      input.value = vitrineUrl;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 2500);
    }
  };

  const handleShareFacebook = () => {
    if (!vitrineUrl) return;
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(vitrineUrl)}`, '_blank', 'width=600,height=400');
  };

  const handleShareNative = async () => {
    if (!vitrineUrl || !navigator.share) return;
    try {
      await navigator.share({
        title: tenant?.businessName || 'Ma vitrine',
        text: `Découvrez mes créations artisanales!`,
        url: vitrineUrl
      });
    } catch (err) {
      // User cancelled or not supported
    }
  };

  useEffect(() => {
    const settingsRef = ref(database, SETTINGS_PATH);
    const unsub = onValue(settingsRef, (snap) => {
      if (snap.exists()) {
        const data = snap.val();
        if (data.vitrineSoldDays !== undefined) { setSoldDays(data.vitrineSoldDays); }
        if (data.subscription) { setSubscription(data.subscription); }
        else { setSubscription({ plan: 'free', planType: null, startDate: null, expiryDate: null }); }
        if (data.theme) { setCurrentTheme(data.theme); }
        if (data.taxes) {
          setTaxEnabled(data.taxes.enabled || false);
          if (data.taxes.tpsRate !== undefined) setTpsRate(data.taxes.tpsRate.toString());
          if (data.taxes.tvqRate !== undefined) setTvqRate(data.taxes.tvqRate.toString());
          if (data.taxes.tpsNumber !== undefined) setTpsNumber(data.taxes.tpsNumber);
          if (data.taxes.tvqNumber !== undefined) setTvqNumber(data.taxes.tvqNumber);
        }
      }
    });
    return unsub;
  }, []);

  useEffect(() => { const unsub = subscribeToStores(setStores); return unsub; }, []);
  useEffect(() => { const unsub = subscribeToItems(setItems); return unsub; }, []);

  const handleChangeDays = async (value) => {
    const days = parseInt(value);
    setSoldDays(days);
    await update(ref(database, SETTINGS_PATH), { vitrineSoldDays: days });
  };

  const handleChangeTheme = async (themeId) => {
    setCurrentTheme(themeId);
    applyTheme(themeId);
    await update(ref(database, SETTINGS_PATH), { theme: themeId });
  };

  // ---- Tax Handlers ----
  const handleTaxToggle = async (enabled) => {
    setTaxEnabled(enabled);
    await update(ref(database, `${SETTINGS_PATH}/taxes`), { enabled, tpsRate: parseFloat(tpsRate) || 5, tvqRate: parseFloat(tvqRate) || 9.975, tpsNumber, tvqNumber });
  };

  const handleSaveTaxSettings = async () => {
    await update(ref(database, `${SETTINGS_PATH}/taxes`), { enabled: taxEnabled, tpsRate: parseFloat(tpsRate) || 5, tvqRate: parseFloat(tvqRate) || 9.975, tpsNumber: tpsNumber.trim(), tvqNumber: tvqNumber.trim() });
  };

  const taxPreviewPrice = 50;
  const tpsAmount = Math.round(taxPreviewPrice * (parseFloat(tpsRate) || 0)) / 100;
  const tvqAmount = Math.round(taxPreviewPrice * (parseFloat(tvqRate) || 0) * 100) / 10000;
  const totalWithTax = taxPreviewPrice + tpsAmount + tvqAmount;

  // ---- Subscription Info ----
  const currentPlanData = PLANS[subscription?.plan || 'free'];
  const totalArticles = items.filter((i) => i.status !== 'sold').length;
  const articlesPercent = currentPlanData.articlesLimit === Infinity ? 0 : Math.min(100, Math.round((totalArticles / currentPlanData.articlesLimit) * 100));
  const isFreePlan = (subscription?.plan || 'free') === 'free';

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    return d.toLocaleDateString('fr-CA', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const daysUntilExpiry = () => {
    if (!subscription?.expiryDate) return null;
    const now = new Date();
    const exp = new Date(subscription.expiryDate);
    const diff = Math.ceil((exp - now) / (1000 * 60 * 60 * 24));
    return diff;
  };

  // ---- Store Management ----
  const handleAddStore = async () => {
    if (!storeForm.name.trim()) return;
    await addStore(storeForm);
    setStoreForm({ name: '', commissionPercent: '', locationFee: '' });
    setShowAddStore(false);
  };

  const handleEditStore = (store) => {
    setEditingStore(store.id);
    setStoreForm({ name: store.name, commissionPercent: store.commissionPercent?.toString() || '', locationFee: store.locationFee?.toString() || '' });
  };

  const handleSaveStore = async (storeId) => {
    await updateStore(storeId, { name: storeForm.name.trim(), commissionPercent: parseFloat(storeForm.commissionPercent) || 0, locationFee: parseFloat(storeForm.locationFee) || 0 });
    setEditingStore(null);
    setStoreForm({ name: '', commissionPercent: '', locationFee: '' });
  };

  const handleDeleteStore = async (store) => {
    const consignedItems = items.filter((i) => i.status === 'consignment' && i.consignmentStoreId === store.id);
    if (consignedItems.length > 0) {
      alert(`Impossible de supprimer : ${consignedItems.length} article(s) en consigne chez ${store.name}`);
      return;
    }
    if (confirm(`Supprimer le magasin "${store.name}" ?`)) {
      await deleteStore(store.id);
    }
  };

  // ---- Sales Report ----
  const getSalesReport = () => {
    const [year, month] = reportMonth.split('-').map(Number);
    const monthStart = `${year}-${String(month).padStart(2, '0')}-01`;
    const nextMonth = month === 12 ? `${year + 1}-01-01` : `${year}-${String(month + 1).padStart(2, '0')}-01`;

    const soldItems = items.filter((item) => item.status === 'sold' && item.saleDate && item.saleDate >= monthStart && item.saleDate < nextMonth);
    const sales = soldItems.filter((i) => !i.isGift);
    const gifts = soldItems.filter((i) => i.isGift);
    const totalRevenue = sales.reduce((sum, i) => sum + (i.salePrice || 0), 0);
    const totalCommissions = sales.reduce((sum, i) => sum + (i.commissionAmount || 0), 0);
    const totalTaxes = sales.reduce((sum, i) => { if (i.taxEnabled) { return sum + (i.tpsAmount || 0) + (i.tvqAmount || 0); } return sum; }, 0);

    const byMarket = {};
    sales.forEach((item) => {
      const market = item.consignmentStoreId ? `🏪 ${item.consignmentStore || 'Consigne'}` : item.marketName ? `🎪 ${item.marketName}` : '🛍️ Vente directe';
      if (!byMarket[market]) { byMarket[market] = { count: 0, revenue: 0 }; }
      byMarket[market].count++;
      byMarket[market].revenue += item.salePrice || 0;
    });

    const byCategory = {};
    sales.forEach((item) => {
      const cat = item.category || 'Sans catégorie';
      if (!byCategory[cat]) { byCategory[cat] = { count: 0, revenue: 0 }; }
      byCategory[cat].count++;
      byCategory[cat].revenue += item.salePrice || 0;
    });

    const bySeller = {};
    soldItems.forEach((item) => {
      const seller = item.sellerName || 'Non spécifié';
      if (!bySeller[seller]) { bySeller[seller] = { count: 0, revenue: 0 }; }
      bySeller[seller].count++;
      bySeller[seller].revenue += item.salePrice || 0;
    });

    return {
      totalSales: sales.length, totalGifts: gifts.length, totalRevenue, totalCommissions,
      totalNet: totalRevenue - totalCommissions, totalTaxes,
      avgPrice: sales.length > 0 ? totalRevenue / sales.length : 0,
      byMarket: Object.entries(byMarket).sort((a, b) => b[1].revenue - a[1].revenue),
      byCategory: Object.entries(byCategory).sort((a, b) => b[1].count - a[1].count),
      bySeller: Object.entries(bySeller).sort((a, b) => b[1].count - a[1].count),
    };
  };

  const salesReport = getSalesReport();
  const hasSalesData = salesReport.totalSales > 0 || salesReport.totalGifts > 0;

  // ---- Consignment Report ----
  const getMonthReport = () => {
    const [year, month] = reportMonth.split('-').map(Number);
    const monthStart = `${year}-${String(month).padStart(2, '0')}-01`;
    const nextMonth = month === 12 ? `${year + 1}-01-01` : `${year}-${String(month + 1).padStart(2, '0')}-01`;

    const report = {};
    stores.forEach((store) => {
      report[store.id] = { storeName: store.name, commissionPercent: store.commissionPercent, locationFee: store.locationFee, totalSales: 0, totalCommission: 0, totalNet: 0, itemsSold: 0, itemsInConsignment: 0 };
    });

    items.forEach((item) => {
      if (item.status === 'consignment' && item.consignmentStoreId && report[item.consignmentStoreId]) {
        report[item.consignmentStoreId].itemsInConsignment++;
      }
      if (item.status === 'sold' && item.saleDate && item.saleDate >= monthStart && item.saleDate < nextMonth && item.consignmentStoreId && report[item.consignmentStoreId]) {
        const r = report[item.consignmentStoreId];
        r.itemsSold++;
        r.totalSales += item.salePrice || 0;
        r.totalCommission += item.commissionAmount || 0;
        r.totalNet += item.netRevenue || (item.salePrice || 0);
      }
    });

    return Object.values(report);
  };

  const monthReport = getMonthReport();
  const hasReportData = monthReport.some((r) => r.itemsSold > 0 || r.itemsInConsignment > 0);

  const getMonthLabel = () => {
    const [year, month] = reportMonth.split('-').map(Number);
    const d = new Date(year, month - 1);
    return d.toLocaleDateString('fr-CA', { year: 'numeric', month: 'long' });
  };

  return (
    <div className="page about-page">
      <h2 className="page-title">⚙️ Paramètres</h2>

      {/* ======= MA VITRINE — LIEN PARTAGEABLE ======= */}
      {vitrineSlug && (
        <div className="about-card vitrine-link-card" style={{ marginBottom: '12px' }}>
          <h4>🖼️ Ma vitrine publique</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: '6px 0 12px' }}>
            Partagez ce lien sur Facebook, Instagram, ou votre site web pour que vos clients voient vos créations.
          </p>

          <div className="vitrine-link-box">
            <span className="vitrine-link-url">{vitrineUrlShort}</span>
            <button
              className={`btn vitrine-link-copy ${linkCopied ? 'copied' : ''}`}
              onClick={handleCopyLink}
            >
              {linkCopied ? '✓ Copié!' : '📋 Copier'}
            </button>
          </div>

          <div className="vitrine-link-actions">
            <a
              href={vitrineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-small vitrine-link-preview"
            >
              👁️ Voir ma vitrine
            </a>
            <button
              className="btn btn-small vitrine-link-share"
              onClick={handleShareFacebook}
            >
              📘 Partager sur Facebook
            </button>
            {navigator.share && (
              <button
                className="btn btn-small vitrine-link-share"
                onClick={handleShareNative}
              >
                📤 Partager...
              </button>
            )}
          </div>
        </div>
      )}

      {/* ======= ABONNEMENT ======= */}
      <div className="about-card" style={{ marginBottom: '12px' }}>
        <h4>📋 Mon abonnement</h4>
        <div className="subscription-section">
          <div className="subscription-plan-row">
            <div className="subscription-plan-info">
              <span className="subscription-plan-badge">
                {currentPlanData.badge} {currentPlanData.name}
              </span>
              {!isFreePlan && subscription?.planType && (
                <span className="subscription-plan-type">
                  {subscription.planType === 'yearly' ? '100.00 $/an' : '12.99 $/mois'}
                </span>
              )}
            </div>
          </div>
          <div className="subscription-articles">
            <div className="subscription-articles-label">
              <span>📦 Articles actifs</span>
              <span>
                {totalArticles}
                {isFreePlan ? ` / ${currentPlanData.articlesLimit}` : ' — Illimité'}
              </span>
            </div>
            {isFreePlan && (
              <div className="subscription-progress-bar">
                <div className={`subscription-progress-fill ${articlesPercent >= 80 ? 'warning' : ''} ${articlesPercent >= 100 ? 'full' : ''}`} style={{ width: `${articlesPercent}%` }} />
              </div>
            )}
          </div>
          <div className="subscription-detail-row"><span>🖼️ Vitrine publique</span><span>{isFreePlan ? `${currentPlanData.vitrineLimit} articles max` : 'Illimitée'}</span></div>
          <div className="subscription-detail-row"><span>📍 Suivi consignes</span><span>{isFreePlan ? '—' : '✓'}</span></div>
          <div className="subscription-detail-row"><span>🏷️ Étiquettes QR</span><span>{isFreePlan ? '—' : '✓'}</span></div>
          {!isFreePlan && subscription?.expiryDate && (
            <div className="subscription-renewal">
              <span>📅 Renouvellement</span>
              <span className={daysUntilExpiry() <= 7 ? 'renewal-soon' : ''}>
                {formatDate(subscription.expiryDate)}
                {daysUntilExpiry() <= 7 && daysUntilExpiry() > 0 && (
                  <span className="renewal-badge">Dans {daysUntilExpiry()} jour(s)</span>
                )}
              </span>
            </div>
          )}
          {isFreePlan ? (
            <div className="subscription-upgrade">
              <p className="subscription-upgrade-pitch">
                Passez au plan Artisan pour des articles illimités, la vitrine complète, le suivi des consignes et plus encore.
              </p>
              <div className="subscription-upgrade-options">
                <button className="btn btn-upgrade btn-full" onClick={() => { setSelectedPlan('monthly'); setShowUpgradeModal(true); }}>
                  ⭐ Plan Artisan — 12.99 $/mois
                </button>
                <button className="btn btn-upgrade-yearly btn-full" onClick={() => { setSelectedPlan('yearly'); setShowUpgradeModal(true); }}>
                  💎 Plan Annuel — 100 $/an
                  <span className="upgrade-savings">Économisez 56 $ !</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="subscription-manage">
              <button className="btn btn-small btn-secondary btn-full">
                Gérer mon abonnement
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ======= THÈME DE COULEUR ======= */}
      <div className="about-card" style={{ marginBottom: '12px' }}>
        <h4>🎨 Thème de couleur</h4>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: '8px 0 12px' }}>
          Ce thème s'applique à l'application et à votre vitrine publique.
        </p>
        <div className="theme-grid">
          {Object.entries(THEMES).map(([id, theme]) => (
            <button
              key={id}
              className={`theme-swatch ${currentTheme === id ? 'active' : ''}`}
              onClick={() => handleChangeTheme(id)}
              title={theme.name}
            >
              <div className="theme-swatch-color" style={{ background: theme.preview }} />
              <span className="theme-swatch-label">
                {theme.emoji} {theme.name}
              </span>
              {currentTheme === id && (
                <span className="theme-swatch-check">✓</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* ======= RAPPORT DES VENTES ======= */}
      <div className="about-card" style={{ marginBottom: '12px' }}>
        <h4>💰 Rapport des ventes</h4>
        <div className="form-group" style={{ marginTop: '10px' }}>
          <label className="form-label">Mois</label>
          <input type="month" value={reportMonth} onChange={(e) => setReportMonth(e.target.value)} className="form-input" />
        </div>
        {!hasSalesData ? (
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '10px' }}>
            Aucune vente pour {getMonthLabel()}
          </p>
        ) : (
          <div className="sales-report">
            <div className="sales-summary-grid">
              <div className="sales-summary-card sales-summary-highlight">
                <span className="sales-summary-value">{formatPrice(salesReport.totalRevenue)} $</span>
                <span className="sales-summary-label">Ventes brutes</span>
              </div>
              <div className="sales-summary-card">
                <span className="sales-summary-value">{salesReport.totalSales}</span>
                <span className="sales-summary-label">Articles vendus</span>
              </div>
              <div className="sales-summary-card">
                <span className="sales-summary-value">{formatPrice(salesReport.avgPrice)} $</span>
                <span className="sales-summary-label">Prix moyen</span>
              </div>
              {salesReport.totalGifts > 0 && (
                <div className="sales-summary-card">
                  <span className="sales-summary-value">🎁 {salesReport.totalGifts}</span>
                  <span className="sales-summary-label">Cadeaux</span>
                </div>
              )}
            </div>
            {(salesReport.totalCommissions > 0 || salesReport.totalTaxes > 0) && (
              <div className="sales-deductions">
                {salesReport.totalCommissions > 0 && (
                  <div className="report-row report-row-negative">
                    <span>📉 Commissions consigne</span>
                    <span>-{formatPrice(salesReport.totalCommissions)} $</span>
                  </div>
                )}
                {salesReport.totalTaxes > 0 && (
                  <div className="report-row">
                    <span>🧾 Taxes perçues (TPS+TVQ)</span>
                    <span>{formatPrice(salesReport.totalTaxes)} $</span>
                  </div>
                )}
                <div className="report-row report-row-total">
                  <span>✅ Revenu net</span>
                  <span>{formatPrice(salesReport.totalNet)} $</span>
                </div>
              </div>
            )}
            {salesReport.byMarket.length > 0 && (
              <div className="sales-breakdown">
                <p className="sales-breakdown-title">Par lieu de vente</p>
                {salesReport.byMarket.map(([market, data]) => (
                  <div key={market} className="sales-breakdown-row">
                    <span className="sales-breakdown-name">{market}</span>
                    <span className="sales-breakdown-stats">{data.count} article{data.count > 1 ? 's' : ''} · {formatPrice(data.revenue)} $</span>
                  </div>
                ))}
              </div>
            )}
            {salesReport.byCategory.length > 0 && (
              <div className="sales-breakdown">
                <p className="sales-breakdown-title">Par catégorie</p>
                {salesReport.byCategory.map(([cat, data]) => (
                  <div key={cat} className="sales-breakdown-row">
                    <span className="sales-breakdown-name">{cat}</span>
                    <span className="sales-breakdown-stats">{data.count} · {formatPrice(data.revenue)} $</span>
                  </div>
                ))}
              </div>
            )}
            {salesReport.bySeller.length > 1 && (
              <div className="sales-breakdown">
                <p className="sales-breakdown-title">Par vendeur</p>
                {salesReport.bySeller.map(([seller, data]) => (
                  <div key={seller} className="sales-breakdown-row">
                    <span className="sales-breakdown-name">👤 {seller}</span>
                    <span className="sales-breakdown-stats">{data.count} · {formatPrice(data.revenue)} $</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* ======= TAXES DE VENTE ======= */}
      <div className="about-card" style={{ marginBottom: '12px' }}>
        <h4>🧾 Taxes de vente</h4>
        <div className="tax-section">
          <div className="tax-toggle-row">
            <label className="tax-toggle-label">
              <input type="checkbox" checked={taxEnabled} onChange={(e) => handleTaxToggle(e.target.checked)} />
              <span className="tax-toggle-text">Je perçois les taxes de vente</span>
            </label>
          </div>
          {taxEnabled && (
            <>
              <div className="store-form-row" style={{ marginTop: '12px' }}>
                <div className="form-group" style={{ flex: 1 }}>
                  <label className="form-label">TPS (%)</label>
                  <input type="number" value={tpsRate} onChange={(e) => setTpsRate(e.target.value)} onBlur={handleSaveTaxSettings} className="form-input" step="0.001" min="0" max="20" inputMode="decimal" />
                </div>
                <div className="form-group" style={{ flex: 1 }}>
                  <label className="form-label">TVQ (%)</label>
                  <input type="number" value={tvqRate} onChange={(e) => setTvqRate(e.target.value)} onBlur={handleSaveTaxSettings} className="form-input" step="0.001" min="0" max="20" inputMode="decimal" />
                </div>
              </div>
              <div className="form-group" style={{ marginTop: '8px' }}>
                <label className="form-label">Numéro TPS (optionnel)</label>
                <input type="text" value={tpsNumber} onChange={(e) => setTpsNumber(e.target.value)} onBlur={handleSaveTaxSettings} className="form-input" placeholder="Ex: 123456789RT0001" />
              </div>
              <div className="form-group">
                <label className="form-label">Numéro TVQ (optionnel)</label>
                <input type="text" value={tvqNumber} onChange={(e) => setTvqNumber(e.target.value)} onBlur={handleSaveTaxSettings} className="form-input" placeholder="Ex: 1234567890TQ0001" />
              </div>
              <div className="tax-preview">
                <p className="tax-preview-title">Aperçu sur un article à 50.00 $ :</p>
                <div className="tax-preview-row"><span>Prix</span><span>50.00 $</span></div>
                <div className="tax-preview-row"><span>TPS ({tpsRate}%)</span><span>{tpsAmount.toFixed(2)} $</span></div>
                <div className="tax-preview-row"><span>TVQ ({tvqRate}%)</span><span>{tvqAmount.toFixed(2)} $</span></div>
                <div className="tax-preview-row tax-preview-total"><span>Total</span><span>{totalWithTax.toFixed(2)} $</span></div>
              </div>
            </>
          )}
          <button className="btn btn-small btn-secondary btn-full" style={{ marginTop: '12px' }} onClick={() => setShowTaxInfo(!showTaxInfo)}>
            {showTaxInfo ? '▲ Masquer' : '📋 Ce que vous devez savoir sur les taxes'}
          </button>
          {showTaxInfo && (
            <div className="tax-info-section">
              <h5>📋 Taxes de vente — Ce que vous devez savoir</h5>
              <div className="tax-info-block">
                <p className="tax-info-subtitle">Suis-je obligé de percevoir les taxes ?</p>
                <p>Au Canada, si vos ventes totales sont inférieures à 30 000 $ sur quatre trimestres civils consécutifs, vous êtes considéré « petit fournisseur » et vous n'êtes pas <strong>obligé</strong> de vous inscrire aux taxes (TPS/TVH au fédéral et TVQ au Québec).</p>
              </div>
              <div className="tax-info-block">
                <p className="tax-info-subtitle">Avantages de s'inscrire volontairement</p>
                <p>Même sous le seuil de 30 000 $, l'inscription volontaire peut être avantageuse. Vous pouvez réclamer des crédits de taxe sur les intrants (CTI) pour récupérer la TPS et la TVQ payées sur vos achats de matériaux, fournitures, outils et équipement.</p>
              </div>
              <div className="tax-info-block">
                <p className="tax-info-subtitle">Inconvénients</p>
                <p>Si vous vous inscrivez, vous devez percevoir les taxes sur toutes vos ventes, produire des déclarations régulièrement, et remettre les montants perçus. Vos prix peuvent aussi paraître plus élevés face à des artisans non inscrits.</p>
              </div>
              <div className="tax-info-block">
                <p className="tax-info-subtitle">Si vous dépassez 30 000 $</p>
                <p>Dès que vos ventes dépassent 30 000 $, vous devez vous inscrire dans les 29 jours suivants et commencer à percevoir les taxes.</p>
              </div>
              <div className="tax-info-block">
                <p className="tax-info-subtitle">Taux au Québec</p>
                <p>TPS (fédéral) : 5 % — TVQ (Québec) : 9,975 %. Le taux combiné effectif est d'environ 14,975 %.</p>
              </div>
              <div className="tax-info-block">
                <p className="tax-info-subtitle">Ressources officielles</p>
                <p>
                  🔗 <a href="https://www.canada.ca/fr/agence-revenu/services/impot/entreprises/sujets/tps-tvh-entreprises/compte-tps-tvh/inscrire-compte.html" target="_blank" rel="noopener noreferrer">Agence du revenu du Canada — Inscription TPS/TVH</a>
                  <br />
                  🔗 <a href="https://www.revenuquebec.ca/fr/entreprises/taxes/tpstvh-et-tvq/inscription-aux-fichiers-de-la-tps-et-de-la-tvq/" target="_blank" rel="noopener noreferrer">Revenu Québec — Inscription TPS et TVQ</a>
                </p>
              </div>
              <div className="tax-info-disclaimer">
                <p>⚠️ <strong>Avis important :</strong> Cette information est fournie à titre indicatif seulement. Consultez un comptable ou un professionnel qualifié.</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ======= GESTION DES MAGASINS ======= */}
      <div className="about-card" style={{ marginBottom: '12px' }}>
        <h4>🏪 Magasins de consigne</h4>
        {stores.length === 0 ? (
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: '12px 0' }}>
            Aucun magasin configuré
          </p>
        ) : (
          <div className="stores-list">
            {stores.map((store) => (
              <div key={store.id} className="store-card">
                {editingStore === store.id ? (
                  <div className="store-edit-form">
                    <div className="form-group">
                      <label className="form-label">Nom</label>
                      <input type="text" value={storeForm.name} onChange={(e) => setStoreForm((f) => ({ ...f, name: e.target.value }))} className="form-input" />
                    </div>
                    <div className="store-form-row">
                      <div className="form-group" style={{ flex: 1 }}>
                        <label className="form-label">Commission (%)</label>
                        <input type="number" value={storeForm.commissionPercent} onChange={(e) => setStoreForm((f) => ({ ...f, commissionPercent: e.target.value }))} className="form-input" step="0.5" min="0" max="100" inputMode="decimal" placeholder="0" />
                      </div>
                      <div className="form-group" style={{ flex: 1 }}>
                        <label className="form-label">Loyer ($/mois)</label>
                        <input type="number" value={storeForm.locationFee} onChange={(e) => setStoreForm((f) => ({ ...f, locationFee: e.target.value }))} className="form-input" step="1" min="0" inputMode="decimal" placeholder="0" />
                      </div>
                    </div>
                    <div className="store-edit-actions">
                      <button className="btn btn-small btn-save" onClick={() => handleSaveStore(store.id)}>✓ Sauvegarder</button>
                      <button className="btn btn-small btn-secondary" onClick={() => setEditingStore(null)}>Annuler</button>
                    </div>
                  </div>
                ) : (
                  <div className="store-info">
                    <div className="store-header">
                      <span className="store-name">{store.name}</span>
                      <div className="store-actions-btns">
                        <button className="btn btn-small btn-edit" onClick={() => handleEditStore(store)}>✏️</button>
                        <button className="btn btn-small btn-delete" onClick={() => handleDeleteStore(store)}>🗑️</button>
                      </div>
                    </div>
                    <div className="store-details">
                      {store.commissionPercent > 0 && <span className="store-tag store-tag-commission">{store.commissionPercent}% commission</span>}
                      {store.locationFee > 0 && <span className="store-tag store-tag-location">{formatPrice(store.locationFee)} $/mois loyer</span>}
                      {!store.commissionPercent && !store.locationFee && <span className="store-tag">Aucun frais configuré</span>}
                    </div>
                    {items.filter((i) => i.status === 'consignment' && i.consignmentStoreId === store.id).length > 0 && (
                      <p className="store-consigned-count">
                        📦 {items.filter((i) => i.status === 'consignment' && i.consignmentStoreId === store.id).length} article(s) en consigne
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
        {showAddStore ? (
          <div className="store-add-form">
            <div className="form-group">
              <label className="form-label">Nom du magasin</label>
              <input type="text" value={storeForm.name} onChange={(e) => setStoreForm((f) => ({ ...f, name: e.target.value }))} className="form-input" placeholder="Ex: SF Studios" autoFocus />
            </div>
            <div className="store-form-row">
              <div className="form-group" style={{ flex: 1 }}>
                <label className="form-label">Commission (%)</label>
                <input type="number" value={storeForm.commissionPercent} onChange={(e) => setStoreForm((f) => ({ ...f, commissionPercent: e.target.value }))} className="form-input" step="0.5" min="0" max="100" inputMode="decimal" placeholder="Ex: 30" />
              </div>
              <div className="form-group" style={{ flex: 1 }}>
                <label className="form-label">Loyer ($/mois)</label>
                <input type="number" value={storeForm.locationFee} onChange={(e) => setStoreForm((f) => ({ ...f, locationFee: e.target.value }))} className="form-input" step="1" min="0" inputMode="decimal" placeholder="Ex: 50" />
              </div>
            </div>
            <div className="store-edit-actions">
              <button className="btn btn-small btn-save" onClick={handleAddStore} disabled={!storeForm.name.trim()}>✓ Ajouter</button>
              <button className="btn btn-small btn-secondary" onClick={() => { setShowAddStore(false); setStoreForm({ name: '', commissionPercent: '', locationFee: '' }); }}>Annuler</button>
            </div>
          </div>
        ) : (
          <button className="btn btn-small btn-add-store" onClick={() => { setShowAddStore(true); setStoreForm({ name: '', commissionPercent: '', locationFee: '' }); }} style={{ marginTop: '10px' }}>
            ➕ Ajouter un magasin
          </button>
        )}
      </div>

      {/* ======= RAPPORT CONSIGNES ======= */}
      <div className="about-card" style={{ marginBottom: '12px' }}>
        <h4>📊 Rapport consignes</h4>
        <div className="form-group" style={{ marginTop: '10px' }}>
          <label className="form-label">Mois</label>
          <input type="month" value={reportMonth} onChange={(e) => setReportMonth(e.target.value)} className="form-input" />
        </div>
        {!hasReportData ? (
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '10px' }}>
            Aucune activité de consigne pour ce mois
          </p>
        ) : (
          <div className="report-list">
            {monthReport
              .filter((r) => r.itemsSold > 0 || r.itemsInConsignment > 0)
              .map((r, idx) => (
                <div key={idx} className="report-store-card">
                  <div className="report-store-name">{r.storeName}</div>
                  {r.itemsInConsignment > 0 && (
                    <div className="report-row"><span>📦 En consigne actuellement</span><span>{r.itemsInConsignment} article(s)</span></div>
                  )}
                  {r.itemsSold > 0 && (
                    <>
                      <div className="report-row"><span>🏷️ Articles vendus</span><span>{r.itemsSold}</span></div>
                      <div className="report-row"><span>💰 Total ventes</span><span>{formatPrice(r.totalSales)} $</span></div>
                      {r.commissionPercent > 0 && (
                        <div className="report-row report-row-negative"><span>📉 Commission ({r.commissionPercent}%)</span><span>-{formatPrice(r.totalCommission)} $</span></div>
                      )}
                      {r.locationFee > 0 && (
                        <div className="report-row report-row-negative"><span>🏠 Loyer mensuel</span><span>-{formatPrice(r.locationFee)} $</span></div>
                      )}
                      <div className="report-row report-row-total"><span>✅ Revenu net</span><span>{formatPrice(r.totalNet - (r.locationFee || 0))} $</span></div>
                    </>
                  )}
                </div>
              ))}
          </div>
        )}
      </div>

      {/* ======= PARAMÈTRES VITRINE ======= */}
      <div className="about-card" style={{ marginBottom: '12px' }}>
        <h4>⚙️ Paramètres Vitrine</h4>
        <div className="form-group" style={{ marginTop: '10px' }}>
          <label className="form-label">Afficher les articles vendus pendant :</label>
          <select value={soldDays} onChange={(e) => handleChangeDays(e.target.value)} className="form-input">
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

      {/* ======= À PROPOS ======= */}
      <div className="about-card">
        <div className="about-logo">
          <img src="/pwa-192x192.png" alt="Vitrine Artisan" />
        </div>
        <h3>🎨 Vitrine Artisan</h3>
        <p className="about-version">Version 2.0</p>
        <p className="about-description">
          Application de gestion d'inventaire conçue pour les artisans et créateurs.
          Gérez vos articles, suivez vos consignes et enregistrez vos ventes en toute simplicité.
        </p>
        <div className="about-author">
          <p>Créé par <strong>Jean-Marc Lacroix</strong></p>
          <p>© 2026 — Tous droits réservés</p>
          <p style={{ marginTop: '12px' }}>💬 Commentaires et suggestions bienvenus</p>
          <a href="mailto:lacroix.jeanmarc@gmail.com" className="about-email">
            📧 lacroix.jeanmarc@gmail.com
          </a>
        </div>
      </div>

      {/* ======= MODAL UPGRADE INTERAC ======= */}
      {showUpgradeModal && (
        <div className="modal-overlay" onClick={() => setShowUpgradeModal(false)}>
          <div className="modal-content upgrade-modal" onClick={(e) => e.stopPropagation()}>
            <h3>🎨 Passer au Plan Artisan</h3>
            <div className="upgrade-modal-plan-selected">
              {selectedPlan === 'monthly' ? '⭐ Plan mensuel — 12,99 $ / mois' : '💎 Plan annuel — 100,00 $ / an (économisez 56 $!)'}
            </div>
            <div className="upgrade-modal-steps">
              <p className="upgrade-modal-steps-title">Pour activer votre abonnement :</p>
              <div className="upgrade-modal-step">
                <span className="upgrade-modal-step-number">1</span>
                <span>Envoyez un virement Interac de <strong>{selectedPlan === 'monthly' ? '12,99 $' : '100,00 $'}</strong> à :</span>
              </div>
              <div className="upgrade-modal-email-box">
                <span className="upgrade-modal-email-icon">📧</span>
                <span className="upgrade-modal-email-address">lacroix.jeanmarc@gmail.com</span>
              </div>
              <div className="upgrade-modal-step">
                <span className="upgrade-modal-step-number">2</span>
                <span>Dans le message du virement, indiquez le <strong>nom de votre entreprise</strong></span>
              </div>
              <div className="upgrade-modal-step">
                <span className="upgrade-modal-step-number">3</span>
                <span>Votre plan sera activé dans les <strong>24 heures</strong> suivant la réception du paiement</span>
              </div>
            </div>
            <div className="upgrade-modal-note">
              💡 Une confirmation par courriel vous sera envoyée dès l'activation.
            </div>
            <button className="btn btn-secondary btn-full" onClick={() => setShowUpgradeModal(false)} style={{ marginTop: '16px' }}>
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
