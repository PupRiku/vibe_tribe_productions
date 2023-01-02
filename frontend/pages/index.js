import React from "react"
import Head from "next/head"

import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
// import useMediaQuery from "@mui/material/useMediaQuery";
import { styled, useTheme } from "@mui/material/styles"
// import {
//   LazyLoadImage,
//   LazyLoadComponent,
// } from "react-lazy-load-image-component";

// import Link from "../src/Link";
// import theme from "../src/theme"

export default function Index(props) {
  const theme = useTheme()

  // const matchesMD = useMediaQuery(theme.breakpoints.down("lg"));
  // const matchesSM = useMediaQuery(theme.breakpoints.down("md"));
  // const matchesXS = useMediaQuery(theme.breakpoints.down("sm"));

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
        <Typography variant="h1">Hello!</Typography>
      </Grid>
    </Grid>
  )
}
