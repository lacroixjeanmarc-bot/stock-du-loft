import { ref, push, update, remove, get, query, orderByChild, onValue } from 'firebase/database';
import { database } from '../firebase';
import { compressImage, compressThumbnail } from './imageService';

const ITEMS_PATH = 'stockduloft/items';
const PHOTOS_PATH = 'stockduloft/photos';
const STORES_PATH = 'stockduloft/stores';
const MAX_EXTRA_PHOTOS = 4;

// ==========================================
// PHOTOS
// ==========================================

export async function getItemPhoto(itemId) {
  const photoRef = ref(database, `${PHOTOS_PATH}/${itemId}`);
  const snapshot = await get(photoRef);
  if (!snapshot.exists()) return null;
  return snapshot.val().photoBase64 || null;
}

export async function getAllItemPhotos(itemId) {
  const photoRef = ref(database, `${PHOTOS_PATH}/${itemId}`);
  const snapshot = await get(photoRef);
  if (!snapshot.exists()) return [];
  const data = snapshot.val();
  const photos = [];
  if (data.photoBase64) photos.push(data.photoBase64);
  for (let i = 1; i <= MAX_EXTRA_PHOTOS; i++) {
    if (data[`photo_${i}`]) photos.push(data[`photo_${i}`]);
  }
  return photos;
}

export async function addExtraPhoto(itemId, photoFile) {
  const photoRef = ref(database, `${PHOTOS_PATH}/${itemId}`);
  const snapshot = await get(photoRef);
  const data = snapshot.exists() ? snapshot.val() : {};

  let nextSlot = null;
  for (let i = 1; i <= MAX_EXTRA_PHOTOS; i++) {
    if (!data[`photo_${i}`]) { nextSlot = i; break; }
  }
  if (nextSlot === null) return null;

  const compressed = await compressImage(photoFile);
  await update(photoRef, { [`photo_${nextSlot}`]: compressed });

  const currentCount = countPhotos(data) + 1;
  const itemRef = ref(database, `${ITEMS_PATH}/${itemId}`);
  await update(itemRef, { photoCount: currentCount, updatedAt: Date.now() });

  return nextSlot;
}

export async function deleteExtraPhoto(itemId, index) {
  if (index < 1 || index > MAX_EXTRA_PHOTOS) return;
  const photoRef = ref(database, `${PHOTOS_PATH}/${itemId}`);
  await update(photoRef, { [`photo_${index}`]: null });

  const snapshot = await get(photoRef);
  const data = snapshot.exists() ? snapshot.val() : {};
  const count = countPhotos(data);

  const itemRef = ref(database, `${ITEMS_PATH}/${itemId}`);
  await update(itemRef, { photoCount: count, updatedAt: Date.now() });
}

function countPhotos(photoData) {
  let count = 0;
  if (photoData.photoBase64) count++;
  for (let i = 1; i <= MAX_EXTRA_PHOTOS; i++) {
    if (photoData[`photo_${i}`]) count++;
  }
  return count;
}

// ==========================================
// MAGASINS (STORES)
// ==========================================

export function subscribeToStores(callback) {
  const storesRef = ref(database, STORES_PATH);
  const unsubscribe = onValue(storesRef, (snapshot) => {
    const stores = [];
    if (snapshot.exists()) {
      snapshot.forEach((child) => {
        stores.push({ id: child.key, ...child.val() });
      });
    }
    stores.sort((a, b) => (a.name || '').localeCompare(b.name || ''));
    callback(stores);
  });
  return unsubscribe;
}

export async function getStores() {
  const storesRef = ref(database, STORES_PATH);
  const snapshot = await get(storesRef);
  const stores = [];
  if (snapshot.exists()) {
    snapshot.forEach((child) => {
      stores.push({ id: child.key, ...child.val() });
    });
  }
  stores.sort((a, b) => (a.name || '').localeCompare(b.name || ''));
  return stores;
}

export async function getStore(storeId) {
  const storeRef = ref(database, `${STORES_PATH}/${storeId}`);
  const snapshot = await get(storeRef);
  if (!snapshot.exists()) return null;
  return { id: storeId, ...snapshot.val() };
}

export async function addStore({ name, commissionPercent, locationFee }) {
  const storeData = {
    name: name.trim(),
    commissionPercent: parseFloat(commissionPercent) || 0,
    locationFee: parseFloat(locationFee) || 0,
    active: true,
    createdAt: Date.now()
  };
  const storesRef = ref(database, STORES_PATH);
  const newRef = push(storesRef);
  await update(newRef, storeData);
  return { id: newRef.key, ...storeData };
}

export async function updateStore(storeId, updates) {
  const storeRef = ref(database, `${STORES_PATH}/${storeId}`);
  await update(storeRef, updates);
}

export async function deleteStore(storeId) {
  const storeRef = ref(database, `${STORES_PATH}/${storeId}`);
  await remove(storeRef);
}

