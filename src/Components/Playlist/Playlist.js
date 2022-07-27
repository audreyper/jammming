import React from 'react';
import './Playlist.css';
import '.TrackList';

function Playlist({ TrackList, playlistName, playlistTracks, onRemove, onNameChange, onSave }) {

  function handleNameChange(e) {
    onNameChange(e.target.value);
  }

    render(
       <div className="Playlist">
         <input onChange={handleNameChange} placeholder={playlistName}/>
         <TrackList tracks={playlistTracks} onRemove={onRemove} isRemoval={true}/>
         <button className="Playlist-save" onClick={onSave}>SAVE TO SPOTIFY</button>
       </div>

    )
}

export default Playlist;