'use client'

import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Mail } from 'lucide-react';

export default function Newsletter() {
    return (
        <div className="bg-background py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="relative isolate overflow-hidden bg-card px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
                    <div className="mx-auto max-w-2xl">
                        <Mail className="mx-auto h-12 w-12 text-muted-foreground" />
                        <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-montserrat">
                            Join Our Royal Court
                        </h2>
                        <p className="mt-4 text-lg leading-8 text-muted-foreground">
                            Be the first to know about new collections, exclusive events, and special offers.
                        </p>
                        <form className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 w-full sm:max-w-md px-4 py-3 text-base text-foreground bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-crown-gold focus:border-transparent"
                            />
                            <Button
                                type="submit"
                                className="w-full sm:w-auto bg-crown-gold text-crown-black font-bold text-base px-8 py-3 hover:bg-crown-gold/90 transition-transform duration-300 transform hover:scale-105 shadow-lg"
                            >
                                Subscribe
                            </Button>
                        </form>
                    </div>
                    <div className="absolute -top-24 -right-24 md:-top-28 md:-right-48 lg:-top-16 lg:-right-32 xl:-top-24 xl:-right-24 -z-10 transform-gpu blur-3xl">
                        <div
                            className="aspect-[1/1] w-[40.125rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

