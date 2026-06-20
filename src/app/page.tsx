import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex min-h-svh w-full flex-col items-center justify-center px-4">
      <h1 className="text-center text-3xl font-semibold sm:text-4xl">Better-Auth Project</h1>
      <p className="mt-3 max-w-md text-center text-base text-balance text-muted-foreground sm:text-lg">
        Project to learn how to handle authentication in Next.js using Better-Auth
      </p>
      <div className="mx-auto mt-6 flex max-w-sm flex-col gap-3 sm:flex-row sm:justify-center">
        <Button asChild className="shadow-xs">
          <Link href="/dashboard">Go to Dashboard</Link>
        </Button>
        <Button asChild variant="outline" className="shadow-xs">
          <Link href="/sign-in">Sign In</Link>
        </Button>
      </div>
    </div>
  );
}
