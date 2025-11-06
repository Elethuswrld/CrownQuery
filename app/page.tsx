
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ProductCard from '@/app/components/ProductCard';
import { products } from '@/app/lib/products';

export default function Home() {
  return (
    <div className="bg-background text-primary min-h-screen font-inter bg-noise">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-highlight to-accent opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="font-montserrat text-4xl font-bold tracking-tight text-primary sm:text-6xl flex items-center justify-center">
              <span className="text-gold">♛</span> CrownQuery
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary">
              Discover the wig that expresses your unique style. Take our quiz and let us find the perfect match for you.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/quiz"
                className="rounded-md bg-accent px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-accent/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent shadow-glow transition-all hover:shadow-deep-glow"
              >
                Take the Style Quiz <ArrowRight className="inline-block w-4 h-4 ml-2" />
              </Link>
              <Link href="/catalog" className="text-sm font-semibold leading-6 text-primary">
                Explore Products <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl text-center font-montserrat">Featured Styles</h2>
          <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
