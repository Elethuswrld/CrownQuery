export interface Product {
    id: string;
    name: string;
    style: string;
    price: string;
    imageUrl: string;
}

export const products: Product[] = [
    {
        id: '1',
        name: 'The Aurelia Crown',
        style: 'Modern',
        price: '$125',
        imageUrl: '/images/modern.jpg',
    },
    {
        id: '2',
        name: 'The Seraphina Crown',
        style: 'Vintage',
        price: '$200',
        imageUrl: '/images/vintage.jpg',
    },
    {
        id: '3',
        name: 'The Ophelia Crown',
        style: 'Bohemian',
        price: '$95',
        imageUrl: '/images/bohemian.jpg',
    },
    {
        id: '4',
        name: 'The Flora Crown',
        style: 'Floral',
        price: '$150',
        imageUrl: '/images/floral.jpg',
    },
];
