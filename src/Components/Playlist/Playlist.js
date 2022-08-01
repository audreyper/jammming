import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';

function Playlist({ playlistName, playlistTracks, onRemove, onNameChange, onSave }) {

  function handleNameChange(e) {
    onNameChange(e.target.value);
  }

    return (
       <div className="Playlist">
         <input onChange={handleNameChange} placeholder={playlistName}/>
         <TrackList tracks={playlistTracks} onRemove={onRemove} isRemoval={true}/>
         <button className="Playlist-save" onClick={onSave}>SAVE YOUR NEW PLAYLIST TO SPOTIFY</button>
       </div>

    )
}

export default Playlist;