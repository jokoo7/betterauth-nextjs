import { Loader2 } from 'lucide-react';
import React from 'react';
import { Button } from './ui/button';

interface LoadingButtonProps extends React.ComponentProps<typeof Button> {
  loading: boolean;
}

export default function LoadingButton({
  loading,
  disabled,
  children,
  ...props
}: LoadingButtonProps) {
  return (
    <Button disabled={loading || disabled} {...props}>
      {loading ? <Loader2 className="animate-spin" /> : children}
    </Button>
  );
}
