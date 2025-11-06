'use client'

import { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { Crown } from 'lucide-react';
import Link from 'next/link';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('Password reset email sent! Check your inbox.');
      setError(null);
    } catch (error: any) {
      setError(error.message);
      setMessage(null);
    }
  };

  return (
    <div className="bg-background text-primary min-h-screen font-inter bg-noise">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-highlight to-accent opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-40">
          <div className="text-center">
            <Crown className="mx-auto h-12 w-auto text-accent" />
            <h1 className="mt-6 font-montserrat text-4xl font-bold tracking-tight text-primary sm:text-6xl">
              Forgot Your Password?
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary">
              No worries! Enter your email and we&apos;ll send you a reset link.
            </p>
          </div>

          <form onSubmit={handlePasswordReset} className="mt-12 sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-primary">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full rounded-md border-0 bg-white/5 py-2 px-3 text-primary shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              {message && <p className="text-green-500 text-sm">{message}</p>}
              {error && <p className="text-red-500 text-sm">{error}</p>}

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-accent/80 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent shadow-glow transition-all hover:shadow-deep-glow"
                >
                  Send Reset Email
                </button>
              </div>
            </div>

            <p className="mt-10 text-center text-sm text-gray-400">
              Remember your password?{' '}
              <Link href="/login" className="font-semibold leading-6 text-accent hover:text-accent/80">
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
