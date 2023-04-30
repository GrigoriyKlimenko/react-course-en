import { SearchBar } from '@components/SearchBar';
import { CardsContainer } from '@components/CardsContainer';
import { Loader } from '@components/Loader';
import { cardsAPI } from '@/services/cardsService';
import { useAppSelector } from '@/hooks/redux';

export const Home = () => {
  const { storedSearchText } = useAppSelector(
    (state) => state.searchTextReducer
  );
  const { data, isFetching, error } =
    cardsAPI.useFetchAllCardsQuery(storedSearchText);

  return (
    <>
      <h1>Home</h1>
      <SearchBar />
      {error && <h3>Oops, something happened...</h3>}
      {isFetching && <Loader />}
      <CardsContainer cards={data} />
    </>
  );
};
