import type { ReactNode } from 'react';
import { JDSThemeProvider } from '@jects/jds/theme';
import { ToastProvider, SnackbarProvider } from '@jects/jds';

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
