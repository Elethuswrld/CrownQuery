'use client'

import Image from 'next/image';
import Link from 'next/link';

const styles = [
    {
        name: 'Modern',
        imageUrl: '/images/modern.jpg',
        href: '/catalog?style=modern'
    },
    {
        name: 'Vintage',
        imageUrl: '/images/vintage.jpg',
        href: '/catalog?style=vintage'
    },
    {
        name: 'Bohemian',
        imageUrl: '/images/bohemian.jpg',
        href: '/catalog?style=bohemian'
    },
    {
        name: 'Floral',
        imageUrl: '/images/floral.jpg',
        href: '/catalog?style=floral'
    },

]

export default function ShopByStyle() {
    return (
        <div className="bg-background py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold tracking-tight text-foreground font-montserrat">Discover Your Style</h2>
                    <p className="mt-4 text-lg text-muted-foreground">Explore our collections by the aesthetic that inspires you.</p>
                </div>
                <div className="mt-10 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 sm:gap-x-6 lg:gap-x-8">
                    {styles.map((style) => (
                        <Link key={style.name} href={style.href} passHref>
                            <div className="group block relative h-96 w-full overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                                <Image src={style.imageUrl} alt={style.name} className="object-cover object-center w-full h-full" fill />
                                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <h3 className="text-2xl font-bold text-white text-shadow-md group-hover:text-crown-gold transition-colors duration-300 font-montserrat">{style.name}</h3>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
