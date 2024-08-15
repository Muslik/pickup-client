import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from 'src/app';
import { appStarted } from 'src/shared/config/init';

appStarted();
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
