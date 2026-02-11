import { useState, useEffect } from 'react';
import { subscribeToItems, returnToInventory, deleteItem, consignItem } from '../services/inventoryService';

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

  useEffect(() => {
    const unsubscribe = subscribeToItems((data) => {
      setItems(data);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

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
              onClick={() => setExpandedItem(expandedItem === item.id ? null : item.id)}
            >
              <div className="item-row">
                {/* Photo thumbnail */}
                <div className="item-photo">
                  {item.photoBase64 ? (
                    <img src={item.photoBase64} alt={item.description} loading="lazy" />
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
                        {item.salePrice && item.salePrice !== item.price
                          ? <><s>{item.price?.toFixed(2)} $</s> → {item.salePrice?.toFixed(2)} $ · </>
                          : ''
                        }
                        {item.saleDate} — {item.sellerName}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Actions (expanded) */}
              {expandedItem === item.id && (
                <div className="item-actions" onClick={(e) => e.stopPropagation()}>
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
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
