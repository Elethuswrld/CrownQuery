'use server'

import { auth } from '@/lib/firebase';
import { firestore } from '@/lib/firebase-admin';
import { revalidatePath } from 'next/cache';

export async function saveQuizResults(answers: string[]) {
  const user = auth.currentUser;

  if (!user) {
    throw new Error('You must be logged in to save your quiz results.');
  }

  await firestore.collection('quizResults').doc(user.uid).set({
    answers,
    createdAt: new Date(),
  });

  revalidatePath('/profile');
}

export async function saveProduct(productId: string, userId: string) {
  const savedProductRef = firestore.collection('savedProducts').doc(`${userId}_${productId}`);

  const doc = await savedProductRef.get();

  if (doc.exists) {
    await savedProductRef.delete();
  } else {
    await savedProductRef.set({
      userId,
      productId,
      createdAt: new Date(),
    });
  }

  revalidatePath('/profile');
  revalidatePath('/catalog');
}
