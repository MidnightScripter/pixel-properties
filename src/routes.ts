import { FC } from 'react';
import Search from './pages/Search/Search';
import Index from './pages/Index/Index';
import Property from './pages/Property/Property';
import ErrorUI from './pages/ErrorUI/ErrorUI';

interface RouteConfig {
  path: string;
  element: FC;
}

const routes: RouteConfig[] = [
  {
    path: '/',
    element: Index,
  },
  {
    path: '/search',
    element: Search,
  },
  {
    path: '/property/:propertyId',
    element: Property,
  },
  {
    path: '*',
    element: ErrorUI,
  },
  // {
  //   path: '/contact',
  //   element: Contact,
  // },
  // Add more routes here
];

export default routes;
