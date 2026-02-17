import { ref, push, update, remove, get, onValue } from 'firebase/database';
import { database } from '../firebase';

const TENANTS_PATH = 'stockduloft/tenants';
const SETTINGS_PATH = 'stockduloft/settings';
const PAYMENTS_PATH = 'stockduloft/payments';

// Email du super admin
export const SUPER_ADMIN_EMAIL = 'lacroix.jeanmarc@gmail.com';

export function isSuperAdmin(user) {
  return user?.email?.toLowerCase() === SUPER_ADMIN_EMAIL;
}

/**
 * Synchronise le plan vers settings/subscription pour l'affichage dans AboutPage.
 */
async function syncSubscription(planData) {
  await update(ref(database, `${SETTINGS_PATH}/subscription`), planData);
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
    action: paymentData.action || 'activation', // activation | renewal
    recordedAt: Date.now()
  };

  const paymentsRef = ref(database, PAYMENTS_PATH);
  const newRef = push(paymentsRef);
  await update(newRef, payment);

  // Aussi stocker le dernier paiement sur le tenant
  await update(ref(database, `${TENANTS_PATH}/${tenantId}/lastPayment`), payment);

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
 * Écoute tous les paiements.
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

  const planData = { plan: 'artisan', planType, startDate, expiryDate };

  await updateTenant(tenantId, planData);
  await syncSubscription(planData);
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

  const planData = { plan: 'artisan', planType: type, expiryDate };

  await updateTenant(tenantId, planData);
  await syncSubscription(planData);
}

/**
 * Rétrograde un tenant au plan gratuit.
 */
export async function downgradePlan(tenantId) {
  const planData = { plan: 'free', planType: null, startDate: null, expiryDate: null };

  await updateTenant(tenantId, planData);
  await syncSubscription(planData);
}

/**
 * Supprime un tenant.
 */
export async function deleteTenant(tenantId) {
  const tenantRef = ref(database, `${TENANTS_PATH}/${tenantId}`);
  await remove(tenantRef);
}
