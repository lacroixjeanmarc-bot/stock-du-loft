import { useState, useEffect } from 'react';
import { ref, onValue, get } from 'firebase/database';
import { database } from '../firebase';

const ITEMS_PATH = 'stockduloft/items';
const PHOTOS_PATH = 'stockduloft/photos';
const SETTINGS_PATH = 'stockduloft/settings';
const MAX_EXTRA_PHOTOS = 4;

function isRecentlySold(item, days) {
  if (item.status !== 'sold' || !item.saleDate) return false;
  const saleDate = new Date(item.saleDate);
  const now = new Date();
  const diff = (now - saleDate) / (1000 * 60 * 60 * 24);
  return diff <= days;
}

/**
 * Extrait toutes les photos d'un objet photo Firebase.
 */
function extractPhotos(photoData) {
  const photos = [];
  if (!photoData) return photos;
  if (photoData.photoBase64) photos.push(photoData.photoBase64);
  for (let i = 1; i <= MAX_EXTRA_PHOTOS; i++) {
    if (photoData[`photo_${i}`]) photos.push(photoData[`photo_${i}`]);
  }
  return photos;
}

export default function Vitrine() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);
  const [photos, setPhotos] = useState({}); // { itemId: [photo0, photo1, ...] }
  const [activePhoto, setActivePhoto] = useState({}); // { itemId: index }
  const [soldDays, setSoldDays] = useState(7);

  // Charger le paramètre de durée d'affichage des ventes
  useEffect(() => {
    const settingsRef = ref(database, SETTINGS_PATH);
    const unsub = onValue(settingsRef, (snap) => {
      if (snap.exists()) {
        const val = snap.val();
        if (val.vitrineSoldDays !== undefined) {
          setSoldDays(val.vitrineSoldDays);
        }
      }
    });
    return unsub;
  }, []);

  useEffect(() => {
    const itemsRef = ref(database, ITEMS_PATH);

    const unsubscribe = onValue(itemsRef, (snapshot) => {
      const data = [];
      if (snapshot.exists()) {
        snapshot.forEach((child) => {
          const item = { id: child.key, ...child.val() };
          if (
            item.status === 'inventory' ||
            item.status === 'consignment' ||
            isRecentlySold(item, soldDays)
          ) {
            data.push(item);
          }
        });
      }

      data.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
      setItems(data);
      setLoading(false);

      // Charger les photos de tous les items visibles
      data.forEach(async (item) => {
        if (item.hasPhoto && !item.photoBase64) {
          try {
            const photoRef = ref(database, `${PHOTOS_PATH}/${item.id}`);
            const snap = await get(photoRef);
            if (snap.exists()) {
              const allPhotos = extractPhotos(snap.val());
              setPhotos((prev) => ({ ...prev, [item.id]: allPhotos }));
            }
          } catch (err) {
            console.error('Erreur photo:', err);
          }
        }
      });
    });

    return unsubscribe;
  }, [soldDays]);

  // Catégories uniques
  const categories = [...new Set(items.map((i) => i.category).filter(Boolean))].sort();

  const filteredItems =
    categoryFilter === 'all'
      ? items
      : items.filter((i) => i.category === categoryFilter);

  const handleItemClick = (itemId) => {
    if (selectedItem === itemId) {
      setSelectedItem(null);
    } else {
      setSelectedItem(itemId);
      setActivePhoto((prev) => ({ ...prev, [itemId]: 0 }));
    }
  };

  // Obtenir les photos d'un item (gère ancien et nouveau format)
  const getItemPhotos = (item) => {
    if (photos[item.id] && photos[item.id].length > 0) return photos[item.id];
    if (item.photoBase64) return [item.photoBase64];
    return [];
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
          <p className="vitrine-subtitle">
            {filteredItems.length} article{filteredItems.length > 1 ? 's' : ''} disponible
            {filteredItems.length > 1 ? 's' : ''}
          </p>
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
          {filteredItems.map((item) => {
            const isExpanded = selectedItem === item.id;
            const itemPhotos = getItemPhotos(item);
            const currentPhotoIdx = activePhoto[item.id] || 0;

            return (
              <div
                key={item.id}
                className={`vitrine-card ${isExpanded ? 'expanded' : ''}`}
                onClick={() => handleItemClick(item.id)}
              >
                {/* === VUE COMPACTE (carte dans la grille) === */}
                {!isExpanded && (
                  <>
                    <div className="vitrine-card-photo">
                      {itemPhotos.length > 0 ? (
                        <img src={itemPhotos[0]} alt={item.description} />
                      ) : item.thumbnail ? (
                        <img src={item.thumbnail} alt={item.description} className="vitrine-thumb-blur" />
                      ) : (
                        <div className="vitrine-card-no-photo">📷</div>
                      )}
                      {item.status === 'sold' && (
                        <div className="vitrine-sold-overlay">
                          <span>VENDU</span>
                        </div>
                      )}
                      {itemPhotos.length > 1 && (
                        <span className="vitrine-photo-count">
                          📷 {itemPhotos.length}
                        </span>
                      )}
                    </div>
                    <div className="vitrine-card-info">
                      <p className="vitrine-card-desc">
                        {item.description || 'Sans description'}
                      </p>
                      <p className="vitrine-card-price">{item.price?.toFixed(2)} $</p>
                      {item.category && (
                        <span className="vitrine-card-category">{item.category}</span>
                      )}
                    </div>
                  </>
                )}

                {/* === VUE DÉTAILLÉE (expanded) — style Amazon === */}
                {isExpanded && (
                  <div className="vitrine-detail" onClick={(e) => e.stopPropagation()}>
                    {/* Bouton fermer */}
                    <button
                      className="vitrine-detail-close"
                      onClick={() => setSelectedItem(null)}
                    >
                      ✕ Fermer
                    </button>

                    {/* Galerie photos */}
                    {itemPhotos.length > 0 && (
                      <div className="vitrine-gallery">
                        {/* Photo principale en grand */}
                        <div className="vitrine-gallery-main">
                          <img
                            src={itemPhotos[currentPhotoIdx]}
                            alt={item.description}
                          />
                          {item.status === 'sold' && (
                            <div className="vitrine-sold-overlay">
                              <span>VENDU</span>
                            </div>
                          )}
                        </div>

                        {/* Thumbnails sélectionnables */}
                        {itemPhotos.length > 1 && (
                          <div className="vitrine-gallery-thumbs">
                            {itemPhotos.map((photo, idx) => (
                              <div
                                key={idx}
                                className={`vitrine-gallery-thumb ${currentPhotoIdx === idx ? 'active' : ''}`}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setActivePhoto((prev) => ({ ...prev, [item.id]: idx }));
                                }}
                              >
                                <img src={photo} alt={`Photo ${idx + 1}`} />
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Infos produit — style Amazon */}
                    <div className="vitrine-detail-info">
                      <h3 className="vitrine-detail-title">
                        {item.description || 'Sans titre'}
                      </h3>
                      <p className="vitrine-detail-price">
                        {item.price?.toFixed(2)} $
                      </p>
                      <p className="vitrine-detail-id">#{item.uniqueId}</p>

                      {item.category && (
                        <span className="vitrine-card-category">{item.category}</span>
                      )}

                      {/* Description longue */}
                      {item.longDescription && (
                        <div className="vitrine-detail-description">
                          <p>{item.longDescription}</p>
                        </div>
                      )}

                      {item.status === 'consignment' && (
                        <p className="vitrine-detail-consignment">
                          📍 Disponible chez: {item.consignmentStore}
                        </p>
                      )}
                      {item.itemDate && (
                        <p className="vitrine-detail-date">🧵 Créé le {item.itemDate}</p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Footer */}
      <footer className="vitrine-footer">
        <p>✂️ L'Atelier du Loft — Josée Bourgouin</p>
        <p className="vitrine-footer-cta">
          Écrivez-moi si quelque chose vous intéresse!
        </p>
        <a href="mailto:Josée.Bourgouin@gmail.com">📧 Josée.Bourgouin@gmail.com</a>
      </footer>
    </div>
  );
}
