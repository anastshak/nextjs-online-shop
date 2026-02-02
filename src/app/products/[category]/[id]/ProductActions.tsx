'use client';

import { useState } from 'react';

import { Heart, HeartMinus, ShoppingBag, Trash2 } from 'lucide-react';

import ActionButton from '@/components/common/ActionButton';

import { useAuthStore } from '@/lib/stores/auth.store';
import { useFavoritesStore } from '@/lib/stores/favorites.store';

export default function ProductActions({ productId }: { productId: number }) {
  const { isAuthenticated } = useAuthStore();

  const isFavorite = useFavoritesStore((s) => s.isFavorite(productId));
  const toggleFavorite = useFavoritesStore((s) => s.toggleFavorite);

  const [isInCart, setIsInCart] = useState(false);

  if (!isAuthenticated) return null;

  return (
    <div className="flex gap-3 pt-4">
      <ActionButton
        active={isFavorite}
        activeClassName="text-red-500"
        onClick={() => toggleFavorite(productId)}
      >
        {isFavorite ? <HeartMinus /> : <Heart />}
        {isFavorite ? 'Unfavorite' : 'Favorite'}
      </ActionButton>

      <ActionButton
        active={isInCart}
        activeClassName="text-green-600"
        onClick={() => setIsInCart((v) => !v)}
      >
        {isInCart ? <Trash2 /> : <ShoppingBag />}
        {isInCart ? 'Remove from cart' : 'Add to cart'}
      </ActionButton>
    </div>
  );
}
