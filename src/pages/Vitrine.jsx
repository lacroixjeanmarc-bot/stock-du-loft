import { useState, useEffect } from 'react';
import { ref, onValue, get } from 'firebase/database';
import { database } from '../firebase';

const ITEMS_PATH = 'stockduloft/items';
const PHOTOS_PATH = 'stockduloft/photos';

export default function Vitrine() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);
  const [fullPhoto, setFullPhoto] = useState(null);
  const [loadingPhoto, setLoadingPhoto] = useState(false);

  useEffect(() => {
    const itemsRef = ref(database, ITEMS_PATH);
    const unsubscribe = onValue(itemsRef, (snapshot) => {
      const data = [];
      if (snapshot.exists()) {
        snapshot.forEach((child) => {
          const item = { id: child.key, ...child.val() };
          // Afficher seulement les items en stock ou en consigne
          if (item.status === 'inventory' || item.status === 'consignment') {
            data.push(item);
          }
        });
      }
      data.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
      setItems(data);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  // Catégories uniques
  const categories = [...new Set(items.map((i) => i.category).filter(Boolean))].sort();

  const filteredItems = categoryFilter === 'all'
    ? items
    : items.filter((i) => i.category === categoryFilter);

  const handleItemClick = async (item) => {
    if (selectedItem === item.id) {
      setSelectedItem(null);
      setFullPhoto(null);
      return;
    }
    setSelectedItem(item.id);
    setFullPhoto(null);

    // Charger la photo complète
    if (item.hasPhoto || item.photoBase64) {
      setLoadingPhoto(true);
      try {
        if (item.photoBase64) {
          setFullPhoto(item.photoBase64);
        } else {
          const photoRef = ref(database, `${PHOTOS_PATH}/${item.id}`);
          const snapshot = await get(photoRef);
          if (snapshot.exists()) {
            setFullPhoto(snapshot.val().photoBase64);
          }
        }
      } catch (err) {
        console.error('Erreur photo:', err);
      } finally {
        setLoadingPhoto(false);
      }
    }
  };

  if (loading) {
    return (
      <div className="vitrine">
        <div className="vitrine-loading">
          <div className="loading-spinner" />
          <p>Chargement du catalogue...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="vitrine">
      {/* Header */}
      <header className="vitrine-header">
        <img src="/pwa-192x192.png" alt="Logo" className="vitrine-logo" />
        <div>
          <h1 className="vitrine-title">✂️ L'Atelier du Loft</h1>
          <p className="vitrine-subtitle-name">Josée Bourgouin</p>
          <p className="vitrine-subtitle">{filteredItems.length} article{filteredItems.length > 1 ? 's' : ''} disponible{filteredItems.length > 1 ? 's' : ''}</p>
        </div>
      </header>

      {/* Filtres catégories */}
      {categories.length > 0 && (
        <div className="vitrine-filters">
          <button
            className={`vitrine-filter-btn ${categoryFilter === 'all' ? 'active' : ''}`}
            onClick={() => setCategoryFilter('all')}
          >
            Tous
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`vitrine-filter-btn ${categoryFilter === cat ? 'active' : ''}`}
              onClick={() => setCategoryFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Grille d'items */}
      {filteredItems.length === 0 ? (
        <div className="vitrine-empty">
          <p>🏷️</p>
          <p>Aucun article disponible pour le moment</p>
        </div>
      ) : (
        <div className="vitrine-grid">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`vitrine-card ${selectedItem === item.id ? 'expanded' : ''}`}
              onClick={() => handleItemClick(item)}
            >
              {/* Miniature ou placeholder */}
              <div className="vitrine-card-photo">
                {item.thumbnail ? (
                  <img src={item.thumbnail} alt={item.description} />
                ) : (
                  <div className="vitrine-card-no-photo">📷</div>
                )}
              </div>

              {/* Infos */}
              <div className="vitrine-card-info">
                <p className="vitrine-card-desc">{item.description || 'Sans description'}</p>
                <p className="vitrine-card-price">{item.price?.toFixed(2)} $</p>
                {item.category && (
                  <span className="vitrine-card-category">{item.category}</span>
                )}
              </div>

              {/* Expanded: photo complète */}
              {selectedItem === item.id && (
                <div className="vitrine-card-expanded" onClick={(e) => e.stopPropagation()}>
                  {loadingPhoto && (
                    <div className="vitrine-photo-loading">
                      <div className="loading-spinner" />
                    </div>
                  )}
                  {fullPhoto && (
                    <img src={fullPhoto} alt={item.description} className="vitrine-full-photo" />
                  )}
                  <div className="vitrine-card-details">
                    <p><strong>#{item.uniqueId}</strong></p>
                    {item.status === 'consignment' && (
                      <p>📍 En consigne: {item.consignmentStore}</p>
                    )}
                    {item.itemDate && <p>🧵 Créé le {item.itemDate}</p>}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Footer */}
      <footer className="vitrine-footer">
        <p>✂️ L'Atelier du Loft — Josée Bourgouin</p>
        <p className="vitrine-footer-cta">Écrivez-moi si quelque chose vous intéresse!</p>
        <a href="mailto:Josée.Bourgouin@gmail.com">📧 Josée.Bourgouin@gmail.com</a>
      </footer>
    </div>
  );
}
