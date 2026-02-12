import { useState } from 'react';
import { getItemByUniqueId, sellItem } from '../services/inventoryService';
import { useAuth } from '../hooks/useAuth';

export default function QuickSale() {
  const { user } = useAuth();

  const [searchId, setSearchId] = useState('ADL-');
  const [foundItem, setFoundItem] = useState(null);
  const [sellerName, setSellerName] = useState(user?.displayName?.split(' ')[0] || '');
  const [saleDate, setSaleDate] = useState(new Date().toISOString().split('T')[0]);
  const [salePrice, setSalePrice] = useState('');
  const [marketName, setMarketName] = useState(() => localStorage.getItem('sdl_marketName') || '');
  const [searching, setSearching] = useState(false);
  const [selling, setSelling] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isGift, setIsGift] = useState(false);
  const [giftNote, setGiftNote] = useState('');

  const handleSearch = async (e) => {
    e?.preventDefault();
    if (!searchId.trim()) return;

    setSearching(true);
    setError('');
    setSuccess('');
    setFoundItem(null);

    try {
      const item = await getItemByUniqueId(searchId);

      if (!item) {
        setError(`Aucun item trouvé avec le numéro "${searchId.toUpperCase()}"`);
        return;
      }

      if (item.status === 'sold') {
        setError(`Cet item est déjà vendu (${item.saleDate} par ${item.sellerName})`);
        return;
      }

      setFoundItem(item);
      setSalePrice(item.price?.toFixed(2) || '');
    } catch (err) {
      console.error(err);
      setError('Erreur de recherche. Réessayez.');
    } finally {
      setSearching(false);
    }
  };

  const handleSell = async () => {
    if (!foundItem || !sellerName.trim()) return;

    setSelling(true);
    setError('');

    try {
      const finalPrice = isGift ? 0 : (parseFloat(salePrice) || foundItem.price);
      await sellItem(foundItem.id, sellerName, saleDate, finalPrice, marketName, isGift, giftNote);
      const msg = isGift
        ? `✓ ${foundItem.uniqueId} donné en cadeau${giftNote ? ` — ${giftNote}` : ''}`
        : `✓ ${foundItem.uniqueId} vendu pour ${finalPrice.toFixed(2)} $${marketName ? ` au ${marketName}` : ''}`;
      setSuccess(msg);
      setFoundItem(null);
      setSearchId('ADL-');
      setSalePrice('');
      setIsGift(false);
      setGiftNote('');
    } catch (err) {
      console.error(err);
      setError('Erreur lors de la vente. Réessayez.');
    } finally {
      setSelling(false);
    }
  };

  const resetSearch = () => {
    setSearchId('ADL-');
    setFoundItem(null);
    setSalePrice('');
    setError('');
    setSuccess('');
    setIsGift(false);
    setGiftNote('');
  };

  return (
    <div className="page sale-page">
      <h2 className="page-title">💰 Vente rapide</h2>

      {/* Recherche par numéro */}
      <form onSubmit={handleSearch} className="sale-search-form">
        <div className="sale-search-row">
          <input
            type="text"
            value={searchId}
            onChange={(e) => setSearchId(e.target.value.toUpperCase())}
            placeholder="Ex: ADL-001"
            className="form-input sale-search-input"
            autoComplete="off"
            autoFocus
          />
          <button
            type="submit"
            className="btn btn-primary sale-search-btn"
            disabled={searching || !searchId.trim()}
          >
            {searching ? '...' : '🔍'}
          </button>
        </div>
      </form>

      {/* Message de succès */}
      {success && (
        <div className="sale-success">
          <p>{success}</p>
          <button className="btn btn-primary btn-full" onClick={resetSearch}>
            Prochaine vente
          </button>
        </div>
      )}

      {/* Erreur */}
      {error && (
        <div className="sale-error">
          <p>{error}</p>
          <button className="btn btn-secondary" onClick={resetSearch}>
            Réessayer
          </button>
        </div>
      )}

      {/* Item trouvé — confirmation de vente */}
      {foundItem && (
        <div className="sale-confirmation">
          {/* Photo et info de l'item */}
          <div className="sale-item-card">
            {foundItem.photoBase64 ? (
              <img src={foundItem.photoBase64} alt={foundItem.description} className="sale-item-photo" />
            ) : (
              <div className="sale-photo-placeholder">📷</div>
            )}
            <div className="sale-item-details">
              <span className="sale-item-id">#{foundItem.uniqueId}</span>
              <p className="sale-item-desc">{foundItem.description}</p>
              <p className="sale-item-price">{foundItem.price?.toFixed(2)} $</p>
              {foundItem.status === 'consignment' && (
                <p className="sale-item-consign">📍 En consigne: {foundItem.consignmentStore}</p>
              )}
            </div>
          </div>

          {/* Informations de vente */}
          <div className="sale-form">
            {/* Option cadeau */}
            <div className="form-group">
              <label className="gift-toggle">
                <input
                  type="checkbox"
                  checked={isGift}
                  onChange={(e) => {
                    setIsGift(e.target.checked);
                    if (e.target.checked) setSalePrice('0');
                    else setSalePrice(foundItem.price?.toFixed(2) || '');
                  }}
                />
                <span>🎁 Donné en cadeau</span>
              </label>
            </div>

            {/* Note cadeau */}
            {isGift && (
              <div className="form-group">
                <label className="form-label">Note</label>
                <input
                  type="text"
                  value={giftNote}
                  onChange={(e) => setGiftNote(e.target.value)}
                  className="form-input"
                  placeholder="Ex: Cadeau pour maman, échange, etc."
                />
              </div>
            )}

            {/* Prix de vente (caché si cadeau) */}
            {!isGift && (
              <div className="form-group">
                <label className="form-label">Prix de vente ($)</label>
                <div className="sale-price-row">
                  <input
                    type="number"
                    value={salePrice}
                    onChange={(e) => setSalePrice(e.target.value)}
                    className="form-input"
                    step="0.01"
                    min="0"
                    inputMode="decimal"
                  />
                  {parseFloat(salePrice) < foundItem.price && (
                    <span className="sale-discount">
                      Rabais de {(foundItem.price - parseFloat(salePrice)).toFixed(2)} $
                    </span>
                  )}
                </div>
              </div>
            )}

            <div className="form-group">
              <label className="form-label">Vendeuse</label>
              <input
                type="text"
                value={sellerName}
                onChange={(e) => setSellerName(e.target.value)}
                className="form-input"
                placeholder="Nom de la vendeuse"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Marché / Point de vente</label>
              <input
                type="text"
                value={marketName}
                onChange={(e) => {
                  setMarketName(e.target.value);
                  localStorage.setItem('sdl_marketName', e.target.value);
                }}
                className="form-input"
                placeholder="Ex: Marché Jean-Talon, Facebook, etc."
              />
            </div>

            <div className="form-group">
              <label className="form-label">Date de vente</label>
              <input
                type="date"
                value={saleDate}
                onChange={(e) => setSaleDate(e.target.value)}
                className="form-input"
              />
            </div>

            <div className="sale-actions">
              <button
                className="btn btn-sell btn-full"
                onClick={handleSell}
                disabled={selling || !sellerName.trim()}
              >
                {selling
                  ? 'En cours...'
                  : isGift
                    ? '🎁 Confirmer le cadeau'
                    : `Confirmer la vente — ${parseFloat(salePrice || 0).toFixed(2)} $`
                }
              </button>
              <button className="btn btn-secondary btn-full" onClick={resetSearch}>
                Annuler
              </button>
            </div>
          </div>
        </div>
      )}

      {/* État initial */}
      {!foundItem && !error && !success && (
        <div className="sale-hint">
          <p className="hint-icon">🏷️</p>
          <p>Entre le numéro de l'étiquette<br />pour enregistrer une vente</p>
        </div>
      )}
    </div>
  );
}
