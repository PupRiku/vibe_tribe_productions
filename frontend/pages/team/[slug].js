import React from "react"
import Head from "next/head"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Chip from "@mui/material/Chip"
import IconButton from "@mui/material/IconButton"

import { fetchAPI } from "../../lib/api"
import { getStrapiMedia } from "../../lib/media"

import ShowCard from "../../src/components/ShowCard"

import Twitter from "../../public/assets/Twitter"
import Instagram from "../../public/assets/Instagram"
import TikTok from "../../public/assets/TikTok"

const Team = ({ games, shows, person }) => {
  return (
    <Grid container direction="column">
      <Head>
        <title key="title">{`About Us - ${person.attributes.firstName} ${person.attributes.lastName}`}</title>
        <meta
          name="description"
          key="description"
          content="Learn more about the Vibe Tribe Productions team!"
        />
        <meta
          property="og:title"
          content={`About Us - ${person.attributes.firstName} ${person.attributes.lastName}`}
          key="og:title"
        />
        <meta
          property="og:url"
          key="og:url"
          content={`http://www.vibetribeproductions.com/team/${person.attributes.slug}`}
        />
        <link
          rel="canonical"
          key="canonical"
          href={`http://www.vibetribeproductions.com/team/${person.attributes.slug}`}
        />
      </Head>
      <Grid item>
        <Grid container direction="column" alignItems="center">
          <Grid item sx={{ marginBottom: "3rem" }}>
            <Typography variant="h1">About the Vibe Tribe</Typography>
          </Grid>
          <Grid item sx={{ marginBottom: "3rem" }}>
            <Typography variant="h2">
              {person.attributes.firstName} {person.attributes.lastName}
            </Typography>
          </Grid>
          <Grid container justifyContent="center">
            <Grid item sx={{ marginBottom: "3rem", marginLeft: "3rem" }}>
              <img
                src={getStrapiMedia(person.attributes.headshot)}
                style={{ height: "25rem" }}
              ></img>
            </Grid>
            <Grid item sx={{ marginBottom: "3rem", marginLeft: "3rem" }}>
              <Grid container direction="column" sx={{ width: "50rem" }}>
                <Grid item>
                  <Typography variant="h2">{person.attributes.role}</Typography>
                </Grid>
                <Grid item>
                  {person.attributes.gm_of.data.length !== 0
                    ? person.attributes.gm_of.data.map((game) => (
                        <Chip
                          label={`GM of ${game.attributes.name}`}
                          sx={{
                            margin: "0.5rem",
                            color: game.attributes.text,
                            backgroundColor: game.attributes.color,
                          }}
                          key={`game_${game.id}`}
                        />
                      ))
                    : null}
                </Grid>
                <Grid item>
                  {person.attributes.player_in.data.length !== 0
                    ? person.attributes.player_in.data.map((game) => (
                        <Chip
                          label={`${game.attributes.name}`}
                          sx={{
                            margin: "0.5rem",
                            color: game.attributes.text,
                            backgroundColor: game.attributes.color,
                          }}
                          key={`game_${game.id}`}
                        />
                      ))
                    : null}
                </Grid>
                <Grid item>
                  {person.attributes.host_of.data.length !== 0
                    ? person.attributes.host_of.data.map((game) => (
                        <Chip
                          label={`${game.attributes.name}`}
                          sx={{
                            margin: "0.5rem",
                            color: game.attributes.text,
                            backgroundColor: game.attributes.color,
                          }}
                          key={`game_${game.id}`}
                        />
                      ))
                    : null}
                </Grid>
                <Grid item>
                  <Grid container>
                    <Grid item>
                      {person.attributes.twitter ? (
                        <IconButton
                          href={person.attributes.twitter}
                          target="_blank"
                        >
                          <Twitter />
                        </IconButton>
                      ) : null}
                    </Grid>
                    <Grid item>
                      {person.attributes.instagram ? (
                        <IconButton
                          href={person.attributes.instagram}
                          target="_blank"
                        >
                          <Instagram />
                        </IconButton>
                      ) : null}
                    </Grid>
                    <Grid item>
                      {person.attributes.tiktok ? (
                        <IconButton
                          href={person.attributes.tiktok}
                          target="_blank"
                        >
                          <TikTok />
                        </IconButton>
                      ) : null}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            sx={{
              marginBottom: "3rem",
              marginLeft: "3rem",
              marginRight: "3rem",
            }}
          >
            <Typography variant="body1">{person.attributes.bio}</Typography>
          </Grid>
          <Grid container direction="column" alignItems="center">
            {person.attributes.player_in.data.length !== 0 ? (
              <Grid item sx={{ marginBottom: "3rem" }}>
                <Typography variant="h2">Player Characters</Typography>
              </Grid>
            ) : null}
            <Grid
              container
              justifyContent="center"
              sx={{ marginBottom: "2rem" }}
            >
              {person.attributes.player_in.data.length !== 0
                ? person.attributes.player_in.data.map((game) => {
                    const show = games.find((show) => show.id === game.id)
                    return (
                      <ShowCard
                        show={show}
                        role="player"
                        key={`gamePlayer_${game.id}`}
                      />
                    )
                  })
                : null}
            </Grid>
          </Grid>
          <Grid container direction="column" alignItems="center">
            {person.attributes.gm_of.data.length !== 0 ? (
              <Grid item sx={{ marginBottom: "3rem" }}>
                <Typography variant="h2">Games Running</Typography>
              </Grid>
            ) : null}
            <Grid
              container
              justifyContent="center"
              sx={{ marginBottom: "2rem" }}
            >
              {person.attributes.gm_of.data.length !== 0
                ? person.attributes.gm_of.data.map((game, i) => {
                    const show = games.find((show) => show.id === game.id)
                    return (
                      <ShowCard
                        show={show}
                        role="gm"
                        key={`gameGM_${game.id}`}
                      />
                    )
                  })
                : null}
            </Grid>
          </Grid>
          <Grid
            container
            direction="column"
            alignItems="center"
            sx={{ marginBottom: "2rem" }}
          >
            {person.attributes.host_of.data.length !== 0 ? (
              <Grid item sx={{ marginBottom: "3rem" }}>
                <Typography variant="h2">Shows Hosting</Typography>
              </Grid>
            ) : null}
            <Grid container justifyContent="center">
              {person.attributes.host_of.data.length !== 0
                ? person.attributes.host_of.data.map((show) => {
                    const pod = shows.find((podcast) => podcast.id === show.id)
                    return (
                      <ShowCard
                        show={pod}
                        role="host"
                        key={`showHost_${show.id}`}
                      />
                    )
                  })
                : null}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export async function getStaticPaths() {
  const peopleRes = await fetchAPI("/people", { fields: ["slug"] })

  return {
    paths: peopleRes.data.map((person) => ({
      params: {
        slug: person.attributes.slug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const [gamesRes] = await Promise.all([fetchAPI("/games", { populate: "*" })])
  const [showsRes] = await Promise.all([fetchAPI("/shows", { populate: "*" })])
  const peopleRes = await fetchAPI("/people", {
    filters: {
      slug: params.slug,
    },
    populate: "*",
  })

  return {
    props: {
      games: gamesRes.data,
      shows: showsRes.data,
      person: peopleRes.data[0],
    },
    revalidate: 1,
  }
}

export default Team
