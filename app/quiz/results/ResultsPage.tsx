'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import ProductCard from '@/app/components/ProductCard';
import { products, Product } from '@/app/lib/products';
import { ArrowLeft, RefreshCw } from 'lucide-react';

const answerToStyleMap: { [key: string]: string } = {
    // Question 1
    "Long and flowing": "A",
    "Short and sassy": "B",
    "Elegant updos": "C",
    "Braids or twists": "D",
    // Question 2
    "Natural and earthy tones": "A",
    "Bold and vibrant colors": "B",
    "Soft pastels": "C",
    "Classic black and white": "D",
    // Question 3
    "Relaxing at a coffee shop": "A",
    "Out on an adventure": "B",
    "Attending a fancy event": "C",
    "Trying a new creative project": "D",
};


export default function ResultsPage() {
  const searchParams = useSearchParams();
  const answersParam = searchParams.get('answers');
  let answers: string[] = [];
  if (answersParam) {
    try {
      answers = JSON.parse(decodeURIComponent(answersParam));
    } catch (e) {
      console.error("Failed to parse answers:", e);
    }
  }

  const getRecommendedProduct = (): Product => {
    if (!answers || answers.length === 0) return products[0];

    const answerCounts: { [key: string]: number } = {
      A: 0,
      B: 0,
      C: 0,
      D: 0,
    };

    answers.forEach((answer) => {
        const style = answerToStyleMap[answer];
        if (style) {
          answerCounts[style]++;
        }
    });

    const recommendedStyle = Object.keys(answerCounts).reduce((a, b) =>
      answerCounts[a] > answerCounts[b] ? a : b
    ) || 'A';

    return products.find((product) => product.style === recommendedStyle) || products[0];
  };

  const recommendedProduct = getRecommendedProduct();

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
            <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-40">
                <div className="text-center mb-12">
                  <h1 className="font-montserrat text-4xl font-bold tracking-tight text-primary sm:text-6xl">
                    Your Style Profile
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-secondary">
                    Based on your answers, we&apos;ve found the perfect style for you!
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                    <div className="bg-muted/30 rounded-2xl shadow-lifted p-8 backdrop-blur-sm order-2 md:order-1">
                        <h2 className="font-montserrat text-2xl font-bold text-primary mb-6">Your Choices</h2>
                        <ul className="space-y-4">
                        {answers?.map((answer, index) => (
                            <li key={index} className="font-inter text-md text-secondary flex items-center">
                                <span className="text-accent mr-3 font-bold">{`Q${index + 1}`}</span>
                                {answer}
                            </li>
                        ))}
                        </ul>
                    </div>
                    <div className="order-1 md:order-2">
                        <ProductCard product={recommendedProduct} />
                    </div>
                </div>

                 <div className="mt-16 flex items-center justify-center gap-x-6">
                    <Link
                        href="/quiz"
                        className="rounded-md bg-accent/80 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent shadow-glow transition-all hover:shadow-deep-glow flex items-center"
                    >
                        <RefreshCw className="inline-block w-4 h-4 mr-2" />
                        Retake Quiz
                    </Link>
                    <Link href="/catalog" className="text-sm font-semibold leading-6 text-primary hover:text-accent">
                        Explore Catalog <span aria-hidden="true">→</span>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  );
}
