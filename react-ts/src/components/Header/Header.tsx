import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ROUTES_ITEMS } from '@data/routesItems';
import './styles.css';

export const Header = () => {
  const [currentPage, setCurrentPage] = useState('');
  const location = useLocation();

  useEffect(() => {
    const currentRoute = ROUTES_ITEMS.find(
      (route) => route.path === location.pathname
    );
    if (currentRoute) {
      setCurrentPage(currentRoute.title);
    }
  }, [location.pathname]);

  return (
    <div className="header">
      <h3>{currentPage}</h3>
      <nav className="navigation">
        {ROUTES_ITEMS.filter((route) => route.displayInMenu).map((route) => (
          <NavLink
            className={route.title === currentPage ? 'selected' : 'navItem'}
            key={route.title}
            to={route.path}
          >
            {route.title}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};
