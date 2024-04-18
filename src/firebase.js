import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/auth";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAFZQdtjrFRDRhkmlsMCNFUPgyquZGqcuk",
  authDomain: "docslibr.firebaseapp.com",
  projectId: "docslibr",
  storageBucket: "docslibr.appspot.com",
  messagingSenderId: "124566359045",
  appId: "1:124566359045:web:0591515cc1013fbad5206c",
  measurementId: "G-SV3E6PVJDC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export default app;
export { db };
export { storage };
export const auth = getAuth(app);
