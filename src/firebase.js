import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCrFLv4OkNYI86ll6U0Xjo5OegDaUzqFMA",
  authDomain: "stockduloft.firebaseapp.com",
  databaseURL: "https://stockduloft-default-rtdb.firebaseio.com",
  projectId: "stockduloft",
  storageBucket: "stockduloft.firebasestorage.app",
  messagingSenderId: "375022059708",
  appId: "1:375022059708:web:f059d080070233a5b590b9",
  measurementId: "G-C7CW1SSW2Z"
};

const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export default app;