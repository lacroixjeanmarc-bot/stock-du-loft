import {
  ref,
  push,
  update,
  remove,
  get,
  query,
  orderByChild,
  onValue
} from 'firebase/database';
import { database } from '../firebase';
import { compressImage } from './imageService';

const ITEMS_PATH = 'stockduloft/items';

// ==========================================
// CRUD ITEMS
// ==========================================

/**
 * Ajoute un nouvel item à l'inventaire.
 * La photo est compressée et stockée en base64.
 */
export async function addItem({ uniqueId, description, price, photoFile, category, itemDate }) {
  let photoBase64 = '';

  if (photoFile) {
    photoBase64 = await compressImage(photoFile);
  }

  const itemData = {
    uniqueId: uniqueId.toUpperCase().trim(),
    description: description.trim(),
    price: parseFloat(price),
    photoBase64,
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
  return { id: newRef.key, ...itemData };
}

/**
 * Met à jour un item existant.
 */
export async function updateItem(itemId, updates) {
  const itemRef = ref(database, `${ITEMS_PATH}/${itemId}`);
  await update(itemRef, {
    ...updates,
    updatedAt: Date.now()
  });
}

/**
 * Supprime un item.
 */
export async function deleteItem(itemId) {
  const itemRef = ref(database, `${ITEMS_PATH}/${itemId}`);
  await remove(itemRef);
}

/**
 * Récupère un item par son numéro unique.
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
export async function sellItem(itemId, sellerName, saleDate = null, salePrice = null) {
  const itemRef = ref(database, `${ITEMS_PATH}/${itemId}`);
  const updates = {
    status: 'sold',
    sellerName: sellerName.trim(),
    saleDate: saleDate || new Date().toISOString().split('T')[0],
    updatedAt: Date.now()
  };
  if (salePrice !== null) {
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
    sellerName: '',
    updatedAt: Date.now()
  });
}

// ==========================================
// ÉCOUTE EN TEMPS RÉEL
// ==========================================

/**
 * Écoute les changements de l'inventaire en temps réel.
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
