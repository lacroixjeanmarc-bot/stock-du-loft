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
  deleteTenant
} from '../services/adminService';

function formatPrice(price) {
  return price?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

export default function AdminPage() {
  const { user } = useAuth();
  const [tenants, setTenants] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [addForm, setAddForm] = useState({ businessName: '', ownerName: '', email: '', phone: '' });
  const [expandedTenant, setExpandedTenant] = useState(null);
  const [editingNotes, setEditingNotes] = useState(null);
  const [notesText, setNotesText] = useState('');

  useEffect(() => {
    if (!isSuperAdmin(user)) return;
    const unsub = subscribeToTenants(setTenants);
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

  // ---- Handlers ----
  const handleAddTenant = async () => {
    if (!addForm.businessName.trim() || !addForm.ownerName.trim()) return;
    await addTenant(addForm);
    setAddForm({ businessName: '', ownerName: '', email: '', phone: '' });
    setShowAddForm(false);
  };

  const handleActivate = async (tenantId, planType) => {
    const label = planType === 'yearly' ? 'annuel (100$/an)' : 'mensuel (12.99$/mois)';
    if (confirm(`Activer le plan ${label}?`)) {
      await activatePlan(tenantId, planType);
    }
  };

  const handleRenew = async (tenantId) => {
    if (confirm('Renouveler le plan?')) {
      await renewPlan(tenantId);
    }
  };

  const handleDowngrade = async (tenantId) => {
    if (confirm('Rétrograder au plan gratuit?')) {
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
            onClick={() => { setShowAddForm(!showAddForm); setAddForm({ businessName: '', ownerName: '', email: '', phone: '' }); }}
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
              <button className="btn btn-small btn-save" onClick={handleAddTenant} disabled={!addForm.businessName.trim() || !addForm.ownerName.trim()}>
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
                          <span className="admin-detail-value">{formatDate(tenant.createdAt ? new Date(tenant.createdAt).toISOString() : null)}</span>
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
                              <span className={`admin-detail-value ${isExpired ? 'text-danger' : days <= 7 ? 'text-warning' : ''}`}>
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
                              <button className="btn btn-small btn-save" onClick={() => handleSaveNotes(tenant.id)}>✓</button>
                              <button className="btn btn-small btn-secondary" onClick={() => setEditingNotes(null)}>Annuler</button>
                            </div>
                          </div>
                        ) : (
                          <div
                            className="admin-notes-display"
                            onClick={() => { setEditingNotes(tenant.id); setNotesText(tenant.notes || ''); }}
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
                            <button className="btn btn-small btn-upgrade" onClick={() => handleActivate(tenant.id, 'monthly')}>
                              ⭐ Activer mensuel
                            </button>
                            <button className="btn btn-small btn-upgrade-yearly" onClick={() => handleActivate(tenant.id, 'yearly')}>
                              💎 Activer annuel
                            </button>
                          </>
                        ) : (
                          <>
                            <button className="btn btn-small btn-save" onClick={() => handleRenew(tenant.id)}>
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
    </div>
  );
}
