'use client'

import { useState, useEffect, useMemo } from 'react';
import ProductCard from '@/app/components/ProductCard';
import { db } from "@/lib/firebase/client"; // Using client-side db
import { Product } from '@/app/lib/products';
import { collection, getDocs } from "firebase/firestore";
import { Button } from '@/app/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';
import { Sheet, SheetTrigger, SheetContent } from '@/app/components/ui/sheet';
import { Filter } from 'lucide-react';
import { ProductForm } from '@/app/components/ProductForm';

const styles = ['Modern', 'Vintage', 'Bohemian', 'Floral'];

export default function Catalog() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [savedProducts, setSavedProducts] = useState<string[]>([]);
    const [styleFilters, setStyleFilters] = useState<string[]>([]);
    const [sortOption, setSortOption] = useState('newest');

    useEffect(() => {
        async function fetchProducts() {
            try {
                const productsSnapshot = await getDocs(collection(db, "products"));
                const productsData: Product[] = productsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Product));
                setProducts(productsData);
            } catch (error) {
                console.error("Error fetching products: ", error);
            }
            setLoading(false);
        }
        fetchProducts();
    }, []);

    const handleStyleFilterChange = (style: string) => {
        setStyleFilters(prev => 
            prev.includes(style) ? prev.filter(s => s !== style) : [...prev, style]
        );
    };

    const filteredAndSortedProducts = useMemo(() => {
        let filtered = products;

        if (styleFilters.length > 0) {
            filtered = filtered.filter(p => styleFilters.some(s => p.tags?.includes(s.toLowerCase())));
        }

        switch (sortOption) {
            case 'price-asc':
                filtered.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                filtered.sort((a, b) => b.price - a.price);
                break;
            case 'newest':
            default:
                // Assuming products have a created_at field. If not, this won't work.
                // filtered.sort((a, b) => b.createdAt - a.createdAt);
                break;
        }

        return filtered;
    }, [products, styleFilters, sortOption]);

    const FilterSidebar = () => (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-semibold mb-4">Style</h3>
                <div className="space-y-2">
                    {styles.map(style => (
                        <div key={style} className="flex items-center">
                            <input 
                                type="checkbox" 
                                id={style} 
                                checked={styleFilters.includes(style)}
                                onChange={() => handleStyleFilterChange(style)}
                                className="h-4 w-4 rounded border-gray-300 text-gold focus:ring-gold"
                            />
                            <label htmlFor={style} className="ml-3 text-sm text-gray-600">{style}</label>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl font-montserrat">Explore Our Collection</h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">Every crown tells a story. Find the one that speaks to you.</p>
                </div>

                <div className="flex justify-between items-center mb-8">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline" className="md:hidden">
                                <Filter className="mr-2 h-4 w-4" /> Filters
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left">
                            <div className="p-6">
                                <FilterSidebar />
                            </div>
                        </SheetContent>
                    </Sheet>
                    <div className="hidden md:block">
                        {/* Placeholder for future top-level filters */}
                    </div>
                    <Select onValueChange={setSortOption} defaultValue={sortOption}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Sort by" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="newest">Newest</SelectItem>
                            <SelectItem value="price-asc">Price: Low to High</SelectItem>
                            <SelectItem value="price-desc">Price: High to Low</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    <aside className="hidden lg:block lg:col-span-1">
                         <FilterSidebar />
                    </aside>

                    <main className="lg:col-span-3">
                        {loading ? (
                            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                                {[...Array(6)].map((_, i) => (
                                    <div key={i} className="animate-pulse">
                                        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8"></div>
                                        <div className="mt-4 h-4 bg-gray-200 rounded w-3/4"></div>
                                        <div className="mt-2 h-4 bg-gray-200 rounded w-1/2"></div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                                {filteredAndSortedProducts.map((product) => (
                                    <ProductCard key={product.id} product={product} isSaved={savedProducts.includes(product.id)} />
                                ))}
                            </div>
                        )}
                    </main>
                </div>
                 <div className="mt-24">
                    <div className="bg-gray-50 rounded-lg p-8 shadow-inner">
                        <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl text-center font-montserrat">Add a New Crown</h3>
                        <p className="text-center text-gray-600 mt-2 mb-8">Contribute to our growing collection of fine crowns.</p>
                        <ProductForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
