import { useState, useEffect, useRef } from 'react';
import {
  subscribeToItems,
  returnToInventory,
  deleteItem,
  consignItem,
  updateItem,
  getItemPhoto,
  getAllItemPhotos,
  addExtraPhoto,
  deleteExtraPhoto,
  subscribeToStores
} from '../services/inventoryService';

const STATUS_LABELS = {
  all: 'Tous',
  inventory: 'En stock',
  consignment: 'En consigne',
  sold: 'Vendus'
};

const STATUS_COLORS = {
  inventory: '#2ecc71',
  consignment: '#f39c12',
  sold: '#e74c3c'
};

function formatPrice(price) {
  return price?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

export default function InventoryList() {
  const [items, setItems] = useState([]);
  const [stores, setStores] = useState([]);
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [expandedItem, setExpandedItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadedPhotos, setLoadedPhotos] = useState({});
  const [activePhotoIndex, setActivePhotoIndex] = useState({});
  const [editingItem, setEditingItem] = useState(null);
  const [editForm, setEditForm] = useState({ description: '', longDescription: '', price: '', category: '' });
  const [addingPhoto, setAddingPhoto] = useState(false);
  const [consigningItem, setConsigningItem] = useState(null);
  const [consignStoreId, setConsignStoreId] = useState('');
  const [consignStoreName, setConsignStoreName] = useState('');
  const extraPhotoRef = useRef(null);

  useEffect(() => {
    const unsubscribe = subscribeToItems((data) => {
      setItems(data);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    const unsubscribe = subscribeToStores(setStores);
    return unsubscribe;
  }, []);

  const handleExpand = async (item) => {
    if (expandedItem === item.id) {
      setExpandedItem(null);
      return;
    }
    setExpandedItem(item.id);
    setActivePhotoIndex((prev) => ({ ...prev, [item.id]: 0 }));

    if (!loadedPhotos[item.id]) {
      if (item.hasPhoto || item.photoBase64) {
        const photos = await getAllItemPhotos(item.id);
        if (photos.length === 0 && item.photoBase64) {
          setLoadedPhotos((prev) => ({ ...prev, [item.id]: [item.photoBase64] }));
        } else {
          setLoadedPhotos((prev) => ({ ...prev, [item.id]: photos }));
        }
      }
    }
  };

  const handleAddExtraPhoto = async (item, e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setAddingPhoto(true);
    try {
      const result = await addExtraPhoto(item.id, file);
      if (result === null) {
        alert('Maximum de 5 photos atteint pour cet article.');
      } else {
        const photos = await getAllItemPhotos(item.id);
        setLoadedPhotos((prev) => ({ ...prev, [item.id]: photos }));
      }
    } catch (err) {
      console.error('Erreur ajout photo:', err);
      alert('Erreur lors de l\'ajout de la photo.');
    } finally {
      setAddingPhoto(false);
      if (extraPhotoRef.current) extraPhotoRef.current.value = '';
    }
  };

  const handleDeleteExtraPhoto = async (item, photoIndex) => {
    if (photoIndex === 0) {
      alert('La photo principale ne peut pas être supprimée ici.');
      return;
    }
    if (!confirm('Supprimer cette photo?')) return;
    try {
      await deleteExtraPhoto(item.id, photoIndex);
      const photos = await getAllItemPhotos(item.id);
      setLoadedPhotos((prev) => ({ ...prev, [item.id]: photos }));
      setActivePhotoIndex((prev) => ({ ...prev, [item.id]: 0 }));
    } catch (err) {
      console.error('Erreur suppression photo:', err);
    }
  };

  const filteredItems = items.filter((item) => {
    const matchesFilter = filter === 'all' || item.status === filter;
    const matchesSearch =
      search === '' ||
      item.uniqueId?.toLowerCase().includes(search.toLowerCase()) ||
      item.description?.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const counts = {
    all: items.length,
    inventory: items.filter((i) => i.status === 'inventory').length,
    consignment: items.filter((i) => i.status === 'consignment').length,
    sold: items.filter((i) => i.status === 'sold').length
  };

  const handleEdit = (item) => {
    setEditingItem(item.id);
    setEditForm({
      description: item.description || '',
      longDescription: item.longDescription || '',
      price: item.price?.toString() || '',
      category: item.category || ''
    });
  };

  const handleSaveEdit = async (item) => {
    await updateItem(item.id, {
      description: editForm.description.trim(),
      longDescription: editForm.longDescription.trim(),
      price: parseFloat(editForm.price) || 0,
      category: editForm.category.trim()
    });
    setEditingItem(null);
  };

  const handleCancelEdit = () => {
    setEditingItem(null);
  };

  const handleReturnToInventory = async (item) => {
    if (confirm(`Remettre "${item.uniqueId}" en inventaire?`)) {
      await returnToInventory(item.id);
      setExpandedItem(null);
    }
  };

  const handleDelete = async (item) => {
    if (confirm(`Supprimer définitivement "${item.uniqueId}"?`)) {
      await deleteItem(item.id);
      setExpandedItem(null);
      setLoadedPhotos((prev) => {
        const copy = { ...prev };
        delete copy[item.id];
        return copy;
      });
    }
  };

  // ---- Consignment avec sélection de magasin ----
  const handleStartConsign = (item) => {
    setConsigningItem(item.id);
    setConsignStoreId('');
    setConsignStoreName('');
  };

  const handleConfirmConsign = async (item) => {
    let storeName = consignStoreName.trim();
    let storeId = consignStoreId;

    // Si un magasin sauvegardé est sélectionné
    if (consignStoreId && consignStoreId !== 'other') {
      const store = stores.find((s) => s.id === consignStoreId);
      if (store) storeName = store.name;
    }

    if (!storeName) {
      alert('Entrez le nom du magasin');
      return;
    }

    await consignItem(item.id, storeName, null, storeId === 'other' ? '' : storeId);
    setConsigningItem(null);
    setExpandedItem(null);
  };

  const handleCancelConsign = () => {
    setConsigningItem(null);
  };

  if (loading) {
    return (
      <div className="page-loading">
        <div className="loading-spinner" />
        <p>Chargement de l'inventaire...</p>
      </div>
    );
  }

  return (
    <div className="page inventory-page">
      <div className="search-bar">
        <input
          type="text"
          placeholder="🔍 Rechercher par # ou description..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
        {search && (
          <button className="search-clear" onClick={() => setSearch('')}>✕</button>
        )}
      </div>

      <div className="status-filters">
        {Object.entries(STATUS_LABELS).map(([key, label]) => (
          <button
            key={key}
            className={`filter-btn ${filter === key ? 'active' : ''}`}
            onClick={() => setFilter(key)}
          >
            {label}
            <span className="filter-count">{counts[key]}</span>
          </button>
        ))}
      </div>

      {filteredItems.length === 0 ? (
        <div className="empty-state">
          <p className="empty-icon">📭</p>
          <p>{search ? 'Aucun résultat trouvé' : 'Aucun item dans cette catégorie'}</p>
        </div>
      ) : (
        <div className="items-list">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`item-card ${expandedItem === item.id ? 'expanded' : ''}`}
              onClick={() => handleExpand(item)}
            >
              <div className="item-row">
                <div className="item-photo">
                  {item.thumbnail ? (
                    <img src={item.thumbnail} alt={item.description} className="item-thumbnail" />
                  ) : item.hasPhoto || item.photoBase64 ? (
                    <div className="photo-placeholder">🖼️</div>
                  ) : (
                    <div className="photo-placeholder">📷</div>
                  )}
                  {(item.photoCount > 1) && (
                    <span className="photo-count-badge">{item.photoCount}</span>
                  )}
                </div>

                <div className="item-info">
                  <div className="item-id-row">
                    <span className="item-unique-id">#{item.uniqueId}</span>
                    <span className="item-status-badge" style={{ backgroundColor: STATUS_COLORS[item.status] }}>
                      {STATUS_LABELS[item.status]}
                    </span>
                  </div>
                  <p className="item-description">{item.description}</p>
                  <div className="item-meta">
                    <span className="item-price">{formatPrice(item.price)} $</span>
                    {item.itemDate && (
                      <span className="item-date">🧵 {item.itemDate}</span>
                    )}
                    {item.status === 'consignment' && (
                      <span className="item-consignment">📍 {item.consignmentStore} {item.consignmentDate && `(${item.consignmentDate})`}</span>
                    )}
                    {item.status === 'sold' && (
                      <span className="item-sold-info">
                        {item.isGift
                          ? <>🎁 Cadeau{item.giftNote ? ` — ${item.giftNote}` : ''} · </>
                          : item.salePrice && item.salePrice !== item.price
                            ? <><s>{formatPrice(item.price)} $</s> → {formatPrice(item.salePrice)} $ · </>
                            : ''
                        }
                        {item.saleDate} — {item.sellerName}
                        {item.marketName ? ` · 📍 ${item.marketName}` : ''}
                        {item.commissionAmount > 0 && (
                          <> · 💸 Net: {formatPrice(item.netRevenue)} $</>
                        )}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {expandedItem === item.id && (
                <div onClick={(e) => e.stopPropagation()}>
                  {/* Galerie photos */}
                  {loadedPhotos[item.id] && loadedPhotos[item.id].length > 0 && (
                    <div className="photo-gallery">
                      <div className="gallery-main">
                        <img src={loadedPhotos[item.id][activePhotoIndex[item.id] || 0]} alt={item.description} />
                      </div>
                      {loadedPhotos[item.id].length > 1 && (
                        <div className="gallery-thumbs">
                          {loadedPhotos[item.id].map((photo, idx) => (
                            <div
                              key={idx}
                              className={`gallery-thumb ${(activePhotoIndex[item.id] || 0) === idx ? 'active' : ''}`}
                              onClick={() => setActivePhotoIndex((prev) => ({ ...prev, [item.id]: idx }))}
                            >
                              <img src={photo} alt={`Photo ${idx + 1}`} />
                              {idx > 0 && editingItem === item.id && (
                                <button
                                  className="gallery-thumb-delete"
                                  onClick={(e) => { e.stopPropagation(); handleDeleteExtraPhoto(item, idx); }}
                                >✕</button>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {item.hasPhoto && !loadedPhotos[item.id] && (
                    <div className="item-expanded-photo loading">
                      <div className="loading-spinner" />
                    </div>
                  )}

                  {item.longDescription && editingItem !== item.id && (
                    <div className="item-long-description">
                      <p>{item.longDescription}</p>
                    </div>
                  )}

                  {/* Info commission pour items vendus depuis consigne */}
                  {item.status === 'sold' && item.commissionAmount > 0 && (
                    <div className="item-commission-info">
                      <div className="commission-row">
                        <span>Prix de vente</span>
                        <span>{formatPrice(item.salePrice)} $</span>
                      </div>
                      <div className="commission-row commission-negative">
                        <span>Commission {item.consignmentStore} ({item.commissionPercent}%)</span>
                        <span>-{formatPrice(item.commissionAmount)} $</span>
                      </div>
                      <div className="commission-row commission-total">
                        <span>Revenu net</span>
                        <span>{formatPrice(item.netRevenue)} $</span>
                      </div>
                    </div>
                  )}

                  <div className="item-actions">
                    {/* Formulaire de consigne */}
                    {consigningItem === item.id ? (
                      <div className="item-edit-form">
                        <div className="form-group">
                          <label className="form-label">Magasin de consigne</label>
                          {stores.length > 0 ? (
                            <select
                              value={consignStoreId}
                              onChange={(e) => {
                                setConsignStoreId(e.target.value);
                                if (e.target.value !== 'other') {
                                  const store = stores.find((s) => s.id === e.target.value);
                                  if (store) setConsignStoreName(store.name);
                                }
                              }}
                              className="form-input"
                            >
                              <option value="">— Choisir un magasin —</option>
                              {stores.map((store) => (
                                <option key={store.id} value={store.id}>
                                  {store.name}
                                  {store.commissionPercent > 0 ? ` (${store.commissionPercent}%)` : ''}
                                  {store.locationFee > 0 ? ` + ${store.locationFee}$/mois` : ''}
                                </option>
                              ))}
                              <option value="other">➕ Autre magasin...</option>
                            </select>
                          ) : (
                            <input
                              type="text"
                              value={consignStoreName}
                              onChange={(e) => setConsignStoreName(e.target.value)}
                              className="form-input"
                              placeholder="Nom du magasin"
                              autoFocus
                            />
                          )}
                        </div>
                        {consignStoreId === 'other' && (
                          <div className="form-group">
                            <label className="form-label">Nom du magasin</label>
                            <input
                              type="text"
                              value={consignStoreName}
                              onChange={(e) => setConsignStoreName(e.target.value)}
                              className="form-input"
                              placeholder="Nom du magasin"
                              autoFocus
                            />
                          </div>
                        )}
                        <div className="item-edit-actions">
                          <button
                            className="btn btn-small btn-consign"
                            onClick={() => handleConfirmConsign(item)}
                            disabled={!consignStoreId && !consignStoreName.trim()}
                          >
                            📍 Confirmer consigne
                          </button>
                          <button className="btn btn-small btn-secondary" onClick={handleCancelConsign}>
                            Annuler
                          </button>
                        </div>
                      </div>
                    ) : editingItem === item.id ? (
                      <div className="item-edit-form">
                        <div className="form-group">
                          <label className="form-label">Titre</label>
                          <input
                            type="text"
                            value={editForm.description}
                            onChange={(e) => setEditForm((f) => ({ ...f, description: e.target.value }))}
                            className="form-input"
                          />
                        </div>
                        <div className="form-group">
                          <label className="form-label">Description détaillée</label>
                          <textarea
                            value={editForm.longDescription}
                            onChange={(e) => setEditForm((f) => ({ ...f, longDescription: e.target.value }))}
                            className="form-input form-textarea"
                            rows="4"
                            placeholder="Décrivez l'article en détail..."
                          />
                        </div>
                        <div className="form-group">
                          <label className="form-label">Prix ($)</label>
                          <input
                            type="number"
                            value={editForm.price}
                            onChange={(e) => setEditForm((f) => ({ ...f, price: e.target.value }))}
                            className="form-input"
                            step="0.01"
                            min="0"
                            inputMode="decimal"
                          />
                        </div>
                        <div className="form-group">
                          <label className="form-label">Catégorie</label>
                          <input
                            type="text"
                            value={editForm.category}
                            onChange={(e) => setEditForm((f) => ({ ...f, category: e.target.value }))}
                            className="form-input"
                          />
                        </div>
                        <div className="form-group">
                          <label className="form-label">
                            📷 Photos ({loadedPhotos[item.id]?.length || (item.hasPhoto ? 1 : 0)}/5)
                          </label>
                          {(loadedPhotos[item.id]?.length || 0) < 5 && (
                            <>
                              <input
                                ref={extraPhotoRef}
                                type="file"
                                accept="image/*"
                                capture="environment"
                                onChange={(e) => handleAddExtraPhoto(item, e)}
                                className="hidden-input"
                              />
                              <button
                                type="button"
                                className="btn btn-small btn-add-photo"
                                onClick={() => extraPhotoRef.current?.click()}
                                disabled={addingPhoto}
                              >
                                {addingPhoto ? '⏳ Ajout en cours...' : '➕ Ajouter une photo'}
                              </button>
                            </>
                          )}
                          {(loadedPhotos[item.id]?.length || 0) >= 5 && (
                            <p className="form-hint">Maximum de 5 photos atteint</p>
                          )}
                        </div>
                        <div className="item-edit-actions">
                          <button className="btn btn-small btn-save" onClick={() => handleSaveEdit(item)}>
                            ✓ Sauvegarder
                          </button>
                          <button className="btn btn-small btn-secondary" onClick={handleCancelEdit}>
                            Annuler
                          </button>
                        </div>
                      </div>
                    ) : (
                      <>
                        <button className="btn btn-small btn-edit" onClick={() => handleEdit(item)}>
                          ✏️ Modifier
                        </button>
                        {item.status === 'inventory' && (
                          <button className="btn btn-small btn-consign" onClick={() => handleStartConsign(item)}>
                            📍 Consigne
                          </button>
                        )}
                        {(item.status === 'consignment' || item.status === 'sold') && (
                          <button className="btn btn-small btn-return" onClick={() => handleReturnToInventory(item)}>
                            📦 Retour inventaire
                          </button>
                        )}
                        <button className="btn btn-small btn-delete" onClick={() => handleDelete(item)}>
                          🗑️ Supprimer
                        </button>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
