'use client';

import { useState } from 'react';

import { Heart, HeartMinus, ShoppingBag, Trash2 } from 'lucide-react';

import ActionButton from '@/components/common/ActionButton';

import { useAuthStore } from '@/lib/stores/auth.store';

export default function ProductActions() {
  const { isAuthenticated } = useAuthStore();

  const [isFavorite, setIsFavorite] = useState(false);
  const [isInCart, setIsInCart] = useState(false);

  return (
    <>
      {isAuthenticated && (
        <div className="flex gap-3 pt-4">
          <ActionButton
            active={isFavorite}
            activeClassName="text-red-500"
            onClick={() => setIsFavorite((v) => !v)}
          >
            {isFavorite ? <HeartMinus className="h-4 w-4" /> : <Heart className="h-4 w-4" />}

            {isFavorite ? 'Unfavorite' : 'Favorite'}
          </ActionButton>

          <ActionButton
            active={isInCart}
            activeClassName="text-green-600"
            onClick={() => setIsInCart((v) => !v)}
          >
            {isInCart ? <Trash2 className="h-4 w-4" /> : <ShoppingBag className="h-4 w-4" />}
            {isInCart ? 'Remove from cart' : 'Add to cart'}
          </ActionButton>
        </div>
      )}
    </>
  );
}
