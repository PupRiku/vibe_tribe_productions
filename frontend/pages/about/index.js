import React from "react"
import Head from "next/head"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import useMediaQuery from "@mui/material/useMediaQuery"
import { styled, useTheme } from "@mui/material/styles"
import { fetchAPI } from "../../lib/api"
import theme from "../../src/theme"

import PersonCard from "../../src/components/PersonCard"

const About = ({ games, shows, people }) => {
  const theme = useTheme()

  const matchesMD = useMediaQuery(theme.breakpoints.down("lg"))
  const matchesSM = useMediaQuery(theme.breakpoints.down("md"))
  const matchesXS = useMediaQuery(theme.breakpoints.down("sm"))

  const gameMasters = people.filter(
    (person) => person.attributes.gm_of.data.length > 0
  )
  gameMasters.sort((a, b) => {
    const nameA = a.attributes.lastName.toUpperCase() // ignore upper and lowercase
    const nameB = b.attributes.lastName.toUpperCase() // ignore upper and lowercase
    if (nameA < nameB) {
      return -1
    }
    if (nameA > nameB) {
      return 1
    }

    // names must be equal
    return 0
  })

  const cast = people.filter(
    (person) =>
      person.attributes.host_of.data.length > 0 ||
      person.attributes.player_in.data.length > 0
  )
  cast.sort((a, b) => {
    const nameA = a.attributes.lastName.toUpperCase() // ignore upper and lowercase
    const nameB = b.attributes.lastName.toUpperCase() // ignore upper and lowercase
    if (nameA < nameB) {
      return -1
    }
    if (nameA > nameB) {
      return 1
    }

    // names must be equal
    return 0
  })

  const production = people.filter((person) => person.attributes.production)
  production.sort((a, b) => {
    const nameA = a.attributes.lastName.toUpperCase() // ignore upper and lowercase
    const nameB = b.attributes.lastName.toUpperCase() // ignore upper and lowercase
    if (nameA < nameB) {
      return -1
    }
    if (nameA > nameB) {
      return 1
    }

    // names must be equal
    return 0
  })

  const executive = people.filter((person) => person.attributes.executive)
  executive.sort((a, b) => {
    const nameA = a.attributes.lastName.toUpperCase() // ignore upper and lowercase
    const nameB = b.attributes.lastName.toUpperCase() // ignore upper and lowercase
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
        <title key="title">About Us - Vibe Tribe Productions</title>
        <meta
          name="description"
          key="description"
          content="Learn more about Vibe Tribe Productions podcasts and meet the people and cast behind our ttrpg games and shows!"
        />
        <meta
          property="og:title"
          content="About Us - Vibe Tribe Productions"
          key="og:title"
        />
        <meta
          property="og:url"
          key="og:url"
          content="http://www.vibetribeproductions.com/about"
        />
        <link
          rel="canonical"
          key="canonical"
          href="http://www.vibetribeproductions.com/about"
        />
      </Head>
      <Grid item>
        <Grid container direction="column" alignItems="center">
          <Grid item sx={{ marginBottom: "3rem" }}>
            <Typography variant="h1">About the Vibe Tribe</Typography>
          </Grid>
          <Grid
            item
            sx={{
              marginBottom: "3rem",
              marginLeft: "3rem",
              marginRight: "3rem",
            }}
          >
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras
              ornare arcu dui vivamus arcu felis bibendum. Imperdiet sed euismod
              nisi porta lorem mollis aliquam ut porttitor. Ut etiam sit amet
              nisl purus in. Nunc sed id semper risus in. Sagittis nisl rhoncus
              mattis rhoncus urna neque. Lobortis elementum nibh tellus molestie
              nunc non blandit massa enim. Tincidunt lobortis feugiat vivamus at
              augue. Viverra orci sagittis eu volutpat odio facilisis mauris
              sit. Dolor sed viverra ipsum nunc aliquet bibendum enim. Aenean
              euismod elementum nisi quis eleifend quam adipiscing vitae. Nunc
              sed id semper risus. Elementum nisi quis eleifend quam adipiscing
              vitae. Phasellus vestibulum lorem sed risus ultricies. Integer
              eget aliquet nibh praesent tristique magna. Risus ultricies
              tristique nulla aliquet enim.
              <br />
              <br />
              Porttitor massa id neque aliquam vestibulum morbi. Gravida neque
              convallis a cras semper auctor. Sed vulputate odio ut enim.
              Consequat nisl vel pretium lectus quam. Sit amet porttitor eget
              dolor morbi non arcu risus. At imperdiet dui accumsan sit amet
              nulla. Quis eleifend quam adipiscing vitae proin sagittis.
              Ultrices eros in cursus turpis. Arcu vitae elementum curabitur
              vitae nunc. Tincidunt eget nullam non nisi est sit amet facilisis.
              <br />
              <br />
              Tellus molestie nunc non blandit massa. Lectus nulla at volutpat
              diam ut venenatis tellus. Gravida arcu ac tortor dignissim
              convallis aenean. Vitae auctor eu augue ut lectus arcu bibendum
              at. Tellus orci ac auctor augue mauris augue. Viverra mauris in
              aliquam sem fringilla ut morbi tincidunt augue. Ipsum dolor sit
              amet consectetur adipiscing. Ultricies lacus sed turpis tincidunt
              id aliquet risus. Eu non diam phasellus vestibulum lorem sed risus
              ultricies. Ac odio tempor orci dapibus ultrices in. Ut ornare
              lectus sit amet est placerat in. Volutpat sed cras ornare arcu dui
              vivamus arcu felis bibendum. Felis bibendum ut tristique et. Erat
              imperdiet sed euismod nisi.
            </Typography>
          </Grid>

          <Grid item sx={{ marginBottom: "3rem" }}>
            <Grid container direction="column" alignItems="center">
              <Grid item sx={{ marginBottom: "3rem" }}>
                <Typography variant="h2">Game Masters</Typography>
              </Grid>
              <Grid container justifyContent="center">
                {gameMasters.map((person) => (
                  <PersonCard person={person} section="gm" isAbout />
                ))}
              </Grid>
            </Grid>
          </Grid>
          <Grid item sx={{ marginBottom: "3rem" }}>
            <Grid container direction="column" alignItems="center">
              <Grid item sx={{ marginBottom: "3rem" }}>
                <Typography variant="h2">Players & Cast</Typography>
              </Grid>
              <Grid container justifyContent="center">
                {cast.map((person) => (
                  <PersonCard person={person} section="cast" isAbout />
                ))}
              </Grid>
            </Grid>
          </Grid>
          <Grid item sx={{ marginBottom: "3rem" }}>
            <Grid container direction="column">
              <Grid item sx={{ marginBottom: "3rem" }}>
                <Typography variant="h2">Production Team</Typography>
              </Grid>
              <Grid container justifyContent="center">
                {production.map((person) => (
                  <PersonCard person={person} section="production" isAbout />
                ))}
              </Grid>
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
  const [peopleRes] = await Promise.all([
    fetchAPI("/people", { populate: "*" }),
  ])

  return {
    props: {
      games: gamesRes.data,
      shows: showsRes.data,
      people: peopleRes.data,
    },
    revalidate: 1,
  }
}

export default About
