import { createBrowserRouter } from 'react-router';

import { HomePage } from '@/pages/home';

import { ROUTE_PATHS } from '@/shared/config';

export const router = createBrowserRouter([
  {
    path: ROUTE_PATHS.HOME,
    element: <HomePage />,
  },
]);
