import { SearchBar } from '@components/SearchBar';
import { CardsContainer } from '@components/CardsContainer';
import { Loader } from '@components/Loader';
import { cardsAPI } from '@/services/cardsService';

export const Home = () => {
  const [trigger, { data, isFetching, error }] =
    cardsAPI.useLazyFetchAllCardsQuery();

  const getData = (value: string) => {
    trigger(value, false);
  };
  return (
    <>
      <h1>Home</h1>
      <SearchBar getData={getData} />
      {error && <h3>Oops, something happened...</h3>}
      {isFetching && <Loader />}
      <CardsContainer cards={data} />
    </>
  );
};
