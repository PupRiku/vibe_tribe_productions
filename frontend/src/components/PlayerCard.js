import React, { useState } from "react"
import Image from "next/image"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Button from "@mui/material/Button"
import Modal from "@mui/material/Modal"

import { getStrapiMedia } from "../../lib/media"

import ArrowForwardIcon from "@mui/icons-material/ArrowForward"

const PlayerCard = ({ person, character }) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <Grid item sx={{ margin: "1rem" }}>
      <Card
        sx={{
          width: 400,
          minHeight: 400,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardMedia
          sx={{ height: 400 }}
          image={getStrapiMedia(person.attributes.headshot)}
          title={`${person.attributes.lastName} headshot`}
        />
        <CardContent>
          <Typography variant="h3" component="div">
            {`${person.attributes.firstName} ${
              person.attributes.lastName === "."
                ? person.attributes.lastName
                : null
            } as`}
          </Typography>
          <Grid item>
            <Typography variant="h3" component="div">
              {`${character.attributes.name}`}
            </Typography>
          </Grid>
        </CardContent>
        <CardActions sx={{ justifyContent: "flex-end", marginTop: "auto" }}>
          <Grid container direction="column" alignItems="flex-end">
            <Button
              href={`/about/${person.attributes.slug}`}
              endIcon={<ArrowForwardIcon />}
            >
              Bio
            </Button>
            <Button onClick={handleOpen} endIcon={<ArrowForwardIcon />}>
              Character Info
            </Button>
          </Grid>
        </CardActions>
      </Card>
      <Modal open={open} onClose={handleClose}>
        <Grid container direction="column">
          <Grid
            item
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 600,
              bgcolor: "background.paper",
              border: "2px solid #000",
              boxShadow: 24,
              p: 4,
            }}
          >
            <Grid container>
              <Grid item>
                <Image
                  src={getStrapiMedia(character.attributes.image)}
                  alt={`${character.attributes.name} art`}
                  height={225}
                  width={225}
                />
              </Grid>
              <Grid item>
                <Grid
                  container
                  direction="column"
                  justifyContent="space-between"
                  sx={{ height: 225, marginLeft: "0.5rem" }}
                >
                  <Grid item>
                    <Grid container direction="column">
                      <Grid item>
                        <Typography variant="h3" component="div">
                          {`${character.attributes.name}`}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="h4" component="div">
                          {`${character.attributes.role}`}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Button
                          href={`/team/${character.attributes.player.data.attributes.slug}`}
                          sx={{
                            textTransform: "none",
                            padding: 0,
                            color: "#000",
                          }}
                        >
                          {`Played by ${
                            character.attributes.player.data.attributes
                              .firstName
                          } ${
                            character.attributes.player.data.attributes
                              .lastName === "."
                              ? character.attributes.player.data.attributes
                                  .lastName
                              : null
                          }`}
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid container direction="column">
                      <Grid item>
                        <Typography
                          variant="h3"
                          component="div"
                          sx={{
                            color: "#000",
                          }}
                        >
                          {`${character.attributes.game.data.attributes.name}`}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Button
                          endIcon={<ArrowForwardIcon />}
                          sx={{ textTransform: "none", padding: 0 }}
                        >
                          {`About ${character.attributes.game.data.attributes.name}`}
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="body1">
                {character.attributes.bio}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Modal>
    </Grid>
  )
}

export default PlayerCard
