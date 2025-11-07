
import admin from '@/lib/firebaseAdmin';

async function getCrownQueryData() {
  const db = admin;
  const snapshot = await db.collection('crownQuery').get();
  return snapshot.docs.map(doc => doc.data());
}

export default async function HomePage() {
  const data = await getCrownQueryData();

  return (
    <main className="bg-white p-8">
      <h1 className="text-2xl font-bold mb-4">CrownQuery</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}
