import Image from 'next/image';
import { Heart, ShoppingCart } from 'lucide-react';
import { Product } from '@/app/lib/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative">
       <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-muted lg:aspect-none group-hover:opacity-75 lg:h-80">
        <Image
            src={product.imageUrl}
            alt={product.name}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full" 
            width={500}
            height={500}        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-primary">
            <a href="#">
              <span aria-hidden="true" className="absolute inset-0" />
              {product.name}
            </a>
          </h3>
          <p className="mt-1 text-sm text-secondary">{product.style}</p>
        </div>
        <p className="text-sm font-medium text-primary">{product.price}</p>
      </div>
    </div>
  );
}
