import { FC } from 'react';
import Search from './pages/Search/Search';
import Index from './pages/Index/Index';

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
  // {
  //   path: '/contact',
  //   element: Contact,
  // },
  // Add more routes here
];

export default routes;
