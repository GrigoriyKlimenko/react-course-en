import { AboutUs } from '@pages/AboutUs';
import { Error } from '@pages/Error';
import { Home } from '@pages/Home';
import { Registration } from '@pages/Registration';

export const ROUTES_ITEMS = [
  {
    title: 'Home',
    path: '/',
    component: <Home />,
    displayInMenu: true,
  },
  {
    title: 'Registration',
    path: '/registration',
    component: <Registration />,
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
