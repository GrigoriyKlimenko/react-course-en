import React from 'react';
import './styles.css';

export class SearchBar extends React.Component {
  state = {
    searchText: localStorage.getItem('searchText') || '',
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      searchText: e.target.value,
    });
  };

  componentWillUnmount = () => {
    localStorage.setItem('searchText', this.state.searchText);
  };

  render() {
    return (
      <div className="searchBar">
        <input
          className="searchInput"
          placeholder="Search..."
          onChange={this.handleChange}
          value={this.state.searchText}
        />
        <button className="searchButton">Search</button>
      </div>
    );
  }
}
