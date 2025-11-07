import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebase/admin';

export async function GET(req: NextRequest) {
  try {
    const usersRef = db.collection('users');
    await usersRef.doc('user1').set({
        name: 'John Doe',
        email: 'john.doe@example.com'
    });
    return NextResponse.json({ message: 'Database seeded successfully' });
  } catch (error) {
    console.error('Error seeding database:', error);
    return NextResponse.json({ error: 'Error seeding database' }, { status: 500 });
  }
}
