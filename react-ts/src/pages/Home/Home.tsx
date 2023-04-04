import { SearchBar } from '@components/SearchBar';
import { CardsContainer } from '@components/CardsContainer';
import image from '@assets/no-image.jpg';
import { useState } from 'react';
import { Loader } from '@components/Loader';

const CARDS_MOCK = new Array(10).fill('').map((_, idx) => {
  return {
    id: 'id' + idx,
    image: image,
    name: 'Michael Schumacher',
    gender: 'male',
    city: 'Hürth',
    date: '03-01-1969',
    raceClass: 'Pro',
  };
});

export const Home = () => {
  const [data, setData] = useState([]);
  const [getDataError, setGetDataError] = useState('');
  const [isDataLoading, setIsDataLoading] = useState(false);

  const getData = (searchValue: string) => {
    setGetDataError('');
    setIsDataLoading(true);
    fetch(
      `https://fake-server-beige.vercel.app/catalog?q=${encodeURIComponent(
        searchValue
      )}`
    )
      .then((data) => {
        if (data.ok) {
          return data.json();
        }
        throw new Error('Something wrong');
      })
      .then((cards) => setData(cards))
      .catch((error) => {
        setGetDataError(error);
      })
      .finally(() => {
        setIsDataLoading(false);
      });
  };

  return (
    <>
      <h1>Home</h1>
      <SearchBar getData={getData} />
      {isDataLoading && <Loader />}
      <CardsContainer cards={data} />
    </>
  );
};
