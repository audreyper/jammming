import { useState } from 'react';
import Swal from 'sweetalert2'
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';

function App() {

  const initialStatePlaylistName = "Your playlist's name"

  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState(initialStatePlaylistName);
  const [playlistTracks, setPlaylistTracks] = useState([]);
 
  function addTrack(track) {
    if (playlistTracks.find(el => el.id === track.id)) {
      alert('Track already in the playlist');
      return;
    }
    setPlaylistTracks(playlist => [...playlist, track]);
  }


  function removeTrack(track) {
    let result = playlistTracks.filter(el => el.id !== track.id);
    setPlaylistTracks(result);
  }

  function updatePlaylistName(name) {
    return name;
  }


   function savePlaylist() {
      let trackUris = [];
      playlistTracks.forEach(track => {
        trackUris.push(track.uri);
      });
      Spotify.savePlaylist(updatePlaylistName, trackUris)
      .then(setPlaylistTracks([]))
      .then(setPlaylistName(initialStatePlaylistName))
      .then(Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Congratulations! Your playlist has been saved to your account!',
        showConfirmButton: false,
        timer: 2500
      }))
    }


  function search(term) {
    Spotify.search(term).then(result => {
      setSearchResults(result)
    })
  }


  return (
  <div>
    <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar onSearch={search} />
          <div className={`${searchResults[1] ? "App-playlist" : "Visibility"}`}>
            <SearchResults searchResults={searchResults} onAdd={addTrack}/>
            <Playlist playlistTracks={playlistTracks} onRemove={removeTrack} onNameChange={updatePlaylistName} onSave={savePlaylist} playlistName={playlistName}/>  
          </div>   
      </div>
  </div>
  );
}

export default App;
