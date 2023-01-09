import React from "react"
import Head from "next/head"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import useMediaQuery from "@mui/material/useMediaQuery"
import { styled, useTheme } from "@mui/material/styles"
import { fetchAPI } from "../lib/api"
import theme from "../src/theme"

import ShowCard from "../src/components/ShowCard"

const Shows = ({ games, shows }) => {
  const allShows = games.concat(shows)

  const season1 = allShows.filter((show) => show.attributes.season1)
  const season2 = allShows.filter((show) => show.attributes.season2)

  season1.sort((a, b) => {
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

  season2.sort((a, b) => {
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

  return (
    <Grid container direction="column">
      <Head>
        <title key="title">Our Games and Shows - Vibe Tribe Productions</title>
        <meta
          name="description"
          key="description"
          content="Take a look at all the podcasts, shows, and games we play and find out how to listen to us!"
        />
        <meta
          property="og:title"
          content="Our Games and Shows - Vibe Tribe Productions"
          key="og:title"
        />
        <meta
          property="og:url"
          key="og:url"
          content="http://www.vibetribeproductions.com/shows"
        />
        <link
          rel="canonical"
          key="canonical"
          href="http://www.vibetribeproductions.com/shows"
        />
      </Head>
      <Grid item>
        <Grid container direction="column" alignItems="center">
          <Grid item sx={{ marginBottom: "3rem" }}>
            <Typography variant="h1">Our Games and Shows</Typography>
          </Grid>
          <Grid item sx={{ marginBottom: "3rem" }}>
            <Typography variant="h2">Season 2</Typography>
          </Grid>
          <Grid item sx={{ marginBottom: "3rem" }}>
            <Typography
              variant="h2"
              sx={{ fontWeight: 700, color: theme.palette.secondary.main }}
            >
              Season 2 begins March 2023!
            </Typography>
          </Grid>
          <Grid item sx={{ marginBottom: "3rem" }}>
            <Grid container justifyContent="center">
              {season2.map((show) => (
                <ShowCard
                  show={show}
                  key={`season1_showCard_${show.attributes.name}`}
                />
              ))}
            </Grid>
          </Grid>
          <Grid item sx={{ marginBottom: "3rem" }}>
            <Typography variant="h2">Season 1</Typography>
          </Grid>
          <Grid item sx={{ marginBottom: "3rem" }}>
            <Grid container justifyContent="center">
              {season1.map((show) => (
                <ShowCard
                  show={show}
                  key={`season2_showCard_${show.attributes.name}`}
                />
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [gamesRes] = await Promise.all([fetchAPI("/games", { populate: "*" })])
  const [showsRes] = await Promise.all([fetchAPI("/shows", { populate: "*" })])

  return {
    props: {
      games: gamesRes.data,
      shows: showsRes.data,
    },
    revalidate: 1,
  }
}

export default Shows
