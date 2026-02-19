import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ref, onValue, get } from 'firebase/database';
import { database } from '../firebase';
import { getUidBySlug, applyTheme } from '../services/tenantService';

const MAX_EXTRA_PHOTOS = 4;

function formatPrice(price) {
  return price?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

function isRecentlySold(item, days) {
  if (item.status !== 'sold' || !item.saleDate) return false;
  const saleDate = new Date(item.saleDate);
  const now = new Date();
  const diff = (now - saleDate) / (1000 * 60 * 60 * 24);
  return diff <= days;
}

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
  const { slug } = useParams();
  const [tenantUid, setTenantUid] = useState(null);
  const [tenantProfile, setTenantProfile] = useState(null);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);
  const [photos, setPhotos] = useState({});
  const [activePhoto, setActivePhoto] = useState({});
  const [soldDays, setSoldDays] = useState(7);

  // ★ Étape 1: Résoudre le slug → UID
  useEffect(() => {
    if (!slug) {
      setNotFound(true);
      setLoading(false);
      return;
    }

    async function resolveSlug() {
      try {
        const uid = await getUidBySlug(slug);
        if (uid) {
          setTenantUid(uid);
        } else {
          setNotFound(true);
          setLoading(false);
        }
      } catch (err) {
        console.error('Erreur résolution slug:', err);
        setNotFound(true);
        setLoading(false);
      }
    }

    resolveSlug();
  }, [slug]);

  // ★ Étape 2: Charger le profil et les settings du tenant
  useEffect(() => {
    if (!tenantUid) return;

    // Profil
    const profileRef = ref(database, `tenants/${tenantUid}/profile`);
    const unsubProfile = onValue(profileRef, (snap) => {
      if (snap.exists()) {
        setTenantProfile(snap.val());
      }
    });

    // Settings + thème
    const settingsRef = ref(database, `tenants/${tenantUid}/settings`);
    const unsubSettings = onValue(settingsRef, (snap) => {
      if (snap.exists()) {
        const val = snap.val();
        if (val.vitrineSoldDays !== undefined) {
          setSoldDays(val.vitrineSoldDays);
        }
      }
    });

    // Thème depuis le profil
    const themeRef = ref(database, `tenants/${tenantUid}/profile/theme`);
    const unsubTheme = onValue(themeRef, (snap) => {
      if (snap.exists()) {
        applyTheme(snap.val());
      }
    });

    return () => {
      unsubProfile();
      unsubSettings();
      unsubTheme();
    };
  }, [tenantUid]);

  // ★ Étape 3: Charger les items du tenant
  useEffect(() => {
    if (!tenantUid) return;

    const itemsRef = ref(database, `tenants/${tenantUid}/items`);
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

      // Charger les photos séparément
      data.forEach(async (item) => {
        if (item.hasPhoto && !item.photoBase64) {
          try {
            const photoRef = ref(database, `tenants/${tenantUid}/photos/${item.id}`);
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
  }, [tenantUid, soldDays]);

  const categories = [...new Set(items.map((i) => i.category).filter(Boolean))].sort();
  const filteredItems =
    categoryFilter === 'all' ? items : items.filter((i) => i.category === categoryFilter);

  const handleItemClick = (itemId) => {
    if (selectedItem === itemId) {
      setSelectedItem(null);
    } else {
      setSelectedItem(itemId);
      setActivePhoto((prev) => ({ ...prev, [itemId]: 0 }));
    }
  };

  const getItemPhotos = (item) => {
    if (photos[item.id] && photos[item.id].length > 0) return photos[item.id];
    if (item.photoBase64) return [item.photoBase64];
    return [];
  };

  // ★ Page non trouvée
  if (notFound) {
    return (
      <div className="vitrine">
        <div className="vitrine-empty">
          <p>🔍</p>
          <p>Vitrine introuvable</p>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '8px' }}>
            L'adresse <strong>/vitrine/{slug}</strong> n'existe pas.
          </p>
          <a href="/" style={{ marginTop: '16px', display: 'inline-block', color: 'var(--accent)' }}>
            ← Retour à l'accueil
          </a>
        </div>
      </div>
    );
  }

  // ★ Chargement
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

  const businessName = tenantProfile?.businessName || 'Boutique';
  const ownerName = tenantProfile?.ownerName || '';
  const contactEmail = tenantProfile?.email || '';

  return (
    <div className="vitrine">
      <header className="vitrine-header">
        <img src="/pwa-192x192.png" alt="Logo" className="vitrine-logo" />
        <div>
          <h1 className="vitrine-title">{businessName}</h1>
          {ownerName && <p className="vitrine-subtitle-name">{ownerName}</p>}
          <p className="vitrine-subtitle">
            {filteredItems.length} article{filteredItems.length > 1 ? 's' : ''} disponible
            {filteredItems.length > 1 ? 's' : ''}
          </p>
        </div>
      </header>

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
                {!isExpanded && (
                  <>
                    <div className="vitrine-card-photo">
                      {itemPhotos.length > 0 ? (
                        <img src={itemPhotos[0]} alt={item.description} />
                      ) : item.thumbnail ? (
                        <img
                          src={item.thumbnail}
                          alt={item.description}
                          className="vitrine-thumb-blur"
                        />
                      ) : (
                        <div className="vitrine-card-no-photo">📷</div>
                      )}
                      {item.status === 'sold' && (
                        <div className="vitrine-sold-overlay">
                          <span>VENDU</span>
                        </div>
                      )}
                      {itemPhotos.length > 1 && (
                        <span className="vitrine-photo-count">📷 {itemPhotos.length}</span>
                      )}
                    </div>
                    <div className="vitrine-card-info">
                      <p className="vitrine-card-desc">
                        {item.description || 'Sans description'}
                      </p>
                      <p className="vitrine-card-price">{formatPrice(item.price)} $</p>
                      {item.category && (
                        <span className="vitrine-card-category">{item.category}</span>
                      )}
                    </div>
                  </>
                )}

                {isExpanded && (
                  <div className="vitrine-detail" onClick={(e) => e.stopPropagation()}>
                    <button
                      className="vitrine-detail-close"
                      onClick={() => setSelectedItem(null)}
                    >
                      ✕ Fermer
                    </button>
                    {itemPhotos.length > 0 && (
                      <div className="vitrine-gallery">
                        <div className="vitrine-gallery-main">
                          <img src={itemPhotos[currentPhotoIdx]} alt={item.description} />
                          {item.status === 'sold' && (
                            <div className="vitrine-sold-overlay">
                              <span>VENDU</span>
                            </div>
                          )}
                        </div>
                        {itemPhotos.length > 1 && (
                          <div className="vitrine-gallery-thumbs">
                            {itemPhotos.map((photo, idx) => (
                              <div
                                key={idx}
                                className={`vitrine-gallery-thumb ${
                                  currentPhotoIdx === idx ? 'active' : ''
                                }`}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setActivePhoto((prev) => ({
                                    ...prev,
                                    [item.id]: idx,
                                  }));
                                }}
                              >
                                <img src={photo} alt={`Photo ${idx + 1}`} />
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                    <div className="vitrine-detail-info">
                      <h3 className="vitrine-detail-title">
                        {item.description || 'Sans titre'}
                      </h3>
                      <p className="vitrine-detail-price">{formatPrice(item.price)} $</p>
                      <p className="vitrine-detail-id">#{item.uniqueId}</p>
                      {item.category && (
                        <span className="vitrine-card-category">{item.category}</span>
                      )}
                      {item.longDescription && (
                        <div className="vitrine-detail-description">
                          <p>{item.longDescription}</p>
                        </div>
                      )}
                      {item.status === 'consignment' && item.consignmentStore && (
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

      <footer className="vitrine-footer">
        <p>{businessName}{ownerName ? ` — ${ownerName}` : ''}</p>
        <p className="vitrine-footer-cta">
          Écrivez-moi si quelque chose vous intéresse!
        </p>
        {contactEmail && (
          <a href={`mailto:${contactEmail}`}>📧 {contactEmail}</a>
        )}
        <p className="vitrine-footer-powered">
          <a href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.8rem' }}>
            Propulsé par Vitrine Artisan
          </a>
        </p>
      </footer>
    </div>
  );
}
