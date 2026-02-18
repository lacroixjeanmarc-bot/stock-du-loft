import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBLRfIvin2GeZzM2k91UvVVBxKzYDFC4XE",
  authDomain: "vitrineartisan.firebaseapp.com",
  databaseURL: "https://vitrineartisan-default-rtdb.firebaseio.com",
  projectId: "vitrineartisan",
  storageBucket: "vitrineartisan.firebasestorage.app",
  messagingSenderId: "375022059708",
  appId: "1:375022059708:web:f059d080070233a5b590b9"
};

const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export default app;
