import { ref, push, update, remove, get, onValue } from 'firebase/database';
import { database } from '../firebase';

const PAYMENTS_PATH = 'payments';

// Email du super admin
export const SUPER_ADMIN_EMAIL = 'lacroix.jeanmarc@gmail.com';

export function isSuperAdmin(user) {
  return user?.email?.toLowerCase() === SUPER_ADMIN_EMAIL;
}

/**
 * Enregistre un paiement Interac.
 */
export async function recordPayment(tenantId, paymentData) {
  const payment = {
    tenantId,
    amount: parseFloat(paymentData.amount) || 0,
    senderName: paymentData.senderName?.trim() || '',
    referenceNumber: paymentData.referenceNumber?.trim() || '',
    paymentDate: paymentData.paymentDate || new Date().toISOString().split('T')[0],
    planType: paymentData.planType || 'monthly',
    action: paymentData.action || 'activation',
    recordedAt: Date.now()
  };

  const paymentsRef = ref(database, PAYMENTS_PATH);
  const newRef = push(paymentsRef);
  await update(newRef, payment);

  // Stocker le dernier paiement sur le tenant
  await update(ref(database, `tenants/${tenantId}/lastPayment`), payment);

  return { id: newRef.key, ...payment };
}

/**
 * Écoute les paiements d'un tenant.
 */
export function subscribeToPayments(tenantId, callback) {
  const paymentsRef = ref(database, PAYMENTS_PATH);
  const unsubscribe = onValue(paymentsRef, (snapshot) => {
    const payments = [];
    if (snapshot.exists()) {
      snapshot.forEach((child) => {
        const p = child.val();
        if (p.tenantId === tenantId) {
          payments.push({ id: child.key, ...p });
        }
      });
    }
    payments.sort((a, b) => (b.recordedAt || 0) - (a.recordedAt || 0));
    callback(payments);
  });
  return unsubscribe;
}

/**
 * Écoute tous les paiements (super admin).
 */
export function subscribeToAllPayments(callback) {
  const paymentsRef = ref(database, PAYMENTS_PATH);
  const unsubscribe = onValue(paymentsRef, (snapshot) => {
    const payments = [];
    if (snapshot.exists()) {
      snapshot.forEach((child) => {
        payments.push({ id: child.key, ...child.val() });
      });
    }
    payments.sort((a, b) => (b.recordedAt || 0) - (a.recordedAt || 0));
    callback(payments);
  });
  return unsubscribe;
}

/**
 * Écoute tous les tenants en temps réel (super admin).
 */
export function subscribeToTenants(callback) {
  const tenantsRef = ref(database, 'tenants');
  const unsubscribe = onValue(tenantsRef, (snapshot) => {
    const tenants = [];
    if (snapshot.exists()) {
      snapshot.forEach((child) => {
        const profile = child.val()?.profile;
        if (profile) {
          tenants.push({ id: child.key, ...profile });
        }
      });
    }
    tenants.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
    callback(tenants);
  });
  return unsubscribe;
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

  const planData = { plan: 'artisan', planType, startDate, expiryDate };
  await update(ref(database, `tenants/${tenantId}/profile`), planData);
}

/**
 * Renouvelle le plan d'un tenant.
 */
export async function renewPlan(tenantId, planType = null) {
  const profileRef = ref(database, `tenants/${tenantId}/profile`);
  const snap = await get(profileRef);
  if (!snap.exists()) return;

  const profile = snap.val();
  const type = planType || profile.planType || 'monthly';

  const baseDate = profile.expiryDate ? new Date(profile.expiryDate) : new Date();
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

  await update(profileRef, { plan: 'artisan', planType: type, expiryDate });
}

/**
 * Rétrograde un tenant au plan gratuit.
 */
export async function downgradePlan(tenantId) {
  await update(ref(database, `tenants/${tenantId}/profile`), {
    plan: 'free', planType: null, startDate: null, expiryDate: null
  });
}

/**
 * Ajoute un tenant manuellement (super admin).
 */
export async function addTenant(data) {
  const tenantRef = ref(database, `tenants/${data.uid || push(ref(database, 'tenants')).key}/profile`);
  await update(tenantRef, {
    businessName: data.businessName?.trim() || '',
    ownerName: data.ownerName?.trim() || '',
    email: data.email?.trim() || '',
    prefix: data.prefix?.toUpperCase() || 'ART',
    slug: data.slug || '',
    plan: data.plan || 'free',
    notes: data.notes || '',
    createdAt: Date.now(),
    updatedAt: Date.now()
  });
}

/**
 * Met à jour un tenant (super admin).
 */
export async function updateTenant(tenantId, updates) {
  const profileRef = ref(database, `tenants/${tenantId}/profile`);
  await update(profileRef, { ...updates, updatedAt: Date.now() });
}

/**
 * Supprime un tenant (super admin).
 */
export async function deleteTenant(tenantId) {
  const tenantRef = ref(database, `tenants/${tenantId}`);
  await remove(tenantRef);
}
