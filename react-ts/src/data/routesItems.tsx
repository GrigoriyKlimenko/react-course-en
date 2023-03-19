import { Home } from '@pages/Home';
import { AboutUs } from '@pages/AboutUs';
import { Error } from '@pages/Error';

export const ROUTES_ITEMS = [
  {
    title: 'Home',
    path: '/',
    component: <Home />,
    displayInMenu: true,
  },
  {
    title: 'About as',
    path: '/about',
    component: <AboutUs />,
    displayInMenu: true,
  },
  {
    title: 'Error',
    path: '*',
    component: <Error />,
    displayInMenu: false,
  },
];
