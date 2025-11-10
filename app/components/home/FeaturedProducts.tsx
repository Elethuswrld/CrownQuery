'use client'

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { Product } from "@/app/lib/products";
import ProductCard from "@/app/components/ProductCard";

interface FeaturedProductsProps {
    products: Product[];
}

export default function FeaturedProducts({ products }: FeaturedProductsProps) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

  return (
    <div className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-extrabold tracking-tight text-foreground font-montserrat">Featured Crowns</h2>
                <p className="mt-4 text-lg text-muted-foreground">Handpicked for royalty, designed for you.</p>
            </div>
            <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                    {products.map((product) => (
                        <div className="embla__slide" key={product.id}>
                            <ProductCard product={product} isSaved={false} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}
