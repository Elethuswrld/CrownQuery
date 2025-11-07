
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDUKKd1IJDpLLeuT1GNwAriA8XNz5BCPlA",
  authDomain: "crownquery-app-2.firebaseapp.com",
  projectId: "crownquery-app-2",
  storageBucket: "crownquery-app-2.firebasestorage.app",
  messagingSenderId: "659249887333",
  appId: "1:659249887333:web:08953e5d03708d7b916e8c"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Initialize and export Firestore
const db = getFirestore(app);

// Initialize and export Authentication
const auth = getAuth(app);

export { db, auth };
