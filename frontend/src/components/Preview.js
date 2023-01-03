import React from "react"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"

const Preview = ({ games }) => {
  return (
    <Grid container direction="column">
      {games.map((game) => {
        return (
          <Grid container>
            <Grid item key={`game_${game.id}`}>
              <Typography>{game.attributes.name}</Typography>
            </Grid>
            <Grid item>
              <iframe
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/episode/6KTESrWrG3iMO6EParK8Zr?utm_source=generator"
                width="100%"
                height="152"
                frameBorder="0"
                allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </Grid>
          </Grid>
        )
      })}
    </Grid>
  )
}

export default Preview
