export interface Product {
  id: number;
  name: string;
  imageUrl: string;
  style: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Classic Elegance',
    imageUrl: '/placeholder.svg',
    style: 'A',
  },
  {
    id: 2,
    name: 'Sassy Bob',
    imageUrl: '/placeholder.svg',
    style: 'B',
  },
  {
    id: 3,
    name: 'Regal Updo',
    imageUrl: '/placeholder.svg',
    style: 'C',
  },
  {
    id: 4,
    name: 'Intricate Braids',
    imageUrl: '/placeholder.svg',
    style: 'D',
  },
];
