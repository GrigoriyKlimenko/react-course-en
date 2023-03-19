import React from 'react';
import { SearchBar } from '@components/SearchBar';
import { CardsContainer } from '@components/CardsContainer';
import image from '@assets/no-image.jpg';

const CARDS_MOCK = new Array(10).fill('').map((_, idx) => {
  return {
    id: 'id' + idx,
    title: 'Some title',
    image: image,
    views: 34567,
    city: 'Vitebsk',
    date: '20-03-2023',
  };
});

export class Home extends React.Component {
  render() {
    return (
      <>
        <h1>Home</h1>
        <SearchBar />
        <CardsContainer cards={CARDS_MOCK} />
      </>
    );
  }
}
