const clientID = process.env.SPOTIFY_CLIENT_ID
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET

let accessToken

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken
    }
    const authOptions = {
      url: "https://accounts.spotify.com/api/token",
      headers: {
        Authorization:
          "Basic " +
          new Buffer.from(clientID + ":" + clientSecret).toString("base64"),
      },
      form: {
        grant_type: "client_credentials",
      },
      json: true,
    }

    request.post(authOptions, function (error, response, body) {
      if (!error && response.statusCode === 200) {
        // use the access token to access the Spotify Web API
        accessToken = body.access_token
      }
      return accessToken
    })
  },

  //   search(term) {
  //     const accessToken = Spotify.getAccessToken()
  //     return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
  //       headers: {
  //         Authorization: `Bearer ${accessToken}`,
  //       },
  //     })
  //       .then((response) => {
  //         return response.json()
  //       })
  //       .then((jsonResponse) => {
  //         if (!jsonResponse.tracks) {
  //           return []
  //         }
  //         return jsonResponse.tracks.items.map((track) => ({
  //           id: track.id,
  //           name: track.name,
  //           artist: track.artists[0].name,
  //           album: track.album.name,
  //           uri: track.uri,
  //           preview: track.preview_url,
  //         }))
  //       })
  //   },
}

export default Spotify
