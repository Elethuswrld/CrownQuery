import { db } from '@/lib/firebase/server'; // Corrected: Import from the reliable singleton module
import Hero from '@/app/components/home/Hero';
import ProductGrid from '@/app/components/home/ProductGrid';
import ShopByStyle from '@/app/components/home/ShopByStyle';
import Newsletter from '@/app/components/home/Newsletter';
import { Product } from '@/app/lib/products';

async function getProductData(): Promise<Product[]> {
  try {
    // Corrected: Query the "products" collection as seeded in the layout
    const snapshot = await db.collection('products').get();

    if (snapshot.empty) {
      console.warn("No products found in the database.");
      return [];
    }

    return snapshot.docs.map((doc, index) => ({
      id: doc.id,
      name: doc.data().name || `Crown ${index + 1}`,
      style: doc.data().style || 'Modern',
      price: doc.data().price || `$${(index + 1) * 50}`,
      imageUrl: doc.data().imageUrl || `https://images.unsplash.com/photo-1599340236131-6551a3557053?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    }));
  } catch (error) {
    console.error("Error fetching product data:", error);
    return []; // Return an empty array on error to prevent crashing the page
  }
}

export default async function HomePage() {
  const products = await getProductData();

  return (
    <main>
      <Hero />
      <ProductGrid products={products} />
      <ShopByStyle />
      <Newsletter />
    </main>
  );
}
