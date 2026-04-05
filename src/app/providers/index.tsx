import type { ReactNode } from 'react';

import { SnackbarProvider, ToastProvider } from '@jects/jds';
import { JDSThemeProvider } from '@jects/jds/theme';

interface AppProvidersProps {
  children: ReactNode;
}

export const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <JDSThemeProvider>
      <ToastProvider>
        <SnackbarProvider>{children}</SnackbarProvider>
      </ToastProvider>
    </JDSThemeProvider>
  );
};
