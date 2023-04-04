import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import './styles.css';

type Props = {
  getData: (value: string) => void;
};

export const SearchBar = ({ getData }: Props) => {
  const [searchText, setSearchText] = useState(
    localStorage.getItem('searchText') || ''
  );
  const searchTextRef = useRef('');

  useEffect(() => {
    searchTextRef.current = searchText;
  }, [searchText]);

  useEffect(() => {
    getData(searchText);
    return () => {
      localStorage.setItem('searchText', searchTextRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === 'Enter' || event.code === 'NumpadEnter') {
      const target = event.target as HTMLInputElement;
      getData(target.value);
    }
  };

  const handleSearchClick = () => {
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
