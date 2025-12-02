import { Spinner } from '@/components/ui/spinner';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      hello <Spinner className="size-6 text-green-500" />
    </div>
  );
}
