/**
 * themeService.js — Gestion des thèmes de couleur
 * Les thèmes utilisent les CSS variables déjà en place dans styles.css
 */

export const THEMES = {
  'dark-copper': {
    name: 'Cuivré sombre',
    emoji: '🔥',
    preview: '#e8a87c',
    vars: {
      '--bg-primary': '#0f0f1a',
      '--bg-secondary': '#1a1a2e',
      '--bg-card': '#16213e',
      '--bg-card-hover': '#1c2a4a',
      '--bg-input': '#0a0a14',
      '--text-primary': '#e8e8e8',
      '--text-secondary': '#a0a8c0',
      '--text-muted': '#6b7394',
      '--accent': '#e8a87c',
      '--accent-light': '#f0c8a8',
      '--accent-dark': '#c08060',
    }
  },
  'dark-emerald': {
    name: 'Émeraude',
    emoji: '💎',
    preview: '#66BB6A',
    vars: {
      '--bg-primary': '#0a1a14',
      '--bg-secondary': '#122a1e',
      '--bg-card': '#1a3828',
      '--bg-card-hover': '#224832',
      '--bg-input': '#060f0a',
      '--text-primary': '#e8e8e8',
      '--text-secondary': '#a0c8a8',
      '--text-muted': '#5a8a68',
      '--accent': '#66BB6A',
      '--accent-light': '#a5d6a7',
      '--accent-dark': '#388E3C',
    }
  },
  'dark-lavender': {
    name: 'Lavande',
    emoji: '💜',
    preview: '#B39DDB',
    vars: {
      '--bg-primary': '#12101a',
      '--bg-secondary': '#1e1a2e',
      '--bg-card': '#28223e',
      '--bg-card-hover': '#342c50',
      '--bg-input': '#0c0a14',
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
    emoji: '🌸',
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
    emoji: '🌊',
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
    emoji: '🪵',
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
    emoji: '🌿',
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
    emoji: '⬜',
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
 * Applique un thème en modifiant les CSS variables sur :root
 */
export function applyTheme(themeId) {
  const theme = THEMES[themeId];
  if (!theme) return;
  const root = document.documentElement;
  Object.entries(theme.vars).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });
}

/**
 * Remet les CSS variables par défaut (thème cuivré sombre)
 */
export function resetTheme() {
  applyTheme('dark-copper');
}
