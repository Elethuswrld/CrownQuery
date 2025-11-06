import { auth } from "@/lib/firebase-server";
import { firestore } from "@/lib/firebase-admin";
import ProfileClientPage from "./ProfileClientPage";
import { Product, products } from "@/app/lib/products";

export default async function ProfilePage() {
  let quizResults: string[] | null = null;
  let savedProducts: Product[] = [];
  try {
    const user = await auth().currentUser();
    if (user) {
      const quizResultDoc = await firestore.collection('quizResults').doc(user.uid).get();
      if (quizResultDoc.exists) {
        quizResults = quizResultDoc.data()?.answers || null;
      }

      const savedProductsSnapshot = await firestore.collection('savedProducts').where('userId', '==', user.uid).get();
      const savedProductIds = savedProductsSnapshot.docs.map(doc => doc.data().productId);
      savedProducts = products.filter(p => savedProductIds.includes(p.id.toString()));
    }
  } catch (error) {
    console.error("Error fetching profile data:", error);
  }

  return <ProfileClientPage quizResults={quizResults} savedProducts={savedProducts} />;
}
