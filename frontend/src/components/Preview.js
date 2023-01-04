import React from "react"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"

const Preview = ({ games }) => {
  return (
    <Grid container direction="column">
      {games.map((game) => {
        return (
          <Grid container key={`set_${game.id}`}>
            <Grid item key={`game_${game.id}`}>
              <Typography>{game.attributes.name}</Typography>
            </Grid>
          </Grid>
        )
      })}
    </Grid>
  )
}

export default Preview
