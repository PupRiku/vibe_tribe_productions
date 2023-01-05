import React from "react"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import useMediaQuery from "@mui/material/useMediaQuery"
import { styled, useTheme } from "@mui/material/styles"

import theme from "../../src/theme"
import { fetchAPI } from "../../lib/api"

const About = () => {
  const theme = useTheme()

  const matchesMD = useMediaQuery(theme.breakpoints.down("lg"))
  const matchesSM = useMediaQuery(theme.breakpoints.down("md"))
  const matchesXS = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <Grid container>
      <Grid item>
        <Typography variant="h1">About Us</Typography>
      </Grid>
    </Grid>
  )
}

export default About
