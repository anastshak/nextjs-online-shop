import { Spinner } from '@/components/ui/spinner';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      hello <Spinner className="size-10 text-green-600" />
    </div>
  );
}
