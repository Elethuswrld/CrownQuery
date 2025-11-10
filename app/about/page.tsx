
import { Crown, Heart, Zap } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
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
            <Crown className="mx-auto h-16 w-auto text-gold" />
            <h1 className="mt-6 font-montserrat text-4xl font-bold tracking-tight text-primary sm:text-6xl">
              About CrownQuery
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary">
              We believe that everyone deserves to feel like royalty. Our mission is to help you find the perfect wig that embodies your unique style and personality.
            </p>
          </div>

          <div className="mt-20 text-left space-y-12">
            <div>
              <h2 className="font-montserrat text-3xl font-bold text-primary">Our Story</h2>
              <p className="mt-4 text-lg text-secondary">
                CrownQuery was born from a simple idea: to make the process of finding the perfect wig a fun and empowering experience. We were tired of the endless scrolling and the uncertainty of online shopping. We wanted to create a more personalized and engaging way for people to discover wigs that they would love.
              </p>
              <p className="mt-4 text-lg text-secondary">
                That&apos;s when we came up with the idea for our <Link href="/style-quiz" className="text-accent hover:underline">Style Quiz</Link>. By answering a few simple questions, our algorithm can recommend a curated selection of wigs that are tailored to your preferences. We&apos;re passionate about helping you find a wig that not only looks great but also makes you feel confident and beautiful.
              </p>
            </div>

            <div>
              <h2 className="font-montserrat text-3xl font-bold text-primary">Our Values</h2>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="flex flex-col items-center text-center">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-accent/20 text-accent shadow-glow">
                      <Zap className="h-8 w-8" />
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-xl font-bold text-primary">Empowerment</h3>
                    <p className="mt-2 text-base text-secondary">We want to empower you to express your unique style and feel confident in your own skin.</p>
                  </div>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-highlight/20 text-highlight shadow-glow">
                      <Heart className="h-8 w-8" />
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-xl font-bold text-primary">Individuality</h3>
                    <p className="mt-2 text-base text-secondary">We celebrate individuality and believe that everyone has a unique story to tell.</p>
                  </div>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gold/20 text-gold shadow-glow">
                      <Crown className="h-8 w-8" />
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-xl font-bold text-primary">Quality</h3>
                    <p className="mt-2 text-base text-secondary">We are committed to providing our customers with high-quality products and an exceptional experience.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
