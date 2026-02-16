import { ref, push, update, remove, get, onValue } from 'firebase/database';
import { database } from '../firebase';

const TENANTS_PATH = 'stockduloft/tenants';

// Email du super admin
export const SUPER_ADMIN_EMAIL = 'lacroix.jeanmarc@gmail.com';

export function isSuperAdmin(user) {
  return user?.email?.toLowerCase() === SUPER_ADMIN_EMAIL;
}

/**
 * Écoute tous les tenants en temps réel.
 */
export function subscribeToTenants(callback) {
  const tenantsRef = ref(database, TENANTS_PATH);
  const unsubscribe = onValue(tenantsRef, (snapshot) => {
    const tenants = [];
    if (snapshot.exists()) {
      snapshot.forEach((child) => {
        tenants.push({ id: child.key, ...child.val() });
      });
    }
    tenants.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
    callback(tenants);
  });
  return unsubscribe;
}

/**
 * Ajoute un nouveau tenant (artisan).
 */
export async function addTenant({ businessName, ownerName, email, phone }) {
  const tenantData = {
    businessName: businessName.trim(),
    ownerName: ownerName.trim(),
    email: email.trim().toLowerCase(),
    phone: phone?.trim() || '',
    plan: 'free',
    planType: null,
    startDate: null,
    expiryDate: null,
    articlesCount: 0,
    active: true,
    notes: '',
    createdAt: Date.now()
  };
  const tenantsRef = ref(database, TENANTS_PATH);
  const newRef = push(tenantsRef);
  await update(newRef, tenantData);
  return { id: newRef.key, ...tenantData };
}

/**
 * Met à jour un tenant.
 */
export async function updateTenant(tenantId, updates) {
  const tenantRef = ref(database, `${TENANTS_PATH}/${tenantId}`);
  await update(tenantRef, { ...updates, updatedAt: Date.now() });
}

/**
 * Active le plan Artisan pour un tenant.
 */
export async function activatePlan(tenantId, planType = 'monthly') {
  const now = new Date();
  const startDate = now.toISOString().split('T')[0];

  let expiryDate;
  if (planType === 'yearly') {
    const exp = new Date(now);
    exp.setFullYear(exp.getFullYear() + 1);
    expiryDate = exp.toISOString().split('T')[0];
  } else {
    const exp = new Date(now);
    exp.setMonth(exp.getMonth() + 1);
    expiryDate = exp.toISOString().split('T')[0];
  }

  await updateTenant(tenantId, {
    plan: 'artisan',
    planType,
    startDate,
    expiryDate
  });
}

/**
 * Renouvelle le plan d'un tenant.
 */
export async function renewPlan(tenantId, planType = null) {
  const tenantRef = ref(database, `${TENANTS_PATH}/${tenantId}`);
  const snap = await get(tenantRef);
  if (!snap.exists()) return;

  const tenant = snap.val();
  const type = planType || tenant.planType || 'monthly';

  // Partir de la date d'expiration actuelle ou d'aujourd'hui
  const baseDate = tenant.expiryDate ? new Date(tenant.expiryDate) : new Date();
  const now = new Date();
  const startFrom = baseDate > now ? baseDate : now;

  let expiryDate;
  if (type === 'yearly') {
    const exp = new Date(startFrom);
    exp.setFullYear(exp.getFullYear() + 1);
    expiryDate = exp.toISOString().split('T')[0];
  } else {
    const exp = new Date(startFrom);
    exp.setMonth(exp.getMonth() + 1);
    expiryDate = exp.toISOString().split('T')[0];
  }

  await updateTenant(tenantId, {
    plan: 'artisan',
    planType: type,
    expiryDate
  });
}

/**
 * Rétrograde un tenant au plan gratuit.
 */
export async function downgradePlan(tenantId) {
  await updateTenant(tenantId, {
    plan: 'free',
    planType: null,
    startDate: null,
    expiryDate: null
  });
}

/**
 * Supprime un tenant.
 */
export async function deleteTenant(tenantId) {
  const tenantRef = ref(database, `${TENANTS_PATH}/${tenantId}`);
  await remove(tenantRef);
}
