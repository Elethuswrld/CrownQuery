'use client'

import ProductCard from "@/app/components/ProductCard";
import { Product } from "@/app/lib/products";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";

interface ProductGridProps {
    products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
    return (
        <div className="bg-gray-50 py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 font-montserrat">Featured Crowns</h2>
                    <p className="mt-4 text-lg text-gray-600">Handpicked for royalty, designed for you.</p>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-y-12 gap-x-8 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-10">
                    {products.slice(0, 4).map((product) => (
                        <ProductCard key={product.id} product={product} isSaved={false} />
                    ))}
                </div>
                <div className="text-center mt-16">
                    <Link href="/catalog" passHref>
                        <Button size="lg" variant="outline" className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition-colors duration-300">
                            View All Products
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
