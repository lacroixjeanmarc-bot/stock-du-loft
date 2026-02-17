import { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import {
  isSuperAdmin,
  subscribeToTenants,
  addTenant,
  updateTenant,
  activatePlan,
  renewPlan,
  downgradePlan,
  deleteTenant,
  recordPayment,
  subscribeToAllPayments
} from '../services/adminService';

function formatPrice(price) {
  return price?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

export default function AdminPage() {
  const { user } = useAuth();
  const [tenants, setTenants] = useState([]);
  const [payments, setPayments] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [addForm, setAddForm] = useState({ businessName: '', ownerName: '', email: '', phone: '' });
  const [expandedTenant, setExpandedTenant] = useState(null);
  const [editingNotes, setEditingNotes] = useState(null);
  const [notesText, setNotesText] = useState('');

  // Payment modal
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentAction, setPaymentAction] = useState(null); // { tenantId, tenantName, action: 'activate'|'renew', planType }
  const [paymentForm, setPaymentForm] = useState({
    amount: '',
    senderName: '',
    referenceNumber: '',
    paymentDate: new Date().toISOString().split('T')[0]
  });
  const [paymentLoading, setPaymentLoading] = useState(false);

  useEffect(() => {
    if (!isSuperAdmin(user)) return;
    const unsub = subscribeToTenants(setTenants);
    return unsub;
  }, [user]);

  useEffect(() => {
    if (!isSuperAdmin(user)) return;
    const unsub = subscribeToAllPayments(setPayments);
    return unsub;
  }, [user]);

  // Vérification admin
  if (!isSuperAdmin(user)) {
    return (
      <div className="page admin-page">
        <h2 className="page-title">🔒 Accès refusé</h2>
        <p style={{ textAlign: 'center', color: 'var(--text-muted)' }}>
          Cette page est réservée à l'administrateur.
        </p>
      </div>
    );
  }

  // ---- Stats ----
  const totalTenants = tenants.length;
  const payingTenants = tenants.filter((t) => t.plan === 'artisan').length;
  const freeTenants = tenants.filter((t) => t.plan === 'free').length;
  const monthlyRevenue = tenants.reduce((sum, t) => {
    if (t.plan !== 'artisan') return sum;
    if (t.planType === 'yearly') return sum + (100 / 12);
    return sum + 12.99;
  }, 0);

  const expiringSoon = tenants.filter((t) => {
    if (t.plan !== 'artisan' || !t.expiryDate) return false;
    const days = Math.ceil((new Date(t.expiryDate) - new Date()) / (1000 * 60 * 60 * 24));
    return days <= 7 && days > 0;
  });

  const expired = tenants.filter((t) => {
    if (t.plan !== 'artisan' || !t.expiryDate) return false;
    return new Date(t.expiryDate) < new Date();
  });

  // ---- Get payments for a tenant ----
  const getTenantPayments = (tenantId) => {
    return payments.filter((p) => p.tenantId === tenantId);
  };

  // ---- Payment Modal Handlers ----
  const openPaymentModal = (tenantId, tenantName, ownerName, action, planType) => {
    const amount = planType === 'yearly' ? '100.00' : '12.99';
    setPaymentAction({ tenantId, tenantName, action, planType });
    setPaymentForm({
      amount,
      senderName: ownerName || '',
      referenceNumber: '',
      paymentDate: new Date().toISOString().split('T')[0]
    });
    setShowPaymentModal(true);
  };

  const handleConfirmPayment = async () => {
    if (!paymentForm.referenceNumber.trim()) {
      alert('Le numéro de référence Interac est obligatoire.');
      return;
    }
    if (!paymentForm.amount) {
      alert('Le montant est obligatoire.');
      return;
    }

    setPaymentLoading(true);
    try {
      const { tenantId, action, planType } = paymentAction;

      // Enregistrer le paiement
      await recordPayment(tenantId, {
        ...paymentForm,
        planType,
        action: action === 'activate' ? 'activation' : 'renewal'
      });

      // Activer ou renouveler le plan
      if (action === 'activate') {
        await activatePlan(tenantId, planType);
      } else {
        await renewPlan(tenantId, planType);
      }

      setShowPaymentModal(false);
      setPaymentAction(null);
    } catch (error) {
      console.error('Erreur:', error);
      alert('Erreur lors du traitement. Réessayez.');
    } finally {
      setPaymentLoading(false);
    }
  };

  // ---- Handlers ----
  const handleAddTenant = async () => {
    if (!addForm.businessName.trim() || !addForm.ownerName.trim()) return;
    await addTenant(addForm);
    setAddForm({ businessName: '', ownerName: '', email: '', phone: '' });
    setShowAddForm(false);
  };

  const handleDowngrade = async (tenantId) => {
    if (confirm('Rétrograder au plan gratuit? Le client perdra les fonctions premium.')) {
      await downgradePlan(tenantId);
    }
  };

  const handleDelete = async (tenant) => {
    if (confirm(`Supprimer "${tenant.businessName}" ? Cette action est irréversible.`)) {
      await deleteTenant(tenant.id);
      setExpandedTenant(null);
    }
  };

  const handleSaveNotes = async (tenantId) => {
    await updateTenant(tenantId, { notes: notesText });
    setEditingNotes(null);
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return '—';
    return new Date(dateStr).toLocaleDateString('fr-CA');
  };

  const formatDateTime = (timestamp) => {
    if (!timestamp) return '—';
    return new Date(timestamp).toLocaleDateString('fr-CA', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const daysUntil = (dateStr) => {
    if (!dateStr) return null;
    return Math.ceil((new Date(dateStr) - new Date()) / (1000 * 60 * 60 * 24));
  };

  const getPlanBadgeClass = (tenant) => {
    if (tenant.plan === 'free') return 'plan-badge-free';
    if (tenant.expiryDate && new Date(tenant.expiryDate) < new Date()) return 'plan-badge-expired';
    return 'plan-badge-artisan';
  };

  const getPlanLabel = (tenant) => {
    if (tenant.plan === 'free') return '🆓 Découverte';
    if (tenant.expiryDate && new Date(tenant.expiryDate) < new Date()) return '⚠️ Expiré';
    return '⭐ Artisan';
  };

  return (
    <div className="page admin-page">
      <h2 className="page-title">🛡️ Admin — Vitrine Artisan</h2>

      {/* ======= STATS ======= */}
      <div className="admin-stats">
        <div className="admin-stat-card">
          <span className="admin-stat-number">{totalTenants}</span>
          <span className="admin-stat-label">Artisans</span>
        </div>
        <div className="admin-stat-card stat-paying">
          <span className="admin-stat-number">{payingTenants}</span>
          <span className="admin-stat-label">Payants</span>
        </div>
        <div className="admin-stat-card stat-free">
          <span className="admin-stat-number">{freeTenants}</span>
          <span className="admin-stat-label">Gratuits</span>
        </div>
        <div className="admin-stat-card stat-revenue">
          <span className="admin-stat-number">{formatPrice(monthlyRevenue)} $</span>
          <span className="admin-stat-label">Rev./mois</span>
        </div>
      </div>

      {/* ======= ALERTES ======= */}
      {(expiringSoon.length > 0 || expired.length > 0) && (
        <div className="admin-alerts">
          {expired.length > 0 && (
            <div className="admin-alert admin-alert-danger">
              🚨 {expired.length} plan(s) expiré(s) — action requise
            </div>
          )}
          {expiringSoon.length > 0 && (
            <div className="admin-alert admin-alert-warning">
              ⏰ {expiringSoon.length} plan(s) expire(nt) dans 7 jours
            </div>
          )}
        </div>
      )}

      {/* ======= LISTE DES TENANTS ======= */}
      <div className="admin-section">
        <div className="admin-section-header">
          <h3>👥 Artisans</h3>
          <button
            className="btn btn-small btn-add-store"
            onClick={() => {
              setShowAddForm(!showAddForm);
              setAddForm({ businessName: '', ownerName: '', email: '', phone: '' });
            }}
          >
            ➕ Nouveau client
          </button>
        </div>

        {/* Formulaire d'ajout */}
        {showAddForm && (
          <div className="admin-add-form">
            <div className="form-group">
              <label className="form-label">Nom de l'entreprise</label>
              <input
                type="text"
                value={addForm.businessName}
                onChange={(e) => setAddForm((f) => ({ ...f, businessName: e.target.value }))}
                className="form-input"
                placeholder="Ex: Les Créations de Marie"
                autoFocus
              />
            </div>
            <div className="form-group">
              <label className="form-label">Nom du propriétaire</label>
              <input
                type="text"
                value={addForm.ownerName}
                onChange={(e) => setAddForm((f) => ({ ...f, ownerName: e.target.value }))}
                className="form-input"
                placeholder="Ex: Marie Tremblay"
              />
            </div>
            <div className="store-form-row">
              <div className="form-group" style={{ flex: 1 }}>
                <label className="form-label">Courriel</label>
                <input
                  type="email"
                  value={addForm.email}
                  onChange={(e) => setAddForm((f) => ({ ...f, email: e.target.value }))}
                  className="form-input"
                  placeholder="marie@gmail.com"
                />
              </div>
              <div className="form-group" style={{ flex: 1 }}>
                <label className="form-label">Téléphone</label>
                <input
                  type="tel"
                  value={addForm.phone}
                  onChange={(e) => setAddForm((f) => ({ ...f, phone: e.target.value }))}
                  className="form-input"
                  placeholder="819-555-1234"
                />
              </div>
            </div>
            <div className="store-edit-actions">
              <button
                className="btn btn-small btn-save"
                onClick={handleAddTenant}
                disabled={!addForm.businessName.trim() || !addForm.ownerName.trim()}
              >
                ✓ Ajouter
              </button>
              <button className="btn btn-small btn-secondary" onClick={() => setShowAddForm(false)}>
                Annuler
              </button>
            </div>
          </div>
        )}

        {/* Liste */}
        {tenants.length === 0 ? (
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textAlign: 'center', padding: '20px 0' }}>
            Aucun artisan inscrit
          </p>
        ) : (
          <div className="admin-tenants-list">
            {tenants.map((tenant) => {
              const isExpanded = expandedTenant === tenant.id;
              const days = daysUntil(tenant.expiryDate);
              const isExpired = tenant.plan === 'artisan' && days !== null && days <= 0;
              const tenantPayments = getTenantPayments(tenant.id);

              return (
                <div
                  key={tenant.id}
                  className={`admin-tenant-card ${isExpanded ? 'expanded' : ''} ${isExpired ? 'tenant-expired' : ''}`}
                  onClick={() => setExpandedTenant(isExpanded ? null : tenant.id)}
                >
                  {/* Résumé */}
                  <div className="admin-tenant-summary">
                    <div className="admin-tenant-info">
                      <span className="admin-tenant-business">{tenant.businessName}</span>
                      <span className="admin-tenant-owner">{tenant.ownerName}</span>
                    </div>
                    <span className={`admin-plan-badge ${getPlanBadgeClass(tenant)}`}>
                      {getPlanLabel(tenant)}
                    </span>
                  </div>

                  {/* Détails */}
                  {isExpanded && (
                    <div className="admin-tenant-details" onClick={(e) => e.stopPropagation()}>
                      <div className="admin-detail-grid">
                        <div className="admin-detail-item">
                          <span className="admin-detail-label">📧 Courriel</span>
                          <span className="admin-detail-value">{tenant.email || '—'}</span>
                        </div>
                        <div className="admin-detail-item">
                          <span className="admin-detail-label">📱 Téléphone</span>
                          <span className="admin-detail-value">{tenant.phone || '—'}</span>
                        </div>
                        <div className="admin-detail-item">
                          <span className="admin-detail-label">📅 Inscrit le</span>
                          <span className="admin-detail-value">
                            {formatDate(tenant.createdAt ? new Date(tenant.createdAt).toISOString() : null)}
                          </span>
                        </div>
                        {tenant.plan === 'artisan' && (
                          <>
                            <div className="admin-detail-item">
                              <span className="admin-detail-label">💳 Type</span>
                              <span className="admin-detail-value">
                                {tenant.planType === 'yearly' ? 'Annuel (100$/an)' : 'Mensuel (12.99$/mois)'}
                              </span>
                            </div>
                            <div className="admin-detail-item">
                              <span className="admin-detail-label">📅 Début</span>
                              <span className="admin-detail-value">{formatDate(tenant.startDate)}</span>
                            </div>
                            <div className="admin-detail-item">
                              <span className="admin-detail-label">⏰ Expiration</span>
                              <span
                                className={`admin-detail-value ${isExpired ? 'text-danger' : days <= 7 ? 'text-warning' : ''}`}
                              >
                                {formatDate(tenant.expiryDate)}
                                {days !== null && (
                                  <span className="admin-days-badge">
                                    {isExpired ? `Expiré (${Math.abs(days)}j)` : `${days}j`}
                                  </span>
                                )}
                              </span>
                            </div>
                          </>
                        )}
                      </div>

                      {/* Historique des paiements */}
                      {tenantPayments.length > 0 && (
                        <div className="admin-payments-history">
                          <p className="admin-payments-title">💳 Historique des paiements</p>
                          {tenantPayments.map((p) => (
                            <div key={p.id} className="admin-payment-row">
                              <div className="admin-payment-info">
                                <span className="admin-payment-amount">{formatPrice(p.amount)} $</span>
                                <span className="admin-payment-type">
                                  {p.action === 'activation' ? '🟢 Activation' : '🔄 Renouvellement'}
                                  {' — '}
                                  {p.planType === 'yearly' ? 'Annuel' : 'Mensuel'}
                                </span>
                              </div>
                              <div className="admin-payment-details">
                                <span>📅 {formatDate(p.paymentDate)}</span>
                                <span>👤 {p.senderName}</span>
                                <span>🔖 {p.referenceNumber}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Notes */}
                      <div className="admin-notes">
                        {editingNotes === tenant.id ? (
                          <div className="form-group">
                            <label className="form-label">📝 Notes</label>
                            <textarea
                              value={notesText}
                              onChange={(e) => setNotesText(e.target.value)}
                              className="form-input form-textarea"
                              rows="3"
                              placeholder="Notes sur ce client..."
                            />
                            <div className="store-edit-actions" style={{ marginTop: '6px' }}>
                              <button className="btn btn-small btn-save" onClick={() => handleSaveNotes(tenant.id)}>
                                ✓
                              </button>
                              <button className="btn btn-small btn-secondary" onClick={() => setEditingNotes(null)}>
                                Annuler
                              </button>
                            </div>
                          </div>
                        ) : (
                          <div
                            className="admin-notes-display"
                            onClick={() => {
                              setEditingNotes(tenant.id);
                              setNotesText(tenant.notes || '');
                            }}
                          >
                            <span className="admin-detail-label">📝 Notes</span>
                            <p>{tenant.notes || 'Cliquez pour ajouter une note...'}</p>
                          </div>
                        )}
                      </div>

                      {/* Actions */}
                      <div className="admin-tenant-actions">
                        {tenant.plan === 'free' ? (
                          <>
                            <button
                              className="btn btn-small btn-upgrade"
                              onClick={() =>
                                openPaymentModal(tenant.id, tenant.businessName, tenant.ownerName, 'activate', 'monthly')
                              }
                            >
                              ⭐ Activer mensuel
                            </button>
                            <button
                              className="btn btn-small btn-upgrade-yearly"
                              onClick={() =>
                                openPaymentModal(tenant.id, tenant.businessName, tenant.ownerName, 'activate', 'yearly')
                              }
                            >
                              💎 Activer annuel
                            </button>
                          </>
                        ) : (
                          <>
                            <button
                              className="btn btn-small btn-save"
                              onClick={() =>
                                openPaymentModal(tenant.id, tenant.businessName, tenant.ownerName, 'renew', tenant.planType)
                              }
                            >
                              🔄 Renouveler
                            </button>
                            <button className="btn btn-small btn-secondary" onClick={() => handleDowngrade(tenant.id)}>
                              ⬇️ Plan gratuit
                            </button>
                          </>
                        )}
                        <button className="btn btn-small btn-delete" onClick={() => handleDelete(tenant)}>
                          🗑️ Supprimer
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* ======= MODAL PAIEMENT INTERAC ======= */}
      {showPaymentModal && paymentAction && (
        <div className="modal-overlay" onClick={() => !paymentLoading && setShowPaymentModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '440px' }}>
            <h3>
              💳{' '}
              {paymentAction.action === 'activate' ? 'Activer' : 'Renouveler'} — {paymentAction.tenantName}
            </h3>

            <div className="upgrade-modal-plan-selected">
              {paymentAction.planType === 'yearly'
                ? '💎 Plan annuel — 100,00 $ / an'
                : '⭐ Plan mensuel — 12,99 $ / mois'}
            </div>

            <div style={{ marginBottom: '16px' }}>
              <p style={{ fontSize: '0.9rem', color: '#333', marginBottom: '12px', fontWeight: 600 }}>
                Informations du virement Interac reçu :
              </p>

              <div className="form-group">
                <label className="form-label">Montant reçu ($) *</label>
                <input
                  type="number"
                  value={paymentForm.amount}
                  onChange={(e) => setPaymentForm((f) => ({ ...f, amount: e.target.value }))}
                  className="form-input"
                  step="0.01"
                  min="0"
                  inputMode="decimal"
                  style={{ color: '#333', backgroundColor: '#fff' }}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Envoyé par *</label>
                <input
                  type="text"
                  value={paymentForm.senderName}
                  onChange={(e) => setPaymentForm((f) => ({ ...f, senderName: e.target.value }))}
                  className="form-input"
                  placeholder="Nom sur le virement"
                  style={{ color: '#333', backgroundColor: '#fff' }}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Numéro de référence Interac *</label>
                <input
                  type="text"
                  value={paymentForm.referenceNumber}
                  onChange={(e) => setPaymentForm((f) => ({ ...f, referenceNumber: e.target.value }))}
                  className="form-input"
                  placeholder="Ex: C1A929q3ADx4"
                  style={{ color: '#333', backgroundColor: '#fff' }}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Date du paiement</label>
                <input
                  type="date"
                  value={paymentForm.paymentDate}
                  onChange={(e) => setPaymentForm((f) => ({ ...f, paymentDate: e.target.value }))}
                  className="form-input"
                  style={{ color: '#333', backgroundColor: '#fff' }}
                />
              </div>
            </div>

            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                className="btn btn-upgrade btn-full"
                onClick={handleConfirmPayment}
                disabled={paymentLoading}
                style={{ flex: 1 }}
              >
                {paymentLoading
                  ? 'Traitement...'
                  : paymentAction.action === 'activate'
                    ? '✓ Confirmer et activer'
                    : '✓ Confirmer et renouveler'}
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => setShowPaymentModal(false)}
                disabled={paymentLoading}
                style={{ flex: 0 }}
              >
                Annuler
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
