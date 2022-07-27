import React from 'react';
import './SearchResults.css';
import '.TrackList';

function SearchResults({ searchResults, onAdd }) {

    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <TrackList tracks={searchResults} onAdd={onAdd} isRemoval={false}/>
      </div>
    );

}

export default SearchResults;