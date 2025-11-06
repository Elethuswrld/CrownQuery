'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/AuthContext';
import { EmailAuthProvider, reauthenticateWithCredential, updatePassword, deleteUser } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { Crown } from 'lucide-react';

export default function AccountSettingsPage() {
  const { user } = useAuth();
  const router = useRouter();
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);

    if (newPassword !== confirmNewPassword) {
      setError('New passwords do not match.');
      return;
    }

    if (!user) {
        setError('You must be logged in to change your password.');
        return;
    }

    try {
      const credential = EmailAuthProvider.credential(user.email!, currentPassword);
      await reauthenticateWithCredential(user, credential);
      await updatePassword(user, newPassword);
      setSuccessMessage('Password updated successfully!');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmNewPassword('');
    } catch (error: any) {
      setError(error.message);
    }
  };

  const handleDeleteAccount = async () => {
    if (!user) {
        setError('You must be logged in to delete your account.');
        return;
    }

    const confirmation = confirm('Are you sure you want to delete your account? This action is irreversible.');

    if (confirmation) {
        try {
            const credential = EmailAuthProvider.credential(user.email!, currentPassword);
            await reauthenticateWithCredential(user, credential);
            await deleteUser(user);
            router.push('/signup');
        } catch (error: any) {
            setError(`Error deleting account: ${error.message}. You may need to re-authenticate.`);
        }
    }
  }

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
              Account Settings
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary">
              Manage your account settings.
            </p>
          </div>

          <form onSubmit={handleChangePassword} className="mt-12 sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-primary">Change Password</h2>
              <div>
                <label
                  htmlFor="current-password"
                  className="block text-sm font-medium leading-6 text-primary"
                >
                  Current Password
                </label>
                <div className="mt-2">
                  <input
                    id="current-password"
                    name="current-password"
                    type="password"
                    required
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className="block w-full rounded-md border-0 bg-white/5 py-2 px-3 text-primary shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="new-password"
                  className="block text-sm font-medium leading-6 text-primary"
                >
                  New Password
                </label>
                <div className="mt-2">
                  <input
                    id="new-password"
                    name="new-password"
                    type="password"
                    required
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="block w-full rounded-md border-0 bg-white/5 py-2 px-3 text-primary shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="confirm-new-password"
                  className="block text-sm font-medium leading-6 text-primary"
                >
                  Confirm New Password
                </label>
                <div className="mt-2">
                  <input
                    id="confirm-new-password"
                    name="confirm-new-password"
                    type="password"
                    required
                    value={confirmNewPassword}
                    onChange={(e) => setConfirmNewPassword(e.target.value)}
                    className="block w-full rounded-md border-0 bg-white/5 py-2 px-3 text-primary shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              {successMessage && <p className="text-green-500 text-sm">{successMessage}</p>}
              {error && <p className="text-red-500 text-sm">{error}</p>}

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-accent/80 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent shadow-glow transition-all hover:shadow-deep-glow"
                >
                  Change Password
                </button>
              </div>
            </div>
          </form>

          <div className="mt-12 sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-primary">Delete Account</h2>
              <p className="text-secondary text-sm">Once you delete your account, there is no going back. Please be certain.</p>
              <p className="text-secondary text-sm">To delete your account, please enter your current password below to confirm your identity, then click the delete button.</p>
              <div>
                 <label
                  htmlFor="current-password-delete"
                  className="block text-sm font-medium leading-6 text-primary"
                >
                  Current Password
                </label>
                <div className="mt-2">
                  <input
                    id="current-password-delete"
                    name="current-password-delete"
                    type="password"
                    required
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className="block w-full rounded-md border-0 bg-white/5 py-2 px-3 text-primary shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <button
                  onClick={handleDeleteAccount}
                  className="flex w-full justify-center rounded-md bg-red-600/80 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 shadow-glow transition-all hover:shadow-deep-glow"
                >
                  Delete Account
                </button>
              </div>
            </div>
           </div>
        </div>
      </div>
    </div>
  );
}
