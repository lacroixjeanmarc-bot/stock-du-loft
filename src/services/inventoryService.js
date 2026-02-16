import { ref, push, update, remove, get, query, orderByChild, onValue } from 'firebase/database';
import { database } from '../firebase';
import { compressImage, compressThumbnail } from './imageService';

const ITEMS_PATH = 'stockduloft/items';
const PHOTOS_PATH = 'stockduloft/photos';

const MAX_EXTRA_PHOTOS = 4; // 1 principale + 4 extras = 5 max

// ==========================================
// PHOTOS (stockées séparément pour performance)
// ==========================================

/**
 * Récupère la photo principale d'un item par son ID.
 * Rétrocompatible avec l'ancien format.
 */
export async function getItemPhoto(itemId) {
  const photoRef = ref(database, `${PHOTOS_PATH}/${itemId}`);
  const snapshot = await get(photoRef);
  if (!snapshot.exists()) return null;
  return snapshot.val().photoBase64 || null;
}

/**
 * Récupère toutes les photos d'un item (principale + extras).
 * Retourne un tableau de base64 strings.
 */
export async function getAllItemPhotos(itemId) {
  const photoRef = ref(database, `${PHOTOS_PATH}/${itemId}`);
  const snapshot = await get(photoRef);
  if (!snapshot.exists()) return [];

  const data = snapshot.val();
  const photos = [];

  // Photo principale
  if (data.photoBase64) {
    photos.push(data.photoBase64);
  }

  // Photos extras (photo_1, photo_2, photo_3, photo_4)
  for (let i = 1; i <= MAX_EXTRA_PHOTOS; i++) {
    if (data[`photo_${i}`]) {
      photos.push(data[`photo_${i}`]);
    }
  }

  return photos;
}

/**
 * Ajoute une photo supplémentaire à un item existant.
 * Retourne l'index de la photo ajoutée (1-4) ou null si max atteint.
 */
export async function addExtraPhoto(itemId, photoFile) {
  const photoRef = ref(database, `${PHOTOS_PATH}/${itemId}`);
  const snapshot = await get(photoRef);

  // Trouver le prochain slot disponible
  const data = snapshot.exists() ? snapshot.val() : {};
  let nextSlot = null;
  for (let i = 1; i <= MAX_EXTRA_PHOTOS; i++) {
    if (!data[`photo_${i}`]) {
      nextSlot = i;
      break;
    }
  }

  if (nextSlot === null) return null; // Max atteint

  const compressed = await compressImage(photoFile);
  await update(photoRef, { [`photo_${nextSlot}`]: compressed });

  // Mettre à jour le photoCount dans l'item
  const currentCount = countPhotos(data) + 1;
  const itemRef = ref(database, `${ITEMS_PATH}/${itemId}`);
  await update(itemRef, { photoCount: currentCount, updatedAt: Date.now() });

  return nextSlot;
}

/**
 * Supprime une photo extra d'un item.
 * index: 1-4 (pas la photo principale)
 */
export async function deleteExtraPhoto(itemId, index) {
  if (index < 1 || index > MAX_EXTRA_PHOTOS) return;

  const photoRef = ref(database, `${PHOTOS_PATH}/${itemId}`);
  await update(photoRef, { [`photo_${index}`]: null });

  // Recalculer le photoCount
  const snapshot = await get(photoRef);
  const data = snapshot.exists() ? snapshot.val() : {};
  const count = countPhotos(data);
  const itemRef = ref(database, `${ITEMS_PATH}/${itemId}`);
  await update(itemRef, { photoCount: count, updatedAt: Date.now() });
}

/**
 * Compte le nombre de photos dans un objet photo.
 */
function countPhotos(photoData) {
  let count = 0;
  if (photoData.photoBase64) count++;
  for (let i = 1; i <= MAX_EXTRA_PHOTOS; i++) {
    if (photoData[`photo_${i}`]) count++;
  }
  return count;
}

// ==========================================
// CRUD ITEMS
// ==========================================

/**
 * Ajoute un nouvel item à l'inventaire.
 * La photo est compressée et stockée séparément.
 */
export async function addItem({ uniqueId, description, longDescription, price, photoFile, category, itemDate }) {
  const itemData = {
    uniqueId: uniqueId.toUpperCase().trim(),
    description: description.trim(),
    longDescription: longDescription?.trim() || '',
    price: parseFloat(price),
    hasPhoto: false,
    photoCount: 0,
    category: category || '',
    status: 'inventory',
    itemDate: itemDate || new Date().toISOString().split('T')[0],
    consignmentStore: '',
    consignmentDate: null,
    saleDate: null,
    sellerName: '',
    createdAt: Date.now(),
    updatedAt: Date.now()
  };

  const itemsRef = ref(database, ITEMS_PATH);
  const newRef = push(itemsRef);
  await update(newRef, itemData);

  // Stocker la photo séparément + miniature dans l'item
  if (photoFile) {
    const [photoBase64, thumbnail] = await Promise.all([
      compressImage(photoFile),
      compressThumbnail(photoFile)
    ]);
    const photoRef = ref(database, `${PHOTOS_PATH}/${newRef.key}`);
    await update(photoRef, { photoBase64 });

    // Miniature dans l'item + flag hasPhoto
    await update(newRef, { hasPhoto: true, thumbnail, photoCount: 1 });
    itemData.hasPhoto = true;
    itemData.thumbnail = thumbnail;
    itemData.photoCount = 1;
  }

  return { id: newRef.key, ...itemData };
}

