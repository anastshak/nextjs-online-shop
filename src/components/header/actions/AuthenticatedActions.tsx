import Link from 'next/link';

import { Heart, ShoppingBag } from 'lucide-react';

import UserDropdown from './Dropdown';

const userLinks = [
  { href: '/favorites', icon: Heart },
  { href: '/cart', icon: ShoppingBag },
];

export default function AuthenticatedActions() {
  return (
    <>
      {userLinks.map(({ href, icon: Icon }) => (
        <Link key={href} href={href} className="hidden md:flex items-center gap-1 hover:opacity-80">
          <Icon className="h-5 w-5" />
          <span className="text-xs">0</span>
        </Link>
      ))}

      <UserDropdown />
    </>
  );
}
