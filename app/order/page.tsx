'use client'

import { useState } from 'react';
import { useAuth } from '@/app/AuthContext';
import { db } from '@/lib/firebase/client'; // Assuming you have a client-side firebase config
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function OrderPage() {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    fullName: '' as string,
    address: '' as string,
    phone: '' as string,
    email: '' as string,
    notes: '' as string,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!user) {
      setError('You must be logged in to place an order.');
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await addDoc(collection(db, 'orders'), {
        ...formData,
        userId: user.uid,
        createdAt: serverTimestamp(),
        status: 'pending',
      });
      setSuccess(true);
      setFormData({
        fullName: '' as string,
        address: '' as string,
        phone: '' as string,
        email: '' as string,
        notes: '' as string,
      });
    } catch (err) {
      setError('Something went wrong. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-background text-primary min-h-screen font-inter bg-noise">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-24 sm:py-32">
          <div className="text-center">
            <h1 className="font-montserrat text-4xl font-bold tracking-tight text-primary sm:text-6xl">
              Place Your Order
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary">
              Please provide your details below so we can process your order.
            </p>
          </div>

          <div className="mt-20">
            {success && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6" role="alert">
                <strong className="font-bold">Success!</strong>
                <span className="block sm:inline"> Your order has been placed. We will contact you shortly to finalize the details.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm shadow-lg rounded-xl p-8 space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-primary">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-accent focus:border-accent sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-primary">Delivery Address</label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-accent focus:border-accent sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-primary">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-accent focus:border-accent sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary">Email Address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-accent focus:border-accent sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-primary">Special Instructions (optional)</label>
                <textarea
                  name="notes"
                  id="notes"
                  rows={4}
                  value={formData.notes}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-accent focus:border-accent sm:text-sm"
                ></textarea>
              </div>

              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                  <strong className="font-bold">Error!</strong>
                  <span className="block sm:inline"> {error}</span>
                </div>
              )}

              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-accent hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent disabled:opacity-50"
                >
                  {loading ? 'Placing Order...' : 'Confirm Order'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
