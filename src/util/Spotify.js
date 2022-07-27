

const redirectURI = "http://localhost:3000/";
const clientId = fdfd2ae3d43e4d02a266bbfbbcefb7ef;
let userAccessToken;

function Spotify() {

    function getAccessToken() {
    if (userAccessToken) {
        return userAccessToken;
    }

      // checks for access token match in URL provided by endpoint after authentication
      const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
      const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

        if (accessTokenMatch && expiresInMatch) {

          // sets access token 
          accessToken = accessTokenMatch[1];

          // sets expiration time 
          const expiresIn = Number(expiresInMatch[1]);

          // Clears the parameters, allowing us to grab a new access token when it expires
          window.setTimeout(() => accessToken = '', expiresIn * 1000);
          window.history.pushState('Access Token', null, '/');
          return accessToken;

        //Redirects users to the following URL
     }  else {
          const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
          window.location = accessUrl;
        }
    },
    



}

export default Spotify;