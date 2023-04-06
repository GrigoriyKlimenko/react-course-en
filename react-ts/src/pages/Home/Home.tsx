import useFetchData from '@/hooks/useFetchData';
import { SearchBar } from '@components/SearchBar';
import { CardsContainer } from '@components/CardsContainer';
import { PartialCardType } from '@components/CardsContainer/Card/types';
import { Loader } from '@components/Loader';

export const Home = () => {
  const { data, isDataLoading, gettingDataError, setReqUrl } =
    useFetchData<PartialCardType[]>('');

  return (
    <>
      <h1>Home</h1>
      <SearchBar getData={setReqUrl} />
      {gettingDataError && <h3>{gettingDataError}</h3>}
      {isDataLoading && <Loader />}
      <CardsContainer cards={data} />
    </>
  );
};
