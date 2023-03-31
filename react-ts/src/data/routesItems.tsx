import { AboutUs } from '@pages/AboutUs';
import { Error } from '@pages/Error';
import { Home } from '@pages/Home';
import { Registration } from '@pages/Registration';
import { Navigate } from 'react-router-dom';

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
    title: 'About us',
    path: '/about',
    component: <AboutUs />,
    displayInMenu: true,
  },
  {
    title: 'Error',
    path: '/404',
    component: <Error />,
    displayInMenu: false,
  },
  {
    title: 'Error',
    path: '*',
    component: <Navigate to="/404" replace />,
    displayInMenu: false,
  },
];
