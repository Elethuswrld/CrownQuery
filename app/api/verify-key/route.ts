import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebase/server';

export async function GET(req: NextRequest) {
  try {
    // The purpose of this route is to confirm that the Firebase Admin SDK
    // has been initialized correctly. We can do this by performing a simple
    // read operation from the database.
    await db.collection('users').limit(1).get();
    return NextResponse.json({ message: 'Firebase Admin SDK initialized successfully' });
  } catch (error) {
    console.error('Error verifying Firebase Admin SDK initialization:', error);
    return NextResponse.json({ error: 'Error initializing Firebase Admin SDK' }, { status: 500 });
  }
}
