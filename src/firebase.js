import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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
