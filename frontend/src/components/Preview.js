import React, { useEffect } from "react"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"

import { getStrapiMedia } from "../../lib/media"

const Preview = ({ games }) => {
  useEffect(function mount() {
    window.onSpotifyIframeApiReady = (IFrameAPI) => {
      let element = document.getElementById("embed-iframe")
      let options = {
        width: "750",
        height: "300",
        uri: "spotify:episode:6KTESrWrG3iMO6EParK8Zr",
      }
      let callback = (EmbedController) => {}
      IFrameAPI.createController(element, options, callback)
    }
  })

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      sx={{ minWidth: "100%", minHeight: "20em" }}
    >
      {games.map((game, i) => {
        return (
          <Grid
            item
            key={`game_${game.id}`}
            sx={{ minWidth: "100%", minHeight: "20em" }}
          >
            {i % 2 === 0 ? (
              <Grid container sx={{ minWidth: "100%", minHeight: "20em" }}>
                <Grid item key={`image_${game.id}`}>
                  <img
                    src={getStrapiMedia(game.attributes.image)}
                    style={{ width: "19.5625em", height: "19.5625em" }}
                  />
                </Grid>
                <Grid item sx={{ marginLeft: "2rem" }}>
                  <Grid container direction="column">
                    <Grid
                      item
                      key={`title_${game.id}`}
                      sx={{ marginBottom: "1rem" }}
                    >
                      <Typography variant="h2">
                        {game.attributes.name}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <div id="embed-iframe" />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            ) : (
              <Grid container sx={{ minWidth: "100%", minHeight: "20em" }}>
                <Grid item sx={{ marginLeft: "2rem" }}>
                  <Grid container direction="column">
                    <Grid
                      item
                      key={`title_${game.id}`}
                      sx={{ marginBottom: "1rem" }}
                    >
                      <Typography variant="h2">
                        {game.attributes.name}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <div id="embed-iframe" />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item key={`image_${game.id}`}>
                  <img
                    src={getStrapiMedia(game.attributes.image)}
                    style={{ width: "19.5625em", height: "19.5625em" }}
                  />
                </Grid>
              </Grid>
            )}
          </Grid>
        )
      })}
    </Grid>
  )
}

export default Preview
