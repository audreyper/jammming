import React from 'react';
import './SearchResults.css';
import TrackList from '../TrackList/TrackList';

function SearchResults({ searchResults, onAdd }) {

    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <h3>Click the + sign to add songs to your playlist</h3>
        <TrackList tracks={searchResults} onAdd={onAdd} isRemoval={false}/>
      </div>
    );

}

export default SearchResults;