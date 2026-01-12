'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Heart, HeartMinus, ShoppingBag, Trash2 } from 'lucide-react';

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

import type { Product } from '@/types/product';

import ActionButton from './common/ActionButton';
import RatingStars from './common/RatingStars';

interface ProductCardProps {
  product: Product;
  showActions?: boolean;
}

export default function ProductCard({ product, showActions = true }: ProductCardProps) {
  const { id, title, price, thumbnail, rating, discountPercentage, category } = product;

  const [isFavorite, setIsFavorite] = useState(false);
  const [isInCart, setIsInCart] = useState(false);

  const hasDiscount = discountPercentage && discountPercentage > 0;
  const oldPrice = hasDiscount ? (price / (1 - discountPercentage / 100)).toFixed(2) : null;

  return (
    <Card
      className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg"
      key={id}
    >
      {hasDiscount && (
        <Badge className="absolute left-3 top-3 z-10 bg-red-600">- {discountPercentage}%</Badge>
      )}

      <div className="relative aspect-square overflow-hidden">
        <Image
          src={thumbnail}
          alt={title}
          fill
          loading="eager"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black/20">
          {showActions && (
            <>
              <ActionButton
                size="icon"
                active={isFavorite}
                activeClassName="text-red-500 fill-red-500"
                className="rounded-full bg-white/90 hover:bg-white"
                onClick={() => setIsFavorite((v) => !v)}
              >
                {isFavorite ? <HeartMinus className="h-4 w-4" /> : <Heart className="h-4 w-4" />}
              </ActionButton>

              <ActionButton
                size="icon"
                active={isInCart}
                activeClassName="text-green-600"
                className="rounded-full bg-white/90 hover:bg-white"
                onClick={() => setIsInCart((v) => !v)}
              >
                {isInCart ? <Trash2 className="h-4 w-4" /> : <ShoppingBag className="h-4 w-4" />}
              </ActionButton>
            </>
          )}
        </div>
      </div>

      <CardHeader className="p-4 pb-2">
        <CardTitle className="line-clamp-1 text-base font-medium">{title}</CardTitle>
      </CardHeader>

      <CardContent className="p-4 pt-0">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold">${price}</span>

              {oldPrice && (
                <span className="text-sm text-muted-foreground line-through">${oldPrice}</span>
              )}
            </div>

            <RatingStars rating={rating} />
          </div>

          <ActionButton
            size="icon"
            active={isInCart}
            activeClassName="text-green-600"
            className="rounded-full bg-white/90 hover:bg-white"
            onClick={() => setIsInCart((v) => !v)}
          >
            {isInCart ? <Trash2 className="h-4 w-4" /> : <ShoppingBag className="h-4 w-4" />}
          </ActionButton>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full" variant="outline" size="sm">
          <Link href={`/products/${category}/${id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
