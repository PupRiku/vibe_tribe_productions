import React from "react"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Button from "@mui/material/Button"
import Chip from "@mui/material/Chip"

import { getStrapiMedia } from "../../lib/media"
import { styled, useTheme } from "@mui/material/styles"
import theme from "../../src/theme"

import ArrowForwardIcon from "@mui/icons-material/ArrowForward"

const ShowCard = ({ show, role }) => {
  const theme = useTheme()
  console.log(show)

  return (
    <Grid item sx={{ margin: "1rem" }}>
      {role === "gm" || role === "host" ? (
        <Card
          sx={{
            width: 250,
            minHeight: 390,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CardMedia
            sx={{ height: 250 }}
            image={getStrapiMedia(show.attributes.image)}
            title={`${show.attributes.name} cover image`}
          />
          <CardContent>
            <Typography variant="h3" component="div">
              {`${show.attributes.name}`}
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "flex-end", marginTop: "auto" }}>
            <Button endIcon={<ArrowForwardIcon />}>Learn More</Button>
          </CardActions>
        </Card>
      ) : null}
    </Grid>
  )
}

export default ShowCard
