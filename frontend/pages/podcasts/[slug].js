import React from "react"
import Head from "next/head"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Chip from "@mui/material/Chip"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"

import GMCard from "../../src/components/GMCard"
import PlayerCard from "../../src/components/PlayerCard"
import HostCard from "../../src/components/HostCard"

import { fetchAPI } from "../../lib/api"
import { getStrapiMedia } from "../../lib/media"

const Podcast = ({ games, show, characters, people }) => {
  console.log(show)

  let hosts = []

  show.attributes.cast.data.forEach((host) => {
    const filtered = people.filter((person) => host.id === person.id)
    hosts.push(filtered.pop())
  })

  return (
    <Grid container direction="column">
      <Head>
        <title key="title">{`Our Games and Shows - ${show.attributes.name}`}</title>
        <meta
          name="description"
          key="description"
          content="Learn more about the Vibe Tribe Productions shows!"
        />
        <meta
          property="og:title"
          content={`About Us - ${show.attributes.name}`}
          key="og:title"
        />
        <meta
          property="og:url"
          key="og:url"
          content={`http://www.vibetribeproductions.com/team/${show.attributes.name}`}
        />
        <link
          rel="canonical"
          key="canonical"
          href={`http://www.vibetribeproductions.com/team/${show.attributes.name}`}
        />
      </Head>
      <Grid item>
        <Grid container direction="column" alignItems="center">
          <Grid item sx={{ marginBottom: "3rem" }}>
            <Typography variant="h1">Our Games and Shows</Typography>
          </Grid>
          <Grid item sx={{ marginBottom: "3rem" }}>
            <Typography variant="h2">{show.attributes.name}</Typography>
          </Grid>
          <Grid container justifyContent="center">
            <Grid item sx={{ marginBottom: "3rem", marginLeft: "3rem" }}>
              <img
                src={getStrapiMedia(show.attributes.image)}
                style={{ height: "25rem" }}
              ></img>
            </Grid>
            <Grid item sx={{ marginBottom: "3rem", marginLeft: "3rem" }}>
              <Grid container direction="column" sx={{ width: "50rem" }}>
                <Grid item>
                  {show.attributes.season1 ? (
                    <Chip
                      label={"Season 1"}
                      sx={{
                        padding: 0,
                        marginRight: "0.5rem",
                        marginBottom: "0.5rem",
                        color: "#ffffff",
                        backgroundColor: "green",
                      }}
                    />
                  ) : null}
                  {show.attributes.season2 ? (
                    <Chip
                      label={"Season 2"}
                      sx={{
                        padding: 0,
                        marginRight: "0.5rem",
                        marginBottom: "0.5rem",
                        color: "#000000",
                        backgroundColor: "#ffff00",
                      }}
                    />
                  ) : null}
                </Grid>
                <Grid item>
                  <Typography variant="body1">
                    {show.attributes.description}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container direction="column" alignItems="center">
            <Grid item sx={{ marginBottom: "3rem" }}>
              <Typography variant="h2">Hosts</Typography>
            </Grid>
            <Grid container justifyContent="center">
              {hosts.map((host) => {
                return (
                  <Grid item key={`host_${host.id}`}>
                    <HostCard person={host} />
                  </Grid>
                )
              })}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export async function getStaticPaths() {
  const showRes = await fetchAPI("/shows", { fields: ["slug"] })

  return {
    paths: showRes.data.map((show) => ({
      params: {
        slug: show.attributes.slug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const [peopleRes] = await Promise.all([
    fetchAPI("/people", { populate: "*" }),
  ])
  const [gamesRes] = await Promise.all([fetchAPI("/games", { populate: "*" })])
  const [charactersRes] = await Promise.all([
    fetchAPI("/characters", { populate: "*" }),
  ])
  const showsRes = await fetchAPI("/shows", {
    filters: {
      slug: params.slug,
    },
    populate: "*",
  })

  return {
    props: {
      people: peopleRes.data,
      show: showsRes.data[0],
      characters: charactersRes.data,
      games: gamesRes.data,
    },
    revalidate: 1,
  }
}

export default Podcast
