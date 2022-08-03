
import clientIDConfig from './clientID';

const clientID = clientIDConfig.clientID;

const redirectURI = 'http://localhost:3000';

let accessToken;

let Spotify = {

  getAccessToken(){
    if(accessToken){
      return accessToken;
    }
      const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
      const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
      
    if (!accessTokenMatch && !expiresInMatch) {
      // Requesting a token 
      window.location = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
    } else {
      accessToken = accessTokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);
      window.setTimeout(() => (accessToken = ''), expiresIn * 1000);
      // wipes the access token and URL parameters
      window.history.pushState('Access Token', null, '/');
        return accessToken;
    }    
      },

     search(term) {
      const accessToken = Spotify.getAccessToken();
      return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
        .then(response => response.json())
        .then(jsonResponse => {
          if (!jsonResponse.tracks) {
            return [];
          }
          return jsonResponse.tracks.items.map(track => (
            {id: track.id,
             name: track.name,
             artist: track.artists[0].name,
             album: track.album.name,
             uri: track.uri}
             ));
          });
        },

    savePlaylist(name, trackUris) {
      if (name && trackUris) {
        
        const accessToken = Spotify.getAccessToken();

        // Gets user profile to get a userID for next step
        return fetch('https://api.spotify.com/v1/me', {headers: {Authorization: `Bearer ${accessToken}`}})
          .then(response => response.json())
          .then(jsonResponse => {

            // Posts an empty user's playlist with playlist's name
            return fetch(`https://api.spotify.com/v1/users/${jsonResponse.id}/playlists`, {
              headers: {Authorization: `Bearer ${accessToken}`},
              method: 'POST',
              body: JSON.stringify({ name: name })}
              )
              .then(response => response.json())
              .then(jsonResponse => {

                // Posts songs to the empty playlist
                return fetch(
                  `https://api.spotify.com/v1/users/${jsonResponse.id}/playlists/${jsonResponse.id}}/tracks`,
                  {
                    headers: {Authorization: `Bearer ${accessToken}`},
                    method: 'POST',
                    body: JSON.stringify({ uris: trackUris })
                  }
                );
              });
            });
        } else {
         return;
       }
      }
    };


export default Spotify;



