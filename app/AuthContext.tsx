'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { onAuthStateChanged, User, GoogleAuthProvider, signInWithPopup, signOut as firebaseSignOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';

interface AuthContextType {
  user: User | null;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  createUserWithEmail?: (email: string, pass: string) => Promise<any>;
  signInWithEmail?: (email: string, pass: string) => Promise<any>;
}

const AuthContext = createContext<AuthContextType>({ 
    user: null, 
    signInWithGoogle: async () => {},
    signOut: async () => {}
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Error signing in with Google: ", error);
    }
  };

  const createUserWithEmail = (email: string, pass: string) => {
    return createUserWithEmailAndPassword(auth, email, pass)
  }

  const signInWithEmail = (email: string, pass: string) => {
    return signInWithEmailAndPassword(auth, email, pass)
  }

  const signOut = async () => {
    try {
        await firebaseSignOut(auth);
    } catch (error) {
        console.error("Error signing out: ", error);
    }
  }

  return <AuthContext.Provider value={{ user, signInWithGoogle, signOut, createUserWithEmail, signInWithEmail }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
