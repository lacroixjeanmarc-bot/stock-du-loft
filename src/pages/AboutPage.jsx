import { useState, useEffect } from 'react';
import { ref, onValue, update } from 'firebase/database';
import { database } from '../firebase';
import {
  subscribeToStores,
  addStore,
  updateStore,
  deleteStore,
  subscribeToItems
} from '../services/inventoryService';

const SETTINGS_PATH = 'stockduloft/settings';

function formatPrice(price) {
  return price?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

const PLANS = {
  free: {
    name: 'Découverte',
    badge: '🆓',
    articlesLimit: 25,
    vitrineLimit: 10,
    price: null
  },
  artisan: {
    name: 'Artisan',
    badge: '⭐',
    articlesLimit: Infinity,
    vitrineLimit: Infinity,
    price: { monthly: 12.99, yearly: 100.00 }
  }
};

export default function AboutPage() {
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

  useEffect(() => {
    const settingsRef = ref(database, SETTINGS_PATH);
    const unsub = onValue(settingsRef, (snap) => {
      if (snap.exists()) {
        const data = snap.val();
        if (data.vitrineSoldDays !== undefined) {
          setSoldDays(data.vitrineSoldDays);
        }
        if (data.subscription) {
          setSubscription(data.subscription);
        } else {
          setSubscription({ plan: 'free', planType: null, startDate: null, expiryDate: null });
        }
      }
    });
    return unsub;
  }, []);

  useEffect(() => {
    const unsub = subscribeToStores(setStores);
    return unsub;
  }, []);

  useEffect(() => {
    const unsub = subscribeToItems(setItems);
    return unsub;
  }, []);

  const handleChangeDays = async (value) => {
    const days = parseInt(value);
    setSoldDays(days);
    await update(ref(database, SETTINGS_PATH), { vitrineSoldDays: days });
  };

  // ---- Subscription Info ----
  const currentPlan = PLANS[subscription?.plan || 'free'];
  const totalArticles = items.filter((i) => i.status !== 'sold').length;
  const articlesPercent = currentPlan.articlesLimit === Infinity
    ? 0
    : Math.min(100, Math.round((totalArticles / currentPlan.articlesLimit) * 100));
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
    setStoreForm({
      name: store.name,
      commissionPercent: store.commissionPercent?.toString() || '',
      locationFee: store.locationFee?.toString() || ''
    });
  };

  const handleSaveStore = async (storeId) => {
    await updateStore(storeId, {
      name: storeForm.name.trim(),
      commissionPercent: parseFloat(storeForm.commissionPercent) || 0,
      locationFee: parseFloat(storeForm.locationFee) || 0
    });
    setEditingStore(null);
    setStoreForm({ name: '', commissionPercent: '', locationFee: '' });
  };

  const handleDeleteStore = async (store) => {
    const consignedItems = items.filter(
      (i) => i.status === 'consignment' && i.consignmentStoreId === store.id
    );
    if (consignedItems.length > 0) {
      alert(`Impossible de supprimer : ${consignedItems.length} article(s) en consigne chez ${store.name}`);
      return;
    }
    if (confirm(`Supprimer le magasin "${store.name}" ?`)) {
      await deleteStore(store.id);
    }
  };

  // ---- Consignment Report ----
  const getMonthReport = () => {
    const [year, month] = reportMonth.split('-').map(Number);
    const monthStart = `${year}-${String(month).padStart(2, '0')}-01`;
    const nextMonth = month === 12 ? `${year + 1}-01-01` : `${year}-${String(month + 1).padStart(2, '0')}-01`;

    const report = {};

    stores.forEach((store) => {
      report[store.id] = {
        storeName: store.name,
        commissionPercent: store.commissionPercent,
        locationFee: store.locationFee,
        totalSales: 0,
        totalCommission: 0,
        totalNet: 0,
        itemsSold: 0,
        itemsInConsignment: 0
      };
    });

    items.forEach((item) => {
      if (item.status === 'consignment' && item.consignmentStoreId && report[item.consignmentStoreId]) {
        report[item.consignmentStoreId].itemsInConsignment++;
      }

      if (
        item.status === 'sold' &&
        item.saleDate &&
        item.saleDate >= monthStart &&
        item.saleDate < nextMonth &&
        item.consignmentStoreId &&
        report[item.consignmentStoreId]
      ) {
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

  return (
    <div className="page about-page">
      <h2 className="page-title">ℹ️ À propos</h2>

      {/* ======= ABONNEMENT ======= */}
      <div className="about-card" style={{ marginBottom: '12px' }}>
        <h4>📋 Mon abonnement</h4>

        <div className="subscription-section">
          <div className="subscription-plan-row">
            <div className="subscription-plan-info">
              <span className="subscription-plan-badge">
                {currentPlan.badge} {currentPlan.name}
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
                {isFreePlan ? ` / ${currentPlan.articlesLimit}` : ' — Illimité'}
              </span>
            </div>
            {isFreePlan && (
              <div className="subscription-progress-bar">
                <div
                  className={`subscription-progress-fill ${articlesPercent >= 80 ? 'warning' : ''} ${articlesPercent >= 100 ? 'full' : ''}`}
                  style={{ width: `${articlesPercent}%` }}
                />
              </div>
            )}
          </div>

          <div className="subscription-detail-row">
            <span>🖼️ Vitrine publique</span>
            <span>{isFreePlan ? `${currentPlan.vitrineLimit} articles max` : 'Illimitée'}</span>
          </div>

          <div className="subscription-detail-row">
            <span>📍 Suivi consignes</span>
            <span>{isFreePlan ? '—' : '✓'}</span>
          </div>

          <div className="subscription-detail-row">
            <span>🏷️ Étiquettes QR</span>
            <span>{isFreePlan ? '—' : '✓'}</span>
          </div>

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
                <button className="btn btn-upgrade btn-full">
                  ⭐ Plan Artisan — 12.99 $/mois
                </button>
                <button className="btn btn-upgrade-yearly btn-full">
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
                      <input
                        type="text"
                        value={storeForm.name}
                        onChange={(e) => setStoreForm((f) => ({ ...f, name: e.target.value }))}
                        className="form-input"
                      />
                    </div>
                    <div className="store-form-row">
                      <div className="form-group" style={{ flex: 1 }}>
                        <label className="form-label">Commission (%)</label>
                        <input
                          type="number"
                          value={storeForm.commissionPercent}
                          onChange={(e) => setStoreForm((f) => ({ ...f, commissionPercent: e.target.value }))}
                          className="form-input"
                          step="0.5"
                          min="0"
                          max="100"
                          inputMode="decimal"
                          placeholder="0"
                        />
                      </div>
                      <div className="form-group" style={{ flex: 1 }}>
                        <label className="form-label">Loyer ($/mois)</label>
                        <input
                          type="number"
                          value={storeForm.locationFee}
                          onChange={(e) => setStoreForm((f) => ({ ...f, locationFee: e.target.value }))}
                          className="form-input"
                          step="1"
                          min="0"
                          inputMode="decimal"
                          placeholder="0"
                        />
                      </div>
                    </div>
                    <div className="store-edit-actions">
                      <button className="btn btn-small btn-save" onClick={() => handleSaveStore(store.id)}>
                        ✓ Sauvegarder
                      </button>
                      <button className="btn btn-small btn-secondary" onClick={() => setEditingStore(null)}>
                        Annuler
                      </button>
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
                      {store.commissionPercent > 0 && (
                        <span className="store-tag store-tag-commission">
                          {store.commissionPercent}% commission
                        </span>
                      )}
                      {store.locationFee > 0 && (
                        <span className="store-tag store-tag-location">
                          {formatPrice(store.locationFee)} $/mois loyer
                        </span>
                      )}
                      {!store.commissionPercent && !store.locationFee && (
                        <span className="store-tag">Aucun frais configuré</span>
                      )}
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
              <input
                type="text"
                value={storeForm.name}
                onChange={(e) => setStoreForm((f) => ({ ...f, name: e.target.value }))}
                className="form-input"
                placeholder="Ex: SF Studios"
                autoFocus
              />
            </div>
            <div className="store-form-row">
              <div className="form-group" style={{ flex: 1 }}>
                <label className="form-label">Commission (%)</label>
                <input
                  type="number"
                  value={storeForm.commissionPercent}
                  onChange={(e) => setStoreForm((f) => ({ ...f, commissionPercent: e.target.value }))}
                  className="form-input"
                  step="0.5"
                  min="0"
                  max="100"
                  inputMode="decimal"
                  placeholder="Ex: 30"
                />
              </div>
              <div className="form-group" style={{ flex: 1 }}>
                <label className="form-label">Loyer ($/mois)</label>
                <input
                  type="number"
                  value={storeForm.locationFee}
                  onChange={(e) => setStoreForm((f) => ({ ...f, locationFee: e.target.value }))}
                  className="form-input"
                  step="1"
                  min="0"
                  inputMode="decimal"
                  placeholder="Ex: 50"
                />
              </div>
            </div>
            <div className="store-edit-actions">
              <button className="btn btn-small btn-save" onClick={handleAddStore} disabled={!storeForm.name.trim()}>
                ✓ Ajouter
              </button>
              <button className="btn btn-small btn-secondary" onClick={() => { setShowAddStore(false); setStoreForm({ name: '', commissionPercent: '', locationFee: '' }); }}>
                Annuler
              </button>
            </div>
          </div>
        ) : (
          <button
            className="btn btn-small btn-add-store"
            onClick={() => { setShowAddStore(true); setStoreForm({ name: '', commissionPercent: '', locationFee: '' }); }}
            style={{ marginTop: '10px' }}
          >
            ➕ Ajouter un magasin
          </button>
        )}
      </div>

      {/* ======= RAPPORT CONSIGNES ======= */}
      <div className="about-card" style={{ marginBottom: '12px' }}>
        <h4>📊 Rapport consignes</h4>

        <div className="form-group" style={{ marginTop: '10px' }}>
          <label className="form-label">Mois</label>
          <input
            type="month"
            value={reportMonth}
            onChange={(e) => setReportMonth(e.target.value)}
            className="form-input"
          />
        </div>

        {!hasReportData ? (
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '10px' }}>
            Aucune activité de consigne pour ce mois
          </p>
        ) : (
          <div className="report-list">
            {monthReport.filter((r) => r.itemsSold > 0 || r.itemsInConsignment > 0).map((r, idx) => (
              <div key={idx} className="report-store-card">
                <div className="report-store-name">{r.storeName}</div>

                {r.itemsInConsignment > 0 && (
                  <div className="report-row">
                    <span>📦 En consigne actuellement</span>
                    <span>{r.itemsInConsignment} article(s)</span>
                  </div>
                )}

                {r.itemsSold > 0 && (
                  <>
                    <div className="report-row">
                      <span>🏷️ Articles vendus</span>
                      <span>{r.itemsSold}</span>
                    </div>
                    <div className="report-row">
                      <span>💰 Total ventes</span>
                      <span>{formatPrice(r.totalSales)} $</span>
                    </div>
                    {r.commissionPercent > 0 && (
                      <div className="report-row report-row-negative">
                        <span>📉 Commission ({r.commissionPercent}%)</span>
                        <span>-{formatPrice(r.totalCommission)} $</span>
                      </div>
                    )}
                    {r.locationFee > 0 && (
                      <div className="report-row report-row-negative">
                        <span>🏠 Loyer mensuel</span>
                        <span>-{formatPrice(r.locationFee)} $</span>
                      </div>
                    )}
                    <div className="report-row report-row-total">
                      <span>✅ Revenu net</span>
                      <span>{formatPrice(r.totalNet - (r.locationFee || 0))} $</span>
                    </div>
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

      {/* ======= À PROPOS ======= */}
      <div className="about-card">
        <div className="about-logo">
          <img src="/pwa-192x192.png" alt="Stock du Loft" />
        </div>
        <h3>✂️ Stock du Loft</h3>
        <p className="about-version">Version 1.2</p>
        <p className="about-description">
          Application de gestion d'inventaire conçue pour les artisans et créateurs.
          Gérez vos articles, suivez vos consignes et enregistrez vos ventes en toute simplicité.
        </p>
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
      </div>
    </div>
  );
}
