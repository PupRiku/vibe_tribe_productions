import React from "react"
import Head from "next/head"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Chip from "@mui/material/Chip"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"

import PersonCard from "../../src/components/PersonCard"

import { fetchAPI } from "../../lib/api"
import { getStrapiMedia } from "../../lib/media"
import GMCard from "../../src/components/GMCard"

const Game = ({ game, shows, characters, people }) => {
  const gameMaster = people.filter(
    (person) => person.id === game.attributes.gameMaster.data.id
  )

  // const players = people.filter((person) =>
  //   person.attributes.player_in.data.find((item) => item.id === game.id)
  // )

  return (
    <Grid container direction="column">
      <Head>
        <title key="title">{`Our Games and Shows - ${game.attributes.name}`}</title>
        <meta
          name="description"
          key="description"
          content="Learn more about the Vibe Tribe Productions shows!"
        />
        <meta
          property="og:title"
          content={`About Us - ${game.attributes.name}`}
          key="og:title"
        />
        <meta
          property="og:url"
          key="og:url"
          content={`http://www.vibetribeproductions.com/team/${game.attributes.name}`}
        />
        <link
          rel="canonical"
          key="canonical"
          href={`http://www.vibetribeproductions.com/team/${game.attributes.name}`}
        />
      </Head>
      <Grid item>
        <Grid container direction="column" alignItems="center">
          <Grid item sx={{ marginBottom: "3rem" }}>
            <Typography variant="h1">Our Games and Shows</Typography>
          </Grid>
          <Grid item sx={{ marginBottom: "3rem" }}>
            <Typography variant="h2">{game.attributes.name}</Typography>
          </Grid>
          <Grid container justifyContent="center">
            <Grid item sx={{ marginBottom: "3rem", marginLeft: "3rem" }}>
              <img
                src={getStrapiMedia(game.attributes.image)}
                style={{ height: "25rem" }}
              ></img>
            </Grid>
            <Grid item sx={{ marginBottom: "3rem", marginLeft: "3rem" }}>
              <Grid container direction="column" sx={{ width: "50rem" }}>
                <Grid item>
                  <Typography variant="h2">{game.attributes.system}</Typography>
                </Grid>
                <Grid item>
                  {game.attributes.season1 ? (
                    <Chip
                      label={"Season 1"}
                      sx={{
                        margin: "0.5rem",
                        color: "#ffffff",
                        backgroundColor: "green",
                      }}
                    />
                  ) : null}
                  {game.attributes.season2 ? (
                    <Chip
                      label={"Season 2"}
                      sx={{
                        margin: "0.5rem",
                        color: "#000000",
                        backgroundColor: "#ffff00",
                      }}
                    />
                  ) : null}
                </Grid>
                <Grid item>
                  <Typography variant="body1">
                    {game.attributes.description}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container direction="column" alignItems="center">
            <Grid item sx={{ marginBottom: "3rem" }}>
              <Typography variant="h2">Game Master</Typography>
            </Grid>
            <Grid item sx={{ marginBottom: "3rem" }}>
              <Grid container direction="column">
                <Grid item>
                  <GMCard person={gameMaster[0]} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container direction="column" alignItems="center">
            <Grid item sx={{ marginBottom: "3rem" }}>
              <Typography variant="h2">Players</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export async function getStaticPaths() {
  const gamesres = await fetchAPI("/games", { fields: ["slug"] })

  return {
    paths: gamesres.data.map((game) => ({
      params: {
        slug: game.attributes.slug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const [peopleRes] = await Promise.all([
    fetchAPI("/people", { populate: "*" }),
  ])
  const [showsRes] = await Promise.all([fetchAPI("/shows", { populate: "*" })])
  const [charactersRes] = await Promise.all([
    fetchAPI("/characters", { populate: "*" }),
  ])
  const gamesRes = await fetchAPI("/games", {
    filters: {
      slug: params.slug,
    },
    populate: "*",
  })

  return {
    props: {
      people: peopleRes.data,
      shows: showsRes.data,
      characters: charactersRes.data,
      game: gamesRes.data[0],
    },
    revalidate: 1,
  }
}

export default Game
