import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { addItem, getItemByUniqueId, getNextUniqueId } from '../services/inventoryService';
import AiSuggestButton from '../components/AiSuggestButton';

export default function AddItem() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [formData, setFormData] = useState({
    uniqueId: '',
    description: '',
    longDescription: '',
    price: '',
    category: '',
    itemDate: new Date().toISOString().split('T')[0]
  });
  const [photoFile, setPhotoFile] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [suggestedId, setSuggestedId] = useState('');

  // Charger le prochain numéro disponible au chargement
  useEffect(() => {
    getNextUniqueId('ADL').then((nextId) => {
      setFormData((prev) => ({ ...prev, uniqueId: nextId }));
      setSuggestedId(nextId);
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === 'uniqueId') setError('');
  };

  const handlePhotoSelect = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setPhotoFile(file);
    const reader = new FileReader();
    reader.onload = (ev) => setPhotoPreview(ev.target.result);
    reader.readAsDataURL(file);
  };

  const openCamera = () => {
    fileInputRef.current?.click();
  };

  const removePhoto = () => {
    setPhotoFile(null);
    setPhotoPreview(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleUseSuggested = () => {
    setFormData((prev) => ({ ...prev, uniqueId: suggestedId }));
    setError('');
  };

  // AI : remplir titre, description détaillée et catégorie à partir de la photo
  const handleAiSuggestion = (suggestion) => {
    setFormData((prev) => ({
      ...prev,
      ...(suggestion.category ? { category: suggestion.category } : {}),
      ...(suggestion.title ? { description: suggestion.title } : {}),
      ...(suggestion.description ? { longDescription: suggestion.description } : {}),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validation
    if (!formData.uniqueId.trim()) {
      setError('Le numéro unique est requis');
      return;
    }
    if (!formData.price || parseFloat(formData.price) <= 0) {
      setError('Le prix doit être supérieur à 0');
      return;
    }

    // Vérifier si le numéro existe déjà
    const existing = await getItemByUniqueId(formData.uniqueId);
    if (existing) {
      const nextId = await getNextUniqueId('ADL');
      setSuggestedId(nextId);
      setError(`Le numéro "${formData.uniqueId.toUpperCase()}" existe déjà !`);
      return;
    }

    setSaving(true);
    try {
      await addItem({
        uniqueId: formData.uniqueId,
        description: formData.description,
        longDescription: formData.longDescription,
        price: formData.price,
        category: formData.category,
        itemDate: formData.itemDate,
        photoFile
      });

      // Succès — retour à l'inventaire
      navigate('/');
    } catch (err) {
      console.error('Erreur:', err);
      setError('Erreur lors de la sauvegarde. Réessayez.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="page add-item-page">
      <h2 className="page-title">Nouvel item</h2>

      <form onSubmit={handleSubmit} className="add-form">
        {/* Photo principale */}
        <div className="photo-section">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            capture="environment"
            onChange={handlePhotoSelect}
            className="hidden-input"
          />
          {photoPreview ? (
            <div className="photo-preview-container">
              <img src={photoPreview} alt="Aperçu" className="photo-preview" />
              <button type="button" className="photo-remove" onClick={removePhoto}>✕</button>
            </div>
          ) : (
            <button type="button" className="photo-capture-btn" onClick={openCamera}>
              <span className="capture-icon">📷</span>
              <span>Prendre une photo</span>
            </button>
          )}
          <p className="photo-hint">📸 Photo principale — vous pourrez ajouter d'autres photos en modifiant l'article</p>
        </div>

        {/* Bouton AI — apparaît après la prise de photo */}
        {photoPreview && (
          <AiSuggestButton
            imageBase64={photoPreview}
            onSuggestion={handleAiSuggestion}
          />
        )}

        {/* Numéro unique */}
        <div className="form-group">
          <label className="form-label">Numéro unique *</label>
          <input
            type="text"
            name="uniqueId"
            value={formData.uniqueId}
            onChange={handleChange}
            placeholder="Ex: ADL-001"
            className="form-input"
            autoComplete="off"
            style={{ textTransform: 'uppercase' }}
          />
        </div>

        {/* Description courte */}
        <div className="form-group">
          <label className="form-label">Titre / Description courte</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Ex: Sac à main fleuri"
            className="form-input"
          />
        </div>

        {/* Description longue */}
        <div className="form-group">
          <label className="form-label">Description détaillée</label>
          <textarea
            name="longDescription"
            value={formData.longDescription}
            onChange={handleChange}
            placeholder="Décrivez l'article en détail : matériaux, dimensions, couleurs, entretien..."
            className="form-input form-textarea"
            rows="4"
          />
          <p className="form-hint">Affiché dans la vitrine publique</p>
        </div>

        {/* Prix */}
        <div className="form-group">
          <label className="form-label">Prix ($) *</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="0.00"
            className="form-input"
            step="0.01"
            min="0"
            inputMode="decimal"
          />
        </div>

        {/* Catégorie */}
        <div className="form-group">
          <label className="form-label">Catégorie</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Ex: Sacs, Vêtements, Accessoires..."
            className="form-input"
          />
        </div>

        {/* Date de création */}
        <div className="form-group">
          <label className="form-label">Date de création</label>
          <input
            type="date"
            name="itemDate"
            value={formData.itemDate}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        {/* Erreur */}
        {error && (
          <div className="error-block">
            <p className="error-text">{error}</p>
            {suggestedId && error.includes('existe déjà') && (
              <button
                type="button"
                className="btn btn-small btn-suggest"
                onClick={handleUseSuggested}
              >
                Utiliser {suggestedId}
              </button>
            )}
          </div>
        )}

        {/* Boutons */}
        <div className="form-actions">
          <button
            type="submit"
            className="btn btn-primary btn-full"
            disabled={saving}
          >
            {saving ? 'Sauvegarde en cours...' : '✓ Ajouter à l\'inventaire'}
          </button>
          <button
            type="button"
            className="btn btn-secondary btn-full"
            onClick={() => navigate('/')}
          >
            Annuler
          </button>
        </div>
      </form>
    </div>
  );
}
