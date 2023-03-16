import React from 'react';
import './styles.css';

export class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h3>Header</h3>
        <nav className="navigation">
          <div>Home</div>
          <div>About us</div>
        </nav>
      </div>
    );
  }
}
