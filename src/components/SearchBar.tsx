'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';

import { Search } from 'lucide-react';

import { Input } from '@/components/ui/input';

export default function SearchBar() {
  const router = useRouter();
  const params = useSearchParams();
  const pathname = usePathname();
  const initialQuery = params.get('search') ?? '';
  const [query, setQuery] = useState(initialQuery);

  useEffect(() => {
    const handler = setTimeout(() => {
      const queryValue = query.trim();

      if (pathname !== '/') return;

      if (!queryValue) {
        router.replace('/');
        return;
      }

      router.replace(`/?search=${encodeURIComponent(queryValue)}`);
    }, 400);

    return () => clearTimeout(handler);
  }, [pathname, query, router]);

  return (
    <div className="relative w-60">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/80" />
      <Input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search..."
        className="rounded-3xl bg-white/30 pl-10 text-white placeholder:text-white/70 border-white/30 focus-visible:ring-white/70"
      />
    </div>
  );
}
