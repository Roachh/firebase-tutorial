import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "fir-tutorial-e3af4.firebaseapp.com",
  projectId: "fir-tutorial-e3af4",
  storageBucket: "fir-tutorial-e3af4.appspot.com",
  messagingSenderId: "703825662459",
  appId: "1:703825662459:web:b87de7d88e04be9dd7bb5e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Get a reference to the storage service, which is used to create references in your storage bucket
export const storage = getStorage(app);
