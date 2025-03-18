// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "contact-app-702e8.firebaseapp.com",
  projectId: "contact-app-702e8",
  storageBucket: "contact-app-702e8.firebasestorage.app",
  messagingSenderId: "501031060058",
  appId: "1:501031060058:web:1b9dfc94d8b5e124c80e63"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);