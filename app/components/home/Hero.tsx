'use client'

import Link from 'next/link';
import { Button } from '@/app/components/ui/button';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-blush-pink to-lavender-mist h-[80vh] flex items-center justify-center text-center text-white bg-noise">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-7xl font-montserrat leading-tight">
                <span className="block">Style Starts</span>
                <span className="block text-gold">with a Question.</span>
            </h1>
            <p className="mt-6 max-w-lg mx-auto text-xl sm:max-w-3xl font-inter">
                Discover your perfect crown with our personalized style quiz and curated collection of premium wigs.
            </p>
            <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/catalog" passHref>
                    <Button 
                        size="lg" 
                        className="w-full sm:w-auto bg-gold text-gray-900 hover:bg-gold/90 transition-all duration-300 ease-in-out transform hover:scale-105 rounded-full shadow-lg font-semibold text-lg px-8 py-4"
                    >
                        Browse Wigs
                    </Button>
                </Link>
                <Link href="/style-quiz" passHref>
                    <Button 
                        size="lg" 
                        variant="outline" 
                        className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300 ease-in-out transform hover:scale-105 rounded-full shadow-lg font-semibold text-lg px-8 py-4"
                    >
                        Start Your Crown Journey
                    </Button>
                </Link>
            </div>
        </div>
    </div>
  );
}
