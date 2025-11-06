'use client'

import Image from 'next/image';
import { Heart } from 'lucide-react';
import { Product } from '@/app/lib/products';
import { useAuth } from '@/app/AuthContext';
import { saveProduct } from '@/app/actions';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
  isSaved: boolean;
}

export default function ProductCard({ product, isSaved }: ProductCardProps) {
    const { user } = useAuth();
    const [saved, setSaved] = useState(isSaved);

    const handleSave = async () => {
        if (!user) {
            // Or redirect to login
            alert('Please log in to save products.');
            return;
        }
        setSaved(!saved);
        await saveProduct(product.id.toString(), user.uid);
    }

  return (
    <div className="group relative">
       <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-muted lg:aspect-none group-hover:opacity-75 lg:h-80">
        <Image
            src={product.imageUrl}
            alt={product.name}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full" 
            width={500}
            height={500}        />
        <button onClick={handleSave} className="absolute top-2 right-2 p-2 rounded-full bg-white/50 backdrop-blur-sm transition-colors hover:bg-white/75">
            <Heart className={`w-6 h-6 ${saved ? 'text-red-500 fill-current' : 'text-gray-500'}`} />
        </button>
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
