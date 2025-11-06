'use client'

import { useAuth } from '@/app/AuthContext';
import withAuth from '@/app/components/withAuth';
import { useState, useEffect } from 'react';
import { updateProfile, sendPasswordResetEmail, deleteUser } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { UserCircleIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

function ProfilePage() {
  const { user } = useAuth();
  const router = useRouter();
  const [displayName, setDisplayName] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [resetEmailSent, setResetEmailSent] = useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);

  useEffect(() => {
    if (user) {
      setDisplayName(user.displayName || '');
      setPhotoURL(user.photoURL || '');
    }
  }, [user]);

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    setError('');

    if (auth.currentUser) {
      try {
        await updateProfile(auth.currentUser, { displayName, photoURL });
        setMessage('Profile updated successfully!');
      } catch (err: any) {
        setError(err.message);
      }
    }
  };

  const handlePasswordReset = async () => {
    if (user && user.email) {
        try {
            await sendPasswordResetEmail(auth, user.email);
            setResetEmailSent(true);
            setMessage('A password reset email has been sent.');
        } catch (err: any) {
            setError(err.message);
        }
    }
  };

  const handleDeleteAccount = async () => {
    if (auth.currentUser) {
        try {
            await deleteUser(auth.currentUser);
            router.push('/');
        } catch (err: any) {
            setError(err.message);
        }
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
        <div className="mx-auto max-w-2xl py-24 sm:py-32">
          <div className="text-center">
            <h1 className="font-montserrat text-4xl font-bold tracking-tight text-primary sm:text-6xl">
              Your Profile
            </h1>
            <div className="mt-10 flex flex-col items-center">
              {photoURL ? (
                <Image src={photoURL} alt="Profile" width={96} height={96} className="h-24 w-24 rounded-full object-cover" />
              ) : (
                <UserCircleIcon className="h-24 w-24 text-secondary" />
              )}
              <p className="mt-4 text-lg font-semibold leading-8 text-primary">
                {displayName || 'No display name'}
              </p>
              <p className="text-md leading-8 text-secondary">
                {user?.email}
              </p>
            </div>
            <form onSubmit={handleUpdateProfile} className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <div className="space-y-6">
                <div>
                  <label htmlFor="displayName" className="block text-sm font-medium leading-6 text-primary text-left">
                    Display Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="displayName"
                      name="displayName"
                      type="text"
                      value={displayName}
                      onChange={(e) => setDisplayName(e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 text-primary bg-background/80 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="photoURL" className="block text-sm font-medium leading-6 text-primary text-left">
                    Photo URL
                  </label>
                  <div className="mt-2">
                    <input
                      id="photoURL"
                      name="photoURL"
                      type="text"
                      value={photoURL}
                      onChange={(e) => setPhotoURL(e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 text-primary bg-background/80 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-accent/80 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent shadow-glow transition-all hover:shadow-deep-glow"
                  >
                    Update Profile
                  </button>
                </div>
                {message && <p className="text-center text-sm text-green-500">{message}</p>}
                {error && <p className="text-center text-sm text-red-500">{error}</p>}
              </div>
            </form>
            <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
                <button
                    onClick={handlePasswordReset}
                    className="flex w-full justify-center rounded-md bg-secondary/80 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary shadow-glow transition-all hover:shadow-deep-glow"
                >
                    Change Password
                </button>
            </div>
            <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
                <button
                    onClick={() => setDeleteConfirmation(true)}
                    className="flex w-full justify-center rounded-md bg-red-600/80 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 shadow-glow transition-all hover:shadow-deep-glow"
                >
                    Delete Account
                </button>
            </div>

            {deleteConfirmation && (
                <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                  <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                  </div>
                  <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                  <div className="inline-block align-bottom bg-background rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div className="bg-background px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                      <div className="sm:flex sm:items-start">
                        <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                          <svg className="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                        </div>
                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                          <h3 className="text-lg leading-6 font-medium text-primary" id="modal-title">
                            Delete account
                          </h3>
                          <div className="mt-2">
                            <p className="text-sm text-secondary">
                              Are you sure you want to delete your account? All of your data will be permanently removed. This action cannot be undone.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-background px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                      <button
                        type="button"
                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={handleDeleteAccount}
                      >
                        Delete
                      </button>
                      <button
                        type="button"
                        className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={() => setDeleteConfirmation(false)}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default withAuth(ProfilePage);
