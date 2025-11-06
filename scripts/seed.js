import { db } from '../src/lib/firebase';
import { collection, addDoc } from 'firebase/firestore';

const products = [
  {
    id: 1,
    name: 'Lavender Dream Wig',
    price: 79.99,
    image: 'https://via.placeholder.com/400x400.png/D8B4E2/FFFFFF?text=Wig1',
  },
  {
    id: 2,
    name: 'Pink Princess Wig',
    price: 89.99,
    image: 'https://via.placeholder.com/400x400.png/F8E1F4/FFFFFF?text=Wig2',
  },
  {
    id: 3,
    name: 'Ocean Breeze Wig',
    price: 74.99,
    image: 'https://via.placeholder.com/400x400.png/A855F7/FFFFFF?text=Wig3',
  },
  {
    id: 4,
    name: 'Sunset Kiss Wig',
    price: 94.99,
    image: 'https://via.placeholder.com/400x400.png/EC4899/FFFFFF?text=Wig4',
  },
    {
    id: 5,
    name: 'Enchanted Forest Wig',
    price: 84.99,
    image: 'https://via.placeholder.com/400x400.png/D8B4E2/FFFFFF?text=Wig5',
  },
  {
    id: 6,
    name: 'Ruby Red Wig',
    price: 69.99,
    image: 'https://via.placeholder.com/400x400.png/F8E1F4/FFFFFF?text=Wig6',
  },
];

async function seedDatabase() {
  const productsCollection = collection(db, 'products');
  for (const product of products) {
    try {
      await addDoc(productsCollection, product);
      console.log(`Added product: ${product.name}`);
    } catch (error) {
      console.error(`Error adding product: ${product.name}`, error);
    }
  }
}

seedDatabase();
