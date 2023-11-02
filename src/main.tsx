import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import { App } from 'src/app/App';
import { AppProviders } from './providers/AppProviders';
import { RouterProvider } from 'react-router-dom';
import { router } from './routing/Routes';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <AppProviders>
      <RouterProvider router={router} />
    </AppProviders>
  </StrictMode>,
);
