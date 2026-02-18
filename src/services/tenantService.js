import { ref, get, set, update, onValue } from 'firebase/database';
import { database } from '../firebase';

/**
 * Génère un slug URL-friendly à partir d'un nom de commerce.
 */
export function generateSlug(businessName) {
  return businessName
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Enlever les accents
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .substring(0, 40);
}

/**
 * Vérifie si un slug est disponible.
 */
export async function isSlugAvailable(slug) {
  if (!slug || slug.length < 3) return false;
  const slugRef = ref(database, `slugs/${slug}`);
  const snap = await get(slugRef);
  return !snap.exists();
}

/**
 * Vérifie si un préfixe est disponible.
 */
export async function isPrefixAvailable(prefix) {
  if (!prefix || prefix.length < 2 || prefix.length > 5) return false;
  const prefixRef = ref(database, `prefixes/${prefix.toUpperCase()}`);
  const snap = await get(prefixRef);
  return !snap.exists();
}

/**
 * Récupère le profil du tenant connecté.
 */
export async function getTenantProfile(uid) {
  const profileRef = ref(database, `tenants/${uid}/profile`);
  const snap = await get(profileRef);
  if (!snap.exists()) return null;
  return snap.val();
}

/**
 * Écoute le profil du tenant en temps réel.
 */
export function subscribeToTenantProfile(uid, callback) {
  const profileRef = ref(database, `tenants/${uid}/profile`);
  return onValue(profileRef, (snap) => {
    callback(snap.exists() ? snap.val() : null);
  });
}

/**
 * Crée un nouveau tenant (onboarding).
 */
export async function createTenant(uid, { businessName, ownerName, email, prefix, slug, theme }) {
  const upperPrefix = prefix.toUpperCase();

  // Réserver le slug et le préfixe
  await set(ref(database, `slugs/${slug}`), uid);
  await set(ref(database, `prefixes/${upperPrefix}`), uid);

  // Créer le profil
  const profile = {
    businessName: businessName.trim(),
    ownerName: ownerName.trim(),
    email: email.trim().toLowerCase(),
    prefix: upperPrefix,
    slug,
    theme: theme || 'dark-copper',
    plan: 'free',
    nextItemNumber: 1,
    createdAt: Date.now(),
    updatedAt: Date.now()
  };

  await set(ref(database, `tenants/${uid}/profile`), profile);

  // Paramètres par défaut
  await set(ref(database, `tenants/${uid}/settings`), {
    vitrineSoldDays: 7,
    taxes: { enabled: false, tpsRate: 5, tvqRate: 9.975, tpsNumber: '', tvqNumber: '' }
  });

  return profile;
}

/**
 * Met à jour le profil du tenant.
 */
export async function updateTenantProfile(uid, updates) {
  const profileRef = ref(database, `tenants/${uid}/profile`);
  await update(profileRef, { ...updates, updatedAt: Date.now() });
}

/**
 * Récupère le UID d'un tenant à partir de son slug (pour la vitrine publique).
 */
export async function getUidBySlug(slug) {
  const slugRef = ref(database, `slugs/${slug}`);
  const snap = await get(slugRef);
  if (!snap.exists()) return null;
  return snap.val();
}

/**
 * Thèmes disponibles pour la personnalisation.
 */
