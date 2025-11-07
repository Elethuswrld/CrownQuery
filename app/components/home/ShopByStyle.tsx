'use client'

import Image from 'next/image';

const styles = [
    {
        name: 'Modern',
        imageUrl: '/images/modern.jpg',
        href: '#'
    },
    {
        name: 'Vintage',
        imageUrl: '/images/vintage.jpg',
        href: '#'
    },
    {
        name: 'Bohemian',
        imageUrl: '/images/bohemian.jpg',
        href: '#'
    },
    {
        name: 'Floral',
        imageUrl: '/images/floral.jpg',
        href: '#'
    },

]

export default function ShopByStyle() {
    return (
        <div className="bg-background py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl text-center font-montserrat">Shop by Style</h2>
                <div className="mt-10 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 sm:gap-x-6 lg:gap-x-8">
                    {styles.map((style) => (
                        <a key={style.name} href={style.href} className="group block">
                            <div className="relative h-96 w-full overflow-hidden rounded-lg">
                                <Image src={style.imageUrl} alt={style.name} className="object-cover object-center" fill />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                                <div className="absolute inset-x-0 bottom-6 text-center">
                                    <h3 className="text-xl font-bold text-white group-hover:text-gold transition-colors">{style.name}</h3>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}
