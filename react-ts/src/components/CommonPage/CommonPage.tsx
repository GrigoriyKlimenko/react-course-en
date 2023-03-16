import React from 'react';
import { Header } from '@components/Header';
import './styles.css';

export class CommonPage extends React.Component {
  render() {
    return (
      <div className="commonPageContainer">
        <Header />
      </div>
    );
  }
}
