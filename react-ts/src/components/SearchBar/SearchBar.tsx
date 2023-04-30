import React, { ChangeEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { searchTextSlice } from '@/store/reducers/SearchTextSlice';
import './styles.css';

export const SearchBar = () => {
  const { storedSearchText } = useAppSelector(
    (state) => state.searchTextReducer
  );
  const { saveSearchText } = searchTextSlice.actions;
  const dispatch = useAppDispatch();
  const [searchText, setSearchText] = useState(storedSearchText);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === 'Enter' || event.code === 'NumpadEnter') {
      const { value } = event.target as HTMLInputElement;
      dispatch(saveSearchText(value));
    }
  };

  const handleSearchClick = () => {
    dispatch(saveSearchText(searchText));
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
