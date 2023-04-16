import React, { ChangeEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { searchTextSlice } from '@/store/reducers/SearchTextSlice';
import './styles.css';

type Props = {
  getData: (value: string) => void;
};

export const SearchBar = ({ getData }: Props) => {
  const { storedSearchText } = useAppSelector(
    (state) => state.searchTextReducer
  );
  const { saveSearchText } = searchTextSlice.actions;
  const dispatch = useAppDispatch();
  const [loadedOnce, setLoadedOnce] = useState(false);
  const [searchText, setSearchText] = useState(storedSearchText);

  useEffect(() => {
    if (!loadedOnce) {
      getData(searchText);
      setLoadedOnce(true);
    }
  }, [searchText, loadedOnce, getData]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === 'Enter' || event.code === 'NumpadEnter') {
      const { value } = event.target as HTMLInputElement;
      dispatch(saveSearchText(value));
      getData(value);
    }
  };

  const handleSearchClick = () => {
    dispatch(saveSearchText(searchText));
    getData(searchText);
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
