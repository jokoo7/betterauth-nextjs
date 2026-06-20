import LoadingButton from '@/components/loading-button';
import { Field, FieldGroup } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import React from 'react';

export function ResetPasswordForm({ className, ...props }: React.ComponentProps<'form'>) {
  return (
    <form action="" className={cn('space-y-4', className)} {...props}>
      <FieldGroup>
        <Field>
          <Input id="password" type="password" required />
        </Field>
      </FieldGroup>
      <LoadingButton loading={false} type="submit" className="w-full">
        Reset password
      </LoadingButton>
    </form>
  );
}
