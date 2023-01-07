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
      <Grid item sx={{ marginBottom: "3rem" }}>
        <Typography variant="h1">Our Games and Shows</Typography>
      </Grid>
      <Grid item sx={{ marginBottom: "3rem" }}>
        <Typography variant="h2">Season 2</Typography>
      </Grid>
      <Grid item sx={{ marginBottom: "3rem" }}>
        <Typography
          variant="h2"
          sx={{ fontWeight: 700, color: theme.palette.secondary }}
        >
          Season 2
        </Typography>
      </Grid>
      <Grid item sx={{ marginBottom: "3rem" }}>
        <Typography variant="h2">Season 1</Typography>
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
