
import admin from "firebase-admin";
import serviceAccount from "./firebase-admin.json";

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: `https://crownquery-app-2.firebaseio.com`
    });
  } catch (error) {
    console.error("Firebase admin initialization error", error.stack);
  }
}

export default admin.firestore();
