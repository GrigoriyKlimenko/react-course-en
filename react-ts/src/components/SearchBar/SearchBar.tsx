import React, { ChangeEvent, useEffect, useState } from 'react';
import { BASE_URL } from '@data/baseUrl';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { cardsHomeSlice } from '@/store/reducers/CardsHomeSlice';
import './styles.css';

type Props = {
  getData: (value: string) => void;
};

export const SearchBar = ({ getData }: Props) => {
  const { searchText } = useAppSelector((state) => state.cardsHomeReducer);
  const { saveSearchText } = cardsHomeSlice.actions;
  const dispatch = useAppDispatch();
  const [loadedOnce, setLoadedOnce] = useState(false);

  const getSearchReqUrl = (value: string) => `${BASE_URL}?name_like=${value}`;

  useEffect(() => {
    if (!loadedOnce) {
      getData(getSearchReqUrl(searchText));
      setLoadedOnce(true);
    }
  }, [searchText, getData, loadedOnce]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(saveSearchText(e.target.value));
  };

  const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === 'Enter' || event.code === 'NumpadEnter') {
      const { value } = event.target as HTMLInputElement;
      dispatch(saveSearchText(value));
      getData(getSearchReqUrl(value));
    }
  };

  const handleSearchClick = () => {
    dispatch(saveSearchText(searchText));
    getData(getSearchReqUrl(searchText));
  };

  return (
    <div className="searchBar">
      <input
        className="searchInput"
        placeholder="Search..."
        onChange={handleChange}
        value={searchText}
        onKeyDown={keyDownHandler}
      />
      <button className="searchButton" onClick={handleSearchClick}>
        Search
      </button>
    </div>
  );
};
