import React from "react"
import Image from "next/image"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Chip from "@mui/material/Chip"

import GMCard from "../../src/components/GMCard"
import PlayerCard from "../../src/components/PlayerCard"

import { fetchAPI } from "../../lib/api"
import { getStrapiMedia } from "../../lib/media"

const Game = ({ game, characters, people }) => {
  let players = []
  let pcs = []

  const gameMaster = people.filter(
    (person) => person.id === game.attributes.gameMaster.data.id
  )

  game.attributes.players.data.forEach((player) => {
    const filtered = people.filter((person) => player.id === person.id)
    players.push(filtered.pop())
  })

  game.attributes.characters.data.forEach((pc) => {
    const filtered = characters.filter((char) => pc.id === char.id)
    pcs.push(filtered.pop())
  })

  return (
    <Grid container direction="column">
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
              <Image
                src={getStrapiMedia(game.attributes.image)}
                alt={`${game.attributes.name} logo`}
                style={{ height: "25rem" }}
              ></Image>
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
                        padding: 0,
                        marginRight: "0.5rem",
                        marginBottom: "0.5rem",
                        color: "#ffffff",
                        backgroundColor: "green",
                      }}
                    />
                  ) : null}
                  {game.attributes.season2 ? (
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
            <Grid container justifyContent="center">
              {players.map((player) => {
                const pc = pcs.filter(
                  (char) => char.attributes.player.data.id === player.id
                )
                return (
                  <Grid item key={`char_${player.id}`}>
                    <PlayerCard person={player} character={pc[0]} />
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
      game: gamesRes.data[0],
      characters: charactersRes.data,
      people: peopleRes.data,
    },
    revalidate: 1,
  }
}

export default Game
