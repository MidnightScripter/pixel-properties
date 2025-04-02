import { FC } from 'react';
import Search from './pages/Search/Search';
import Index from './pages/Index/Index';
import Property from './pages/Property/Property';
import ErrorUI from './pages/ErrorUI/ErrorUI';
import Contact from './pages/Contact/Contact';

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
    path: '/contact',
    element: Contact,
  },
  {
    path: '*',
    element: ErrorUI,
  },
];

export default routes;
