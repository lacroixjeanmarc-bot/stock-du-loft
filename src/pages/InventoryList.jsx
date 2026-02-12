import { useState, useEffect } from 'react';
import { subscribeToItems, returnToInventory, deleteItem, consignItem, updateItem, getItemPhoto } from '../services/inventoryService';

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

export default function InventoryList() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [expandedItem, setExpandedItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadedPhotos, setLoadedPhotos] = useState({});
  const [editingItem, setEditingItem] = useState(null);
  const [editForm, setEditForm] = useState({ description: '', price: '', category: '' });

  useEffect(() => {
    const unsubscribe = subscribeToItems((data) => {
      setItems(data);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  // Charger la photo quand on ouvre un item
  const handleExpand = async (item) => {
    if (expandedItem === item.id) {
      setExpandedItem(null);
      return;
    }
    setExpandedItem(item.id);

    // Charger la photo si pas déjà en cache
    if (!loadedPhotos[item.id]) {
      if (item.photoBase64) {
        // Ancien format: photo directement dans l'item
        setLoadedPhotos((prev) => ({ ...prev, [item.id]: item.photoBase64 }));
      } else if (item.hasPhoto) {
        // Nouveau format: photo séparée
        const photo = await getItemPhoto(item.id);
        if (photo) {
          setLoadedPhotos((prev) => ({ ...prev, [item.id]: photo }));
        }
      }
    }
  };

  // Filtrer les items
  const filteredItems = items.filter((item) => {
    const matchesFilter = filter === 'all' || item.status === filter;
    const matchesSearch =
      search === '' ||
      item.uniqueId?.toLowerCase().includes(search.toLowerCase()) ||
      item.description?.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // Compteurs
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
      price: item.price?.toString() || '',
      category: item.category || ''
    });
  };

  const handleSaveEdit = async (item) => {
    await updateItem(item.id, {
      description: editForm.description.trim(),
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

  const handleConsign = async (item) => {
    const store = prompt('Nom du commerce pour la consigne:');
    if (store) {
      await consignItem(item.id, store);
      setExpandedItem(null);
    }
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
      {/* Barre de recherche */}
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

      {/* Filtres par statut */}
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

      {/* Liste des items */}
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
                {/* Miniature ou placeholder */}
                <div className="item-photo">
                  {item.thumbnail ? (
                    <img src={item.thumbnail} alt={item.description} className="item-thumbnail" />
                  ) : item.hasPhoto || item.photoBase64 ? (
                    <div className="photo-placeholder">🖼️</div>
                  ) : (
                    <div className="photo-placeholder">📷</div>
                  )}
                </div>

                {/* Info */}
                <div className="item-info">
                  <div className="item-id-row">
                    <span className="item-unique-id">#{item.uniqueId}</span>
                    <span
                      className="item-status-badge"
                      style={{ backgroundColor: STATUS_COLORS[item.status] }}
                    >
                      {STATUS_LABELS[item.status]}
                    </span>
                  </div>
                  <p className="item-description">{item.description}</p>
                  <div className="item-meta">
                    <span className="item-price">{item.price?.toFixed(2)} $</span>
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
                            ? <><s>{item.price?.toFixed(2)} $</s> → {item.salePrice?.toFixed(2)} $ · </>
                            : ''
                        }
                        {item.saleDate} — {item.sellerName}
                        {item.marketName ? ` · 📍 ${item.marketName}` : ''}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Expanded: photo + actions */}
              {expandedItem === item.id && (
                <div onClick={(e) => e.stopPropagation()}>
                  {/* Photo chargée à la demande */}
                  {loadedPhotos[item.id] && (
                    <div className="item-expanded-photo">
                      <img src={loadedPhotos[item.id]} alt={item.description} />
                    </div>
                  )}
                  {item.hasPhoto && !loadedPhotos[item.id] && (
                    <div className="item-expanded-photo loading">
                      <div className="loading-spinner" />
                    </div>
                  )}

                  <div className="item-actions">
                    {/* Formulaire d'édition */}
                    {editingItem === item.id ? (
                      <div className="item-edit-form">
                        <div className="form-group">
                          <label className="form-label">Description</label>
                          <input
                            type="text"
                            value={editForm.description}
                            onChange={(e) => setEditForm(f => ({ ...f, description: e.target.value }))}
                            className="form-input"
                          />
                        </div>
                        <div className="form-group">
                          <label className="form-label">Prix ($)</label>
                          <input
                            type="number"
                            value={editForm.price}
                            onChange={(e) => setEditForm(f => ({ ...f, price: e.target.value }))}
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
                            onChange={(e) => setEditForm(f => ({ ...f, category: e.target.value }))}
                            className="form-input"
                          />
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
                          <button className="btn btn-small btn-consign" onClick={() => handleConsign(item)}>
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
