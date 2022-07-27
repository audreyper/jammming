import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState([]);
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [searchbarTerm, setSearchbarTerm] = useState([]);
  


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
    setPlaylistName(name);
  }

  function savePlaylist() {
   let trackURIS = []
   return (
    trackURIS = playlistTracks.filter(track => track.uri)
    )  
   }

   function search(term) {
    console.log(term);
   }

  return (
  <div>
    <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar onSearch={search} setSearchbarTerm={setSearchbarTerm}/>
          <div className="App-playlist"> 
            <SearchResults searchResults={searchResults} onAdd={addTrack}/>
            <Playlist playlistName={playlistName} playlistTracks={playlistTracks} onRemove={removeTrack} onNameChange={updatePlaylistName} onSave={savePlaylist}/>           
          </div>
      </div>
  </div>
  );
}

export default App;
