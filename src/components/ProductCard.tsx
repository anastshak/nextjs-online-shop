'use client';
import type { Product } from '@/lib/types';
import Image from 'next/image';

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const { id, title, price, thumbnail } = product;
  return (
    <div key={id} className="rounded-xl border p-4 shadow-sm transition hover:shadow-md">
      <Image
        src={thumbnail}
        alt={title}
        width={300}
        height={200}
        loading="eager"
        className="mb-3 w-full rounded-md object-cover"
      />
      <h3 className="font-medium text-lg">{title}</h3>
      <p className="text-base text-muted-foreground">${price}</p>
    </div>
  );
}
