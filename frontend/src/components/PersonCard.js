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

const PersonCard = ({ person, section, isAbout }) => {
  const theme = useTheme()

  const allShows = person.attributes.player_in.data.concat(
    person.attributes.host_of.data
  )

  return (
    <Grid item sx={{ margin: "1rem" }}>
      {isAbout ? (
        <Card
          sx={{
            width: 400,
            minHeight: section === "production" ? 400 : 710,
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
              {section === "gm" ? (
                person.attributes.gm_of.data.map((game) => {
                  return (
                    <Chip
                      label={game.attributes.name}
                      sx={{
                        margin: "0.5rem",
                        color: game.attributes.text,
                        backgroundColor: game.attributes.color,
                      }}
                      key={`game_${game.id}`}
                    />
                  )
                })
              ) : section === "cast" ? (
                allShows.map((show) => {
                  return (
                    <Chip
                      label={show.attributes.name}
                      sx={{
                        margin: "0.5rem",
                        color: show.attributes.text,
                        backgroundColor: show.attributes.color,
                      }}
                      key={`show_${show.id}`}
                    />
                  )
                })
              ) : (
                <Grid container direction="column">
                  <Grid item>
                    <Typography variant="h4">
                      {person.attributes.role}
                    </Typography>
                  </Grid>
                  {person.attributes.executive ? (
                    <Typography variant="subtitle1">Executive Team</Typography>
                  ) : null}
                </Grid>
              )}
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
      ) : null}
    </Grid>
  )
}

export default PersonCard