export const THEMES = {
  'dark-copper': {
    name: 'Cuivré sombre',
    preview: '#e8a87c',
    vars: {
      '--bg-primary': '#1a1a2e',
      '--bg-secondary': '#16213e',
      '--bg-card': '#1e2a45',
      '--bg-card-hover': '#253354',
      '--bg-input': '#0f1626',
      '--text-primary': '#e8e8e8',
      '--text-secondary': '#a0a8c0',
      '--text-muted': '#6b7394',
      '--accent': '#e8a87c',
      '--accent-light': '#f5cba7',
      '--accent-dark': '#c47d4e',
    }
  },
  'dark-emerald': {
    name: 'Émeraude',
    preview: '#50C878',
    vars: {
      '--bg-primary': '#0f1a14',
      '--bg-secondary': '#132418',
      '--bg-card': '#1a3025',
      '--bg-card-hover': '#22402f',
      '--bg-input': '#0a120e',
      '--text-primary': '#e8e8e8',
      '--text-secondary': '#9cb8a8',
      '--text-muted': '#607a6c',
      '--accent': '#50C878',
      '--accent-light': '#82dfa0',
      '--accent-dark': '#38a85e',
    }
  },
  'dark-lavender': {
    name: 'Lavande',
    preview: '#B39DDB',
    vars: {
      '--bg-primary': '#1a1528',
      '--bg-secondary': '#221c38',
      '--bg-card': '#2a2345',
      '--bg-card-hover': '#352d54',
      '--bg-input': '#120e1e',
      '--text-primary': '#e8e8e8',
      '--text-secondary': '#b0a8c8',
      '--text-muted': '#7a6f98',
      '--accent': '#B39DDB',
      '--accent-light': '#d1c4e9',
      '--accent-dark': '#8e79c0',
    }
  },
  'dark-rose': {
    name: 'Rosé',
    preview: '#F48FB1',
    vars: {
      '--bg-primary': '#1a1218',
      '--bg-secondary': '#251a22',
      '--bg-card': '#30222c',
      '--bg-card-hover': '#3e2b38',
      '--bg-input': '#140e12',
      '--text-primary': '#e8e8e8',
      '--text-secondary': '#c0a0b0',
      '--text-muted': '#8a6878',
      '--accent': '#F48FB1',
      '--accent-light': '#f8bdd0',
      '--accent-dark': '#e06090',
    }
  },
  'dark-ocean': {
    name: 'Océan',
    preview: '#4FC3F7',
    vars: {
      '--bg-primary': '#0d1b2a',
      '--bg-secondary': '#1b2838',
      '--bg-card': '#1e3548',
      '--bg-card-hover': '#254458',
      '--bg-input': '#081420',
      '--text-primary': '#e8e8e8',
      '--text-secondary': '#90b8d0',
      '--text-muted': '#5a8098',
      '--accent': '#4FC3F7',
      '--accent-light': '#81d4fa',
      '--accent-dark': '#0394d0',
    }
  },
  'light-natural': {
    name: 'Naturel clair',
    preview: '#8B6F47',
    vars: {
      '--bg-primary': '#faf7f2',
      '--bg-secondary': '#f0ebe2',
      '--bg-card': '#ffffff',
      '--bg-card-hover': '#f5f0e8',
      '--bg-input': '#ffffff',
      '--text-primary': '#2d2418',
      '--text-secondary': '#5c4e3c',
      '--text-muted': '#9a8b78',
      '--accent': '#8B6F47',
      '--accent-light': '#b89868',
      '--accent-dark': '#6a5335',
    }
  },
  'light-sage': {
    name: 'Sauge clair',
    preview: '#6B8E6B',
    vars: {
      '--bg-primary': '#f5f8f5',
      '--bg-secondary': '#e8efe8',
      '--bg-card': '#ffffff',
      '--bg-card-hover': '#f0f5f0',
      '--bg-input': '#ffffff',
      '--text-primary': '#1e2e1e',
      '--text-secondary': '#3c5a3c',
      '--text-muted': '#7a9a7a',
      '--accent': '#6B8E6B',
      '--accent-light': '#8eb88e',
      '--accent-dark': '#4a6e4a',
    }
  },
  'light-minimal': {
    name: 'Minimal blanc',
    preview: '#333333',
    vars: {
      '--bg-primary': '#ffffff',
      '--bg-secondary': '#f5f5f5',
      '--bg-card': '#ffffff',
      '--bg-card-hover': '#fafafa',
      '--bg-input': '#f8f8f8',
      '--text-primary': '#1a1a1a',
      '--text-secondary': '#555555',
      '--text-muted': '#999999',
      '--accent': '#333333',
      '--accent-light': '#666666',
      '--accent-dark': '#111111',
    }
  }
};

/**
 * Applique un thème en modifiant les CSS variables sur :root.
 */
export function applyTheme(themeId) {
  const theme = THEMES[themeId];
  if (!theme) return;
  const root = document.documentElement;
  Object.entries(theme.vars).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });
}
