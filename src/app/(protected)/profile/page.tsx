'use client';

import { useAuthStore } from '@/lib/stores/auth.store';

export default function ProfilePage() {
  const { user } = useAuthStore();

  return (
    <div className="flex items-center justify-center">
      <h1>
        <b>Username: </b>
        {user?.username}
      </h1>
    </div>
  );
}
