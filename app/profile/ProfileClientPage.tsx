'use client'

import { useAuth } from '@/app/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { Crown, User, Star, Heart } from 'lucide-react'
import { Product } from '@/app/lib/products'
import ProductCard from '@/app/components/ProductCard'

interface ProfileClientPageProps {
    quizResults: string[] | null;
    savedProducts: Product[];
}

export default function ProfileClientPage({ quizResults, savedProducts }: ProfileClientPageProps) {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (user === null) {
      router.push('/login')
    }
  }, [user, router])

  if (!user) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-background bg-noise">
            <p className="text-primary text-lg">Loading...</p>
        </div>
    )
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
        <div className="mx-auto max-w-4xl py-24 sm:py-32">
          <div className="text-center">
            <User className="mx-auto h-16 w-auto text-gold" />
            <h1 className="mt-6 font-montserrat text-4xl font-bold tracking-tight text-primary sm:text-6xl">
              Your Profile
            </h1>
            <div className="mt-10 p-8 bg-muted/30 rounded-lg shadow-lg backdrop-blur-sm border border-white/10">
                <p className="text-lg leading-8 text-secondary">
                    Welcome, <span className="font-bold text-gold">{user.email}</span>!
                </p>
                {quizResults && (
                    <div className="mt-8 text-left">
                        <h2 className="font-montserrat text-2xl font-bold text-primary mb-4">Your Quiz Results</h2>
                        <ul className="space-y-4">
                            {quizResults.map((answer, index) => (
                                <li key={index} className="flex items-start">
                                    <Star className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0" />
                                    <span className="text-secondary">{answer}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                <div className="mt-12 text-left">
                    <h2 className="font-montserrat text-2xl font-bold text-primary mb-4 flex items-center"><Heart className="h-6 w-6 text-red-500 mr-3" />Your Saved Products</h2>
                    {savedProducts.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {savedProducts.map(product => (
                                <ProductCard key={product.id} product={product} isSaved={true} />
                            ))}
                        </div>
                    ) : (
                        <p className="text-secondary">You haven&apos;t saved any products yet. <a href="/catalog" className="font-bold text-accent hover:underline">Browse our catalog!</a></p>
                    )}
                </div>
                 <div className="mt-8 flex items-center justify-center gap-x-6">
                    <Crown className="h-6 w-6 text-accent"/>
                    <p className="text-md text-accent font-semibold">Stay tuned for more royal treatment!</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
