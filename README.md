# Stock du Loft ✂️

Gestion d'inventaire pour **L'Atelier du Loft**.  
Application PWA React + Firebase pour gérer les créations couture : inventaire, ventes en marché public, et consignation chez des marchands.

## Fonctionnalités

- 📦 **Inventaire** — Liste complète avec photo, numéro unique, prix, statut
- 💰 **Vente rapide** — Recherche par numéro d'étiquette, confirmation visuelle, enregistrement
- ➕ **Ajout d'items** — Photo (caméra ou galerie), compression automatique
- 📍 **Consignation** — Suivi des items en consigne chez des marchands
- 🔍 **Recherche & filtres** — Par statut, numéro, description
- 📱 **PWA** — Installable sur Android/iOS, utilisable par les amies vendeuses

## Setup

### 1. Firebase

1. Créer un projet sur [Firebase Console](https://console.firebase.google.com)
2. Activer **Authentication** → Google sign-in
3. Activer **Firestore Database**
4. Activer **Storage**
5. Copier la config Firebase dans `src/firebase.js`
6. Déployer les règles Firestore (`firestore.rules`) et Storage (`storage.rules`)

### 2. Index Firestore

Créer un index composite dans Firestore :
- Collection: `items`
- Champs: `uniqueId` (Ascending), `createdAt` (Descending)

### 3. Développement local

```bash
npm install
npm run dev
```

### 4. Build & déploiement

```bash
npm run build
firebase deploy
```

## Stack

- **React 18** + Vite
- **Firebase** (Auth, Firestore, Storage)
- **PWA** via vite-plugin-pwa
- **CSS** custom (mobile-first, dark theme)
