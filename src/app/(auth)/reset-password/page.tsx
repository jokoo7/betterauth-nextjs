import { Metadata } from 'next';
import { ResetPasswordForm } from './reset-password-form';

export const metadata: Metadata = {
  title: 'Reset password',
};

interface ResetPasswordPageProps {
  searchParams: Promise<{ token: string }>;
}

export default async function ResetPasswordpage({ searchParams }: ResetPasswordPageProps) {
  const { token } = await searchParams;

  return (
    <main className="flex min-h-svh items-center justify-center px-4">
      {token ? (
        <ResetPasswordUI />
      ) : (
        <p role="alert" className="text-red-500">
          Token is missing
        </p>
      )}
    </main>
  );
}

function ResetPasswordUI() {
  return (
    <div className="w-full space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-semibold">Reset password</h1>
        <p className="text-muted-foreground">Enter your new password below.</p>
      </div>
      <div className="mx-auto w-full max-w-md">
        <ResetPasswordForm />
      </div>
    </div>
  );
}
