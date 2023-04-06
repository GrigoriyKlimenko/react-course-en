import React, { ChangeEvent, useEffect, useState } from 'react';
import { BASE_URL } from '@data/baseUrl';
import './styles.css';

type Props = {
  getData: (value: string) => void;
};

export const SearchBar = ({ getData }: Props) => {
  const [searchText, setSearchText] = useState(
    localStorage.getItem('searchText') || ''
  );
  const [loadedOnce, setLoadedOnce] = useState(false);

  const getSearchReqUrl = (value: string) => `${BASE_URL}?name_like=${value}`;

  useEffect(() => {
    if (!loadedOnce) {
      getData(getSearchReqUrl(searchText));
      setLoadedOnce(true);
    }
  }, [searchText, getData, loadedOnce]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === 'Enter' || event.code === 'NumpadEnter') {
      const { value } = event.target as HTMLInputElement;
      localStorage.setItem('searchText', value.trim());
      getData(getSearchReqUrl(value));
    }
  };

  const handleSearchClick = () => {
    localStorage.setItem('searchText', searchText.trim());
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
