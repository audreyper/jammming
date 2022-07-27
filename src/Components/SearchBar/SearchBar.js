import React from 'react';
import './SearchBar.css'

function SearchBar({ onSearch, setSearchbarTerm }) {

  function handleTermChange(event) {
   setSearchbarTerm(event.target.value)
  }

    return (
      <div className="SearchBar">
        <input onChange={handleTermChange} placeholder="Enter A Song, Album, or Artist" />
        <button className="SearchButton" onClick={onSearch}>SEARCH</button>
      </div>
    );

}

export default SearchBar;