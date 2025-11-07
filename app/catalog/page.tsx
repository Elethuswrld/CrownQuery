import ProductCard from '@/app/components/ProductCard';
import { products } from '@/app/lib/products';
import { auth, db } from "@/lib/firebase/admin";

export default async function Catalog() {
    let savedProducts: string[] = [];
    try {
        const user = auth().currentUser;
        if (user) {
            const savedProductsSnapshot = await db.collection('savedProducts').where('userId', '==', user.uid).get();
            savedProducts = savedProductsSnapshot.docs.map(doc => doc.data().productId);
        }
    } catch (error) {
        console.error("Error fetching saved products:", error);
    }

  return (
    <div className="bg-background">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl text-center font-montserrat">Our Products</h2>

        <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} isSaved={savedProducts.includes(product.id)} />
          ))}
        </div>
      </div>
    </div>
  );
}
