import { initializeServerApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { cookies } from 'next/headers';
import { firebaseConfig } from '@/lib/firebase';

export function auth() {
    const app = initializeServerApp(firebaseConfig, {
        auth: {
            persistence: {
                async getPersistence() {
                    const session = cookies().get('session')?.value;
                    return {
                        type: 'custom',
                        async _get() {
                            return session ? JSON.parse(session) : null;
                        },
                        async _set(value) {
                            cookies().set('session', JSON.stringify(value));
                        },
                        async _remove() {
                            cookies().delete('session');
                        }
                    }
                }
            }
        }
    });

    return getAuth(app);
}
