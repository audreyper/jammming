import React from 'react';
import './SearchBar.css'

function SearchBar({ onSearch }) {


  function handleTermChange(event) {
   onSearch(event.target.value)
  }

    return (
      <div className="SearchBar">
        <h2>Enter a song, album, or artist to see the results</h2>
        <input onChange={handleTermChange} placeholder="Enter A Song, Album, or Artist"/>
      </div>
    );

}

export default SearchBar;