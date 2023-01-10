import React from "react"
import Iframe from "react-iframe"
import Image from "next/image"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"

import { getStrapiMedia } from "../../lib/media"

const Preview = ({ games, shows }) => {
  const allShows = games.concat(shows)
  const allShowsSorted = [...allShows].sort((a, b) => {
    const nameA = a.attributes.name.toUpperCase() // ignore upper and lowercase
    const nameB = b.attributes.name.toUpperCase() // ignore upper and lowercase
    if (nameA < nameB) {
      return -1
    }
    if (nameA > nameB) {
      return 1
    }

    // names must be equal
    return 0
  })

  const currentSeason = allShowsSorted.filter((show) => show.attributes.season1)

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "20em" }}
    >
      {currentSeason.map((game, i) => {
        return (
          <Grid
            item
            key={`game_${game.id}`}
            sx={{ minWidth: "100%", minHeight: "20em" }}
          >
            {i % 2 === 0 ? (
              <Grid
                container
                sx={{ minWidth: "100%", minHeight: "20em" }}
                justifyContent="center"
              >
                <Grid item key={`image_${game.id}`}>
                  <Image
                    src={getStrapiMedia(game.attributes.image)}
                    alt={`${game.attributes.name} cover`}
                    style={{ width: "19.5625em", height: "19.5625em" }}
                  />
                </Grid>
                <Grid item sx={{ marginLeft: "2rem" }}>
                  <Grid
                    container
                    direction="column"
                    sx={{ maxWidth: "46.875rem" }}
                  >
                    <Grid
                      item
                      key={`title_${game.id}`}
                      sx={{ marginBottom: "1rem" }}
                    >
                      <Typography variant="h2">
                        {game.attributes.name}
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      key={`desc_${game.id}`}
                      sx={{ marginBottom: "1rem" }}
                    >
                      <Typography variant="body1">
                        {game.attributes.description.slice(0, 297) + "..."}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Iframe
                        style="border-radius:12px"
                        src={`https://open.spotify.com/embed/show/${game.attributes.spotifyID}?utm_source=generator`}
                        width="750"
                        height="200"
                        frameBorder="0"
                        allowfullscreen=""
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            ) : (
              <Grid
                container
                sx={{ minWidth: "100%", minHeight: "20em" }}
                justifyContent="center"
              >
                <Grid item>
                  <Grid
                    container
                    direction="column"
                    sx={{ maxWidth: "46.875rem" }}
                  >
                    <Grid
                      item
                      key={`title_${game.id}`}
                      sx={{ marginBottom: "1rem" }}
                    >
                      <Typography variant="h2">
                        {game.attributes.name}
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      key={`desc_${game.id}`}
                      sx={{ marginBottom: "1rem" }}
                    >
                      <Typography variant="body1">
                        {game.attributes.description.slice(0, 297) + "..."}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Iframe
                        style="border-radius:12px"
                        src={`https://open.spotify.com/embed/show/${game.attributes.spotifyID}?utm_source=generator`}
                        width="750"
                        height="200"
                        frameBorder="0"
                        allowfullscreen=""
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item key={`image_${game.id}`} sx={{ marginLeft: "2rem" }}>
                  <Image
                    src={getStrapiMedia(game.attributes.image)}
                    alt={`${game.attributes.name} cover`}
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
