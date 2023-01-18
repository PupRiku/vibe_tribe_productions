import React from "react"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Button from "@mui/material/Button"

import { getStrapiMedia } from "../../lib/media"

import ArrowForwardIcon from "@mui/icons-material/ArrowForward"

const GMCard = ({ person }) => {
  return (
    <Grid item sx={{ margin: "1rem" }}>
      <Card
        sx={{
          width: 400,
          minHeight: 400,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardMedia
          sx={{ height: 400 }}
          image={getStrapiMedia(person.attributes.headshot)}
          title={`${person.attributes.lastName} headshot`}
        />
        <CardContent>
          <Typography variant="h3" component="div">
            {`${person.attributes.firstName} ${
              person.attributes.lastName === "."
                ? person.attributes.lastName
                : null
            }`}
          </Typography>
          <Grid item>
            <Typography variant="h4" component="div">
              {`Game Master`}
            </Typography>
          </Grid>
        </CardContent>
        <CardActions sx={{ justifyContent: "flex-end", marginTop: "auto" }}>
          <Button
            href={`/about/${person.attributes.slug}`}
            endIcon={<ArrowForwardIcon />}
          >
            Bio
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default GMCard
