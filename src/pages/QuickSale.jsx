import { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { database } from '../firebase';
import { getItemByUniqueId, sellItem, getStore } from '../services/inventoryService';
import { useAuth } from '../hooks/useAuth';

function formatPrice(price) {
  return price?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

export default function QuickSale() {
  const { user } = useAuth();
  const [searchId, setSearchId] = useState('ADL-');
  const [foundItem, setFoundItem] = useState(null);
  const [storeInfo, setStoreInfo] = useState(null);
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

  // Tax settings
  const [taxSettings, setTaxSettings] = useState(null);

  useEffect(() => {
    const settingsRef = ref(database, 'stockduloft/settings/taxes');
    const unsub = onValue(settingsRef, (snap) => {
      if (snap.exists()) {
        setTaxSettings(snap.val());
      } else {
        setTaxSettings({ enabled: false });
      }
    });
    return unsub;
  }, []);

  const taxEnabled = taxSettings?.enabled || false;
  const tpsRate = taxSettings?.tpsRate || 5;
  const tvqRate = taxSettings?.tvqRate || 9.975;

  // Calcul taxes en temps réel
  const getTaxPreview = () => {
    if (!taxEnabled || isGift) return null;
    const price = parseFloat(salePrice) || 0;
    if (price <= 0) return null;
    const tpsAmount = Math.round(price * tpsRate) / 100;
    const tvqAmount = Math.round(price * tvqRate * 100) / 10000;
    const totalWithTax = Math.round((price + tpsAmount + tvqAmount) * 100) / 100;
    return { tpsAmount, tvqAmount, totalWithTax };
  };

  const taxPreview = getTaxPreview();

  const handleSearch = async (e) => {
    e?.preventDefault();
    if (!searchId.trim()) return;

    setSearching(true);
    setError('');
    setSuccess('');
    setFoundItem(null);
    setStoreInfo(null);

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

      // Charger les infos du magasin si en consigne
      if (item.status === 'consignment' && item.consignmentStoreId) {
        const store = await getStore(item.consignmentStoreId);
        setStoreInfo(store);
      }
    } catch (err) {
      console.error(err);
      setError('Erreur de recherche. Réessayez.');
    } finally {
      setSearching(false);
    }
  };

  // Calcul de la commission en temps réel
  const getCommissionPreview = () => {
    if (!storeInfo || !storeInfo.commissionPercent || isGift) return null;
    const price = parseFloat(salePrice) || 0;
    const commissionAmount = Math.round(price * storeInfo.commissionPercent) / 100;
    const netRevenue = Math.round((price - commissionAmount) * 100) / 100;
    return { commissionAmount, netRevenue, percent: storeInfo.commissionPercent };
  };

  const commissionPreview = getCommissionPreview();

  const handleSell = async () => {
    if (!foundItem || !sellerName.trim()) return;

    setSelling(true);
    setError('');

    try {
      const finalPrice = isGift ? 0 : (parseFloat(salePrice) || foundItem.price);

      // Calculer taxes pour enregistrer avec la vente
      let taxData = null;
      if (taxEnabled && !isGift && finalPrice > 0) {
        const tps = Math.round(finalPrice * tpsRate) / 100;
        const tvq = Math.round(finalPrice * tvqRate * 100) / 10000;
        taxData = {
          tpsRate,
          tvqRate,
          tpsAmount: tps,
          tvqAmount: tvq,
          totalWithTax: Math.round((finalPrice + tps + tvq) * 100) / 100
        };
      }

      const result = await sellItem(foundItem.id, sellerName, saleDate, finalPrice, marketName, isGift, giftNote, taxData);

      let msg;
      if (isGift) {
        msg = `✓ ${foundItem.uniqueId} donné en cadeau${giftNote ? ` — ${giftNote}` : ''}`;
      } else if (result.commissionAmount > 0) {
        msg = `✓ ${foundItem.uniqueId} vendu pour ${formatPrice(finalPrice)} $`;
        if (taxData) {
          msg += `\n🧾 TPS: ${formatPrice(taxData.tpsAmount)} $ + TVQ: ${formatPrice(taxData.tvqAmount)} $ = Total: ${formatPrice(taxData.totalWithTax)} $`;
        }
        msg += `\n💸 Commission ${foundItem.consignmentStore}: -${formatPrice(result.commissionAmount)} $`;
        msg += `\n✅ Revenu net: ${formatPrice(result.netRevenue)} $`;
      } else {
        msg = `✓ ${foundItem.uniqueId} vendu pour ${formatPrice(finalPrice)} $`;
        if (taxData) {
          msg += `\n🧾 TPS: ${formatPrice(taxData.tpsAmount)} $ + TVQ: ${formatPrice(taxData.tvqAmount)} $\n💰 Total avec taxes: ${formatPrice(taxData.totalWithTax)} $`;
        }
        if (marketName) {
          msg += `${taxData ? '' : '\n'}${taxData ? ' — ' : ' au '}${marketName}`;
        }
      }

      setSuccess(msg);
      setFoundItem(null);
      setStoreInfo(null);
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
    setStoreInfo(null);
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
          <p style={{ whiteSpace: 'pre-line' }}>{success}</p>
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
              <img
                src={foundItem.photoBase64}
                alt={foundItem.description}
                className="sale-item-photo"
              />
            ) : (
              <div className="sale-photo-placeholder">📷</div>
            )}
            <div className="sale-item-details">
              <span className="sale-item-id">#{foundItem.uniqueId}</span>
              <p className="sale-item-desc">{foundItem.description}</p>
              <p className="sale-item-price">{formatPrice(foundItem.price)} $</p>
              {foundItem.status === 'consignment' && (
                <p className="sale-item-consign">
                  📍 En consigne: {foundItem.consignmentStore}
                  {storeInfo && storeInfo.commissionPercent > 0 && (
                    <span className="sale-commission-badge">
                      {storeInfo.commissionPercent}% commission
                    </span>
                  )}
                </p>
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

            {/* Prix de vente */}
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
                      Rabais de {formatPrice(foundItem.price - parseFloat(salePrice))} $
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Aperçu taxes */}
            {taxPreview && (
              <div className="sale-tax-preview">
                <div className="tax-calc-row">
                  <span>Prix</span>
                  <span>{formatPrice(parseFloat(salePrice))} $</span>
                </div>
                <div className="tax-calc-row">
                  <span>TPS ({tpsRate}%)</span>
                  <span>{formatPrice(taxPreview.tpsAmount)} $</span>
                </div>
                <div className="tax-calc-row">
                  <span>TVQ ({tvqRate}%)</span>
                  <span>{formatPrice(taxPreview.tvqAmount)} $</span>
                </div>
                <div className="tax-calc-row tax-calc-total">
                  <span>🧾 Total à encaisser</span>
                  <span>{formatPrice(taxPreview.totalWithTax)} $</span>
                </div>
              </div>
            )}

            {/* Aperçu commission si article en consigne */}
            {commissionPreview && (
              <div className="sale-commission-preview">
                <div className="commission-row">
                  <span>Prix de vente</span>
                  <span>{formatPrice(parseFloat(salePrice))} $</span>
                </div>
                <div className="commission-row commission-negative">
                  <span>Commission {foundItem.consignmentStore} ({commissionPreview.percent}%)</span>
                  <span>-{formatPrice(commissionPreview.commissionAmount)} $</span>
                </div>
                <div className="commission-row commission-total">
                  <span>Revenu net pour vous</span>
                  <span>{formatPrice(commissionPreview.netRevenue)} $</span>
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
                    : taxPreview
                      ? `Confirmer — Total: ${formatPrice(taxPreview.totalWithTax)} $`
                      : commissionPreview
                        ? `Confirmer — Net: ${formatPrice(commissionPreview.netRevenue)} $`
                        : `Confirmer la vente — ${formatPrice(parseFloat(salePrice || 0))} $`
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
