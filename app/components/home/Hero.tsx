'use client'

import { Button } from "@/app/components/ui/button";

export default function Hero() {
    return (
        <div className="relative bg-cover bg-center bg-no-repeat py-40 px-4 sm:px-6 lg:px-8" style={{ backgroundImage: "url('/images/hero.jpg')"}}>
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative mx-auto max-w-3xl text-center">
                <h1 className="text-4xl font-montserrat font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                    Find Your <span className="text-gold">Perfect</span> Crown
                </h1>
                <p className="mt-4 text-xl text-white/80">
                    Discover our exquisite collection of handcrafted crowns for every occasion.
                </p>
                <Button size="lg" className="mt-8 bg-gold text-primary-foreground hover:bg-gold/90">Shop Now</Button>
            </div>
        </div>
    )
}
