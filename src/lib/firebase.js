import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; // Import Firestore

const firebaseConfig = {
  apiKey: "AIzaSyC9teLhei5TYNoZSTr0Fj4zAdqf-DIr1Yg",
  authDomain: "myhotel-b8350.firebaseapp.com",
  projectId: "myhotel-b8350",
  storageBucket: "myhotel-b8350.appspot.com",
  messagingSenderId: "856297594954",
  appId: "1:856297594954:web:7b2827169c34856085c6b3"
};

// Initialize Firebase
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const auth = getAuth(firebase_app);
export const db = getFirestore(firebase_app); // Initialize Firestore and export
