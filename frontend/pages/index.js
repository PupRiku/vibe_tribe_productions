import React from "react"
import Head from "next/head"
import { fetchAPI } from "../lib/api"
import Preview from "../src/components/Preview"

import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import Button from "@mui/material/Button"
import useMediaQuery from "@mui/material/useMediaQuery"
import { styled, useTheme } from "@mui/material/styles"

import theme from "../src/theme"

import ArrowForwardIcon from "@mui/icons-material/ArrowForward"

const Highlight = styled("span")(({ theme }) => ({
  color: theme.palette.primary.main,
}))

const Index = ({ games }) => {
  const theme = useTheme()

  const matchesMD = useMediaQuery(theme.breakpoints.down("lg"))
  const matchesSM = useMediaQuery(theme.breakpoints.down("md"))
  const matchesXS = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <Grid container direction="column">
      <Head>
        <title key="title">
          Vibe Tribe Productions - A TTRPG Podcast Family
        </title>
        <meta
          name="description"
          key="description"
          content="Vibe Tribe Productions - A TTRPG Podcast Family"
        />
        <meta
          property="og:title"
          content="Vibe Tribe Productions - A TTRPG Podcast Family"
          key="og:title"
        />
        <meta
          property="og:url"
          key="og:url"
          content="http://www.vibetribeproductions.com"
        />
        <link
          rel="canonical"
          key="canonical"
          href="http://www.vibetribeproductions.com"
        />
      </Head>
      <Grid item>
        <Grid container direction="column" alignItems="center">
          <Grid item sx={{ marginBottom: "3rem" }}>
            <Typography variant="h1">
              Welcome to <Highlight>Vibe Tribe Productions</Highlight>!
            </Typography>
          </Grid>
          <Grid item sx={{ marginBottom: "3rem" }}>
            <Typography variant="h2">Recent Episodes</Typography>
          </Grid>
          <Grid item sx={{ marginBottom: "3rem" }}>
            <Preview games={games} />
          </Grid>
          <Grid item sx={{ marginBottom: "3rem" }}>
            <Button
              variant="contained"
              href="/shows"
              endIcon={<ArrowForwardIcon />}
              size="large"
            >
              See More Episodes
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [gamesRes] = await Promise.all([fetchAPI("/games", { populate: "*" })])

  return {
    props: {
      games: gamesRes.data,
    },
    revalidate: 1,
  }
}

export default Index
