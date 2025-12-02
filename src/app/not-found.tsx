import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col gap-2 min-h-screen items-center justify-center">
      <h2 className="text-2xl">Not Found</h2>
      <p>Could not find requested resource</p>
      <Link
        href="/"
        className="px-6 py-3 bg-green-700 hover:bg-green-800 text-white font-medium rounded-lg"
      >
        Return Home
      </Link>
    </div>
  );
}
