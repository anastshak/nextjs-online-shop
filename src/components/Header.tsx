'use client';

import { Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Heart, ShoppingBag, User } from 'lucide-react';

import SearchBar from './SearchBar';

export default function Header() {
  return (
    <header className="w-full h-[88px] px-12 bg-header text-white flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-9">
        <Link href="/" className="flex items-center gap-3 font-bold uppercase tracking-tight">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
          <span className="leading-4 text-sm">
            Online <br /> Market
          </span>
        </Link>

        <Suspense fallback={<p>Loading...</p>}>
          <SearchBar />
        </Suspense>
      </div>

      {/* later add LOGIN/SIGNUP button for unauthorized user */}
      {/* these icons only for authorized user */}
      <div className=" flex items-center gap-4">
        <div className="flex items-center gap-1">
          <Heart className="h-5 w-5" />
          <span className="text-xs">0</span>
        </div>

        <div className="flex items-center gap-1">
          <ShoppingBag className="h-5 w-5" />
          <span className="text-xs">3</span>
        </div>

        <div className="flex items-center gap-1">
          <User className="h-5 w-5" />
        </div>
      </div>
    </header>
  );
}
