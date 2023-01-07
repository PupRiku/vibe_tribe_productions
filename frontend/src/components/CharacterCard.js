import React from "react"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Button from "@mui/material/Button"

import { getStrapiMedia } from "../../lib/media"
import { styled, useTheme } from "@mui/material/styles"
import theme from "../theme"

import ArrowForwardIcon from "@mui/icons-material/ArrowForward"

const CharacterCard = ({ character }) => {
  const theme = useTheme()

  return (
    <Grid item sx={{ margin: "1rem" }}>
      <Card
        sx={{
          width: 250,
          minHeight: 400,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardMedia
          sx={{ height: 250 }}
          image={getStrapiMedia(character.attributes.image)}
          title={`${character.attributes.name} cover image`}
        />
        <CardContent>
          <Typography variant="h3" component="div">
            {`${character.attributes.name}`}
          </Typography>
          <Typography variant="h4" component="div">
            {`${character.attributes.game.data.attributes.name}`}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            justifyContent: "flex-end",
            marginTop: "auto",
          }}
        >
          <Grid container direction="column" alignItems="flex-end">
            <Grid item>
              <Button endIcon={<ArrowForwardIcon />}>Character Sheet</Button>
            </Grid>
            <Grid item>
              <Button endIcon={<ArrowForwardIcon />}>Game Info</Button>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default CharacterCard