/**
 * Met à jour un item existant.
 */
export async function updateItem(itemId, updates) {
  const itemRef = ref(database, `${ITEMS_PATH}/${itemId}`);
  await update(itemRef, { ...updates, updatedAt: Date.now() });
}

/**
 * Supprime un item et sa photo.
 */
export async function deleteItem(itemId) {
  const itemRef = ref(database, `${ITEMS_PATH}/${itemId}`);
  const photoRef = ref(database, `${PHOTOS_PATH}/${itemId}`);
  await remove(photoRef);
  await remove(itemRef);
}

/**
 * Récupère un item par son numéro unique (avec photo pour vente rapide).
 */
export async function getItemByUniqueId(uniqueId) {
  const itemsRef = ref(database, ITEMS_PATH);
  const snapshot = await get(itemsRef);
  if (!snapshot.exists()) return null;

  const searchId = uniqueId.toUpperCase().trim();
  let found = null;

  snapshot.forEach((child) => {
    const data = child.val();
    if (data.uniqueId === searchId) {
      found = { id: child.key, ...data };
    }
  });

  // Charger la photo pour l'écran de vente
  if (found && found.hasPhoto) {
    found.photoBase64 = await getItemPhoto(found.id);
  }

  return found;
}

/**
 * Suggère le prochain numéro unique disponible.
 * Format: ADL-001, ADL-002, etc.
 */
export async function getNextUniqueId(prefix = 'ADL') {
  const itemsRef = ref(database, ITEMS_PATH);
  const snapshot = await get(itemsRef);
  let maxNum = 0;

  if (snapshot.exists()) {
    snapshot.forEach((child) => {
      const data = child.val();
      const id = data.uniqueId || '';
      const match = id.match(new RegExp(`^${prefix}-(\\d+)$`, 'i'));
      if (match) {
        const num = parseInt(match[1], 10);
        if (num > maxNum) maxNum = num;
      }
    });
  }

  const next = maxNum + 1;
  return `${prefix}-${String(next).padStart(3, '0')}`;
}

// ==========================================
// VENTE
// ==========================================

/**
 * Marque un item comme vendu.
 */
export async function sellItem(itemId, sellerName, saleDate = null, salePrice = null, marketName = '', isGift = false, giftNote = '') {
  const itemRef = ref(database, `${ITEMS_PATH}/${itemId}`);
  const updates = {
    status: 'sold',
    sellerName: sellerName.trim(),
    saleDate: saleDate || new Date().toISOString().split('T')[0],
    marketName: marketName.trim(),
    isGift: isGift,
    giftNote: isGift ? giftNote.trim() : '',
    updatedAt: Date.now()
  };

  if (isGift) {
    updates.salePrice = 0;
  } else if (salePrice !== null) {
    updates.salePrice = parseFloat(salePrice);
  }

  await update(itemRef, updates);
}

/**
 * Met un item en consigne chez un marchand.
 */
export async function consignItem(itemId, storeName, consignmentDate = null) {
  const itemRef = ref(database, `${ITEMS_PATH}/${itemId}`);
  await update(itemRef, {
    status: 'consignment',
    consignmentStore: storeName.trim(),
    consignmentDate: consignmentDate || new Date().toISOString().split('T')[0],
    updatedAt: Date.now()
  });
}

/**
 * Remet un item en inventaire (annuler vente ou retour de consigne).
 */
export async function returnToInventory(itemId) {
  const itemRef = ref(database, `${ITEMS_PATH}/${itemId}`);
  await update(itemRef, {
    status: 'inventory',
    consignmentStore: '',
    consignmentDate: null,
    saleDate: null,
    salePrice: null,
    marketName: '',
    sellerName: '',
    isGift: false,
    giftNote: '',
    updatedAt: Date.now()
  });
}

// ==========================================
// ÉCOUTE EN TEMPS RÉEL
// ==========================================

/**
 * Écoute les changements de l'inventaire en temps réel.
 * Les photos ne sont PAS chargées ici (performance).
 * Retourne une fonction unsubscribe.
 */
export function subscribeToItems(callback) {
  const itemsRef = ref(database, ITEMS_PATH);
  const unsubscribe = onValue(itemsRef, (snapshot) => {
    const items = [];
    if (snapshot.exists()) {
      snapshot.forEach((child) => {
        items.push({ id: child.key, ...child.val() });
      });
    }
    // Trier par date de création (plus récent en premier)
    items.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
    callback(items);
  });
  return unsubscribe;
}
