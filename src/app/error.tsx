'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col gap-2 mt-[20%] items-center justify-center text-xl">
      <h2>Something went wrong!</h2>
      <button
        onClick={() => reset()}
        className="mt-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg cursor-pointer"
      >
        Try again
      </button>
    </div>
  );
}
