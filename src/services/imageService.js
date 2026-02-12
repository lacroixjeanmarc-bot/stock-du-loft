/**
 * Compresse une image et retourne un string base64.
 * Stocké directement dans Firestore (pas besoin de Firebase Storage).
 */

const MAX_WIDTH = 600;
const MAX_HEIGHT = 600;
const QUALITY = 0.6;

const THUMB_SIZE = 80;
const THUMB_QUALITY = 0.4;

export function compressImage(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let { width, height } = img;

        if (width > height) {
          if (width > MAX_WIDTH) {
            height = Math.round((height * MAX_WIDTH) / width);
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width = Math.round((width * MAX_HEIGHT) / height);
            height = MAX_HEIGHT;
          }
        }

        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        const base64 = canvas.toDataURL('image/jpeg', QUALITY);
        resolve(base64);
      };
      img.onerror = () => reject(new Error('Impossible de charger l\'image'));
      img.src = e.target.result;
    };
    reader.onerror = () => reject(new Error('Impossible de lire le fichier'));
    reader.readAsDataURL(file);
  });
}

/**
 * Crée une miniature carrée (~3-5 KB) pour affichage rapide dans la liste.
 */
export function compressThumbnail(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = THUMB_SIZE;
        canvas.height = THUMB_SIZE;

        // Crop carré centré
        const ctx = canvas.getContext('2d');
        const min = Math.min(img.width, img.height);
        const sx = (img.width - min) / 2;
        const sy = (img.height - min) / 2;
        ctx.drawImage(img, sx, sy, min, min, 0, 0, THUMB_SIZE, THUMB_SIZE);

        const base64 = canvas.toDataURL('image/jpeg', THUMB_QUALITY);
        resolve(base64);
      };
      img.onerror = () => reject(new Error('Impossible de charger l\'image'));
      img.src = e.target.result;
    };
    reader.onerror = () => reject(new Error('Impossible de lire le fichier'));
    reader.readAsDataURL(file);
  });
}
