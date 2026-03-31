import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { JDSThemeProvider } from '@jects/jds/theme';
import './index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <JDSThemeProvider>
      <App />
    </JDSThemeProvider>
  </StrictMode>,
);
