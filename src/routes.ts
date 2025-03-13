import { FC } from 'react';
import App from './App';
import Search from './pages/Search';

interface RouteConfig {
  path: string;
  element: FC;
}

const routes: RouteConfig[] = [
  {
    path: '/',
    element: App,
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
