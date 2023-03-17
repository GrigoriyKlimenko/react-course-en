import React from 'react';
import { SearchBar } from '@components/SearchBar';

export class Home extends React.Component {
  render() {
    return (
      <>
        <h1>Home</h1>
        <section>
          <SearchBar />
        </section>
      </>
    );
  }
}
