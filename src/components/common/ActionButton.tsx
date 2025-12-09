'use client';

import type { ReactNode } from 'react';

import { Button } from '@/components/ui/button';

interface ActionIconButtonProps {
  onClick: () => void;
  active?: boolean;
  activeClassName?: string;
  children: ReactNode;
}

export default function ActionIconButton({
  onClick,
  active,
  activeClassName = '',
  children,
}: ActionIconButtonProps) {
  return (
    <Button
      size="icon"
      variant="secondary"
      className="rounded-full bg-white/90 hover:bg-white cursor-pointer"
      onClick={onClick}
    >
      <span className={active ? activeClassName : ''}>{children}</span>
    </Button>
  );
}
