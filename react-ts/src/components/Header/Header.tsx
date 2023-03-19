import React from 'react';
import './styles.css';
import { NavLink } from 'react-router-dom';
import { ROUTES_ITEMS } from '@data/routesItems';

type HeaderProps = {
  currentPageTitle: string;
};

export class Header extends React.Component<HeaderProps> {
  render() {
    return (
      <div className="header">
        <h3>{this.props.currentPageTitle}</h3>
        <nav className="navigation">
          {ROUTES_ITEMS.filter((item) => item.displayInMenu).map((item) => (
            <NavLink
              className={
                item.title === this.props.currentPageTitle
                  ? 'selected'
                  : 'navItem'
              }
              key={item.title}
              to={item.path}
            >
              {item.title}
            </NavLink>
          ))}
        </nav>
      </div>
    );
  }
}
