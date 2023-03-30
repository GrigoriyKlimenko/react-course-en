import { ChangeEvent, useEffect, useRef, useState } from 'react';
import './styles.css';

export const SearchBar = () => {
  const [searchText, setSearchText] = useState(
    localStorage.getItem('searchText') || ''
  );
  const searchTextRef = useRef('');

  useEffect(() => {
    searchTextRef.current = searchText;
  }, [searchText]);

  useEffect(() => {
    return () => {
      localStorage.setItem('searchText', searchTextRef.current);
    };
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="searchBar">
      <input
        className="searchInput"
        placeholder="Search..."
        onChange={handleChange}
        value={searchText}
      />
      <button className="searchButton">Search</button>
    </div>
  );
};
