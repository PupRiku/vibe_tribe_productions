import React from "react"
import Link from "../Link"
import Grid from "@mui/material/Grid"
import { styled, useTheme } from "@mui/material/styles"
import useMediaQuery from "@mui/material/useMediaQuery"

import VTLogo from "../../public/assets/VTLogo"
import theme from "../theme"

const StyledFooter = styled("footer")(({ theme }) => ({
  display: "flex",
  backgroundColor: theme.palette.grey.main,
  width: "100%",
  zIndex: 1302,
  position: "relative",
}))

const Adornment = styled("svg")(({ theme }) => ({
  width: "33em",
  [theme.breakpoints.down("lg")]: {
    width: "21em",
  },
  [theme.breakpoints.down("sm")]: {
    width: "15em",
  },
}))

const MainContainer = styled(Grid)({
  position: "absolute",
})

const StyledLink = styled(Grid)({
  color: "black",
  fontFamily: "Roboto",
  fontSize: "0.75rem",
  fontWeight: 600,
  textDecoration: "none",
})

const GridItem = styled(Grid)({
  marginLeft: "3em",
  marginTop: "3em",
})

export default function Footer({ value, setValue }) {
  const theme = useTheme()
  const matchesLG = useMediaQuery(theme.breakpoints.up("lg"))

  return (
    <StyledFooter>
      {matchesLG ? (
        <MainContainer container justifyContent="center">
          <GridItem item>
            <Grid container direction="column" spacing={2} m={0}>
              <StyledLink
                item
                component={"a"}
                href="/"
                onClick={() => setValue(0)}
              >
                Home
              </StyledLink>
            </Grid>
          </GridItem>
          <GridItem item>
            <Grid container direction="column" spacing={2} m={0}>
              <StyledLink
                item
                component={"a"}
                href="/about"
                onClick={() => setValue(1)}
              >
                About Us
              </StyledLink>
              <StyledLink
                item
                component={"a"}
                href="/about"
                onClick={() => setValue(1)}
              >
                Game Masters
              </StyledLink>
              <StyledLink
                item
                component={"a"}
                href="/about"
                onClick={() => setValue(1)}
              >
                Players & Cast
              </StyledLink>
              <StyledLink
                item
                component={"a"}
                href="/about"
                onClick={() => setValue(1)}
              >
                Production Team
              </StyledLink>
              <StyledLink
                item
                component={"a"}
                href="/about"
                onClick={() => setValue(1)}
              >
                Join Us!
              </StyledLink>
            </Grid>
          </GridItem>
          <GridItem item>
            <Grid container direction="column" spacing={2} m={0}>
              <StyledLink
                item
                component={"a"}
                href="/shows"
                onClick={() => setValue(2)}
              >
                A Walk Among Gods
              </StyledLink>
              <StyledLink
                item
                component={"a"}
                href="/shows"
                onClick={() => setValue(2)}
              >
                Brave New Wild
              </StyledLink>
              <StyledLink
                item
                component={"a"}
                href="/shows"
                onClick={() => setValue(2)}
              >
                Call of the Deep (Season 2)
              </StyledLink>
              <StyledLink
                item
                component={"a"}
                href="/shows"
                onClick={() => setValue(2)}
              >
                Duskvale
              </StyledLink>
              <StyledLink
                item
                component={"a"}
                href="/shows"
                onClick={() => setValue(2)}
              >
                Neon Memories
              </StyledLink>
              <StyledLink
                item
                component={"a"}
                href="/shows"
                onClick={() => setValue(2)}
              >
                Tavern Tales
              </StyledLink>
              <StyledLink
                item
                component={"a"}
                href="/shows"
                onClick={() => setValue(2)}
              >
                The Academy (Season 2)
              </StyledLink>
              <StyledLink
                item
                component={"a"}
                href="/shows"
                onClick={() => setValue(2)}
              >
                The Bi-Conics
              </StyledLink>
              <StyledLink
                item
                component={"a"}
                href="/shows"
                onClick={() => setValue(2)}
              >
                The Crystal City
              </StyledLink>
              <StyledLink
                item
                component={"a"}
                href="/shows"
                onClick={() => setValue(2)}
              >
                The Diver-Gents
              </StyledLink>
              <StyledLink
                item
                component={"a"}
                href="/shows"
                onClick={() => setValue(2)}
              >
                The Hunt For Glory
              </StyledLink>
              <StyledLink
                item
                component={"a"}
                href="/shows"
                onClick={() => setValue(2)}
              >
                Un-Professional Development
              </StyledLink>
              <StyledLink
                item
                component={"a"}
                href="/shows"
                onClick={() => setValue(2)}
              >
                Season 1 Shows
              </StyledLink>
            </Grid>
          </GridItem>
          <GridItem item>
            <Grid container direction="column" spacing={2} m={0}>
              <StyledLink
                item
                component={"a"}
                href="/merch"
                onClick={() => setValue(3)}
              >
                Store
              </StyledLink>
            </Grid>
          </GridItem>
        </MainContainer>
      ) : null}
      <Adornment
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 175 165"
      >
        <VTLogo />
      </Adornment>
    </StyledFooter>
  )
}