// ==========================================
// CRUD ITEMS
// ==========================================

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
    consignmentStoreId: '',
    consignmentDate: null,
    saleDate: null,
    sellerName: '',
    createdAt: Date.now(),
    updatedAt: Date.now()
  };

  const itemsRef = ref(database, ITEMS_PATH);
  const newRef = push(itemsRef);
  await update(newRef, itemData);

  if (photoFile) {
    const [photoBase64, thumbnail] = await Promise.all([
      compressImage(photoFile),
      compressThumbnail(photoFile)
    ]);
    const photoRef = ref(database, `${PHOTOS_PATH}/${newRef.key}`);
    await update(photoRef, { photoBase64 });
    await update(newRef, { hasPhoto: true, thumbnail, photoCount: 1 });
    itemData.hasPhoto = true;
    itemData.thumbnail = thumbnail;
    itemData.photoCount = 1;
  }

  return { id: newRef.key, ...itemData };
}

export async function updateItem(itemId, updates) {
  const itemRef = ref(database, `${ITEMS_PATH}/${itemId}`);
  await update(itemRef, { ...updates, updatedAt: Date.now() });
}

export async function deleteItem(itemId) {
  const itemRef = ref(database, `${ITEMS_PATH}/${itemId}`);
  const photoRef = ref(database, `${PHOTOS_PATH}/${itemId}`);
  await remove(photoRef);
  await remove(itemRef);
}

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

  if (found && found.hasPhoto) {
    found.photoBase64 = await getItemPhoto(found.id);
  }

  return found;
}

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
// VENTE (avec support commission + taxes)
// ==========================================

/**
 * Marque un item comme vendu.
 * Si l'item était en consigne, calcule la commission.
 * Si taxData est fourni, stocke les infos de taxes.
 */
export async function sellItem(itemId, sellerName, saleDate = null, salePrice = null, marketName = '', isGift = false, giftNote = '', taxData = null) {
  const itemRef = ref(database, `${ITEMS_PATH}/${itemId}`);
  const itemSnap = await get(itemRef);
  const itemData = itemSnap.exists() ? itemSnap.val() : {};

  const finalPrice = isGift ? 0 : (salePrice !== null ? parseFloat(salePrice) : itemData.price);

  const updates = {
    status: 'sold',
    sellerName: sellerName.trim(),
    saleDate: saleDate || new Date().toISOString().split('T')[0],
    salePrice: finalPrice,
    marketName: marketName.trim(),
    isGift: isGift,
    giftNote: isGift ? giftNote.trim() : '',
    updatedAt: Date.now()
  };

  // Stocker les taxes si fournies
  if (taxData && !isGift) {
    updates.taxEnabled = true;
    updates.tpsRate = taxData.tpsRate;
    updates.tvqRate = taxData.tvqRate;
    updates.tpsAmount = taxData.tpsAmount;
    updates.tvqAmount = taxData.tvqAmount;
    updates.totalWithTax = taxData.totalWithTax;
  } else {
    updates.taxEnabled = false;
    updates.tpsRate = null;
    updates.tvqRate = null;
    updates.tpsAmount = null;
    updates.tvqAmount = null;
    updates.totalWithTax = null;
  }

  // Calculer la commission si l'item était en consigne
  if (itemData.status === 'consignment' && itemData.consignmentStoreId && !isGift) {
    const store = await getStore(itemData.consignmentStoreId);
    if (store && store.commissionPercent > 0) {
      const commissionAmount = Math.round(finalPrice * store.commissionPercent) / 100;
      updates.commissionPercent = store.commissionPercent;
      updates.commissionAmount = commissionAmount;
      updates.netRevenue = Math.round((finalPrice - commissionAmount) * 100) / 100;
    } else {
      updates.commissionPercent = 0;
      updates.commissionAmount = 0;
      updates.netRevenue = finalPrice;
    }
  }

  await update(itemRef, updates);
  return updates;
}

/**
 * Met un item en consigne chez un marchand.
 */
export async function consignItem(itemId, storeName, consignmentDate = null, storeId = '') {
  const itemRef = ref(database, `${ITEMS_PATH}/${itemId}`);
  await update(itemRef, {
    status: 'consignment',
    consignmentStore: storeName.trim(),
    consignmentStoreId: storeId,
    consignmentDate: consignmentDate || new Date().toISOString().split('T')[0],
    updatedAt: Date.now()
  });
}

/**
 * Remet un item en inventaire.
 */
export async function returnToInventory(itemId) {
  const itemRef = ref(database, `${ITEMS_PATH}/${itemId}`);
  await update(itemRef, {
    status: 'inventory',
    consignmentStore: '',
    consignmentStoreId: '',
    consignmentDate: null,
    saleDate: null,
    salePrice: null,
    marketName: '',
    sellerName: '',
    isGift: false,
    giftNote: '',
    commissionPercent: null,
    commissionAmount: null,
    netRevenue: null,
    taxEnabled: null,
    tpsRate: null,
    tvqRate: null,
    tpsAmount: null,
    tvqAmount: null,
    totalWithTax: null,
    updatedAt: Date.now()
  });
}

// ==========================================
// ÉCOUTE EN TEMPS RÉEL
// ==========================================

export function subscribeToItems(callback) {
  const itemsRef = ref(database, ITEMS_PATH);
  const unsubscribe = onValue(itemsRef, (snapshot) => {
    const items = [];
    if (snapshot.exists()) {
      snapshot.forEach((child) => {
        items.push({ id: child.key, ...child.val() });
      });
    }
    items.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
    callback(items);
  });
  return unsubscribe;
}
