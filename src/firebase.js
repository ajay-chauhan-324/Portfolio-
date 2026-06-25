
// src/firebase.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC64XrC9CLEv_UbKT5jFLmQLe2xhbUkSCs",
  authDomain: "my-portfolio-d5c6b.firebaseapp.com",
  projectId: "my-portfolio-d5c6b",
  storageBucket: "my-portfolio-d5c6b.firebasestorage.app",
  messagingSenderId: "833165286074",
  appId: "1:833165286074:web:b108e78b64563f0c3b4083",
  measurementId: "G-8JRTECDZ7L",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export default app;

