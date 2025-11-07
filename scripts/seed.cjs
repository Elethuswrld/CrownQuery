const admin = require('firebase-admin');
const { products } = require('./products.cjs');

// Initialize Firebase Admin SDK
const serviceAccount = require('../lib/firebase-admin.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://crownquery-app-2.firebaseio.com"
});

const db = admin.firestore();

async function seedDatabase() {
  const productsCollection = db.collection('products');

  for (const product of products) {
    try {
      await productsCollection.doc(String(product.id)).set(product);
      console.log(`Product ${product.id} seeded successfully`);
    } catch (error) {
      console.error(`Error seeding product ${product.id}:`, error);
    }
  }
  process.exit(0)
}

seedDatabase();
