import React, { useState, useEffect } from "react"

import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Button from "@mui/material/Button"
import SwipeableDrawer from "@mui/material/SwipeableDrawer"
import IconButton from "@mui/material/IconButton"
import List from "@mui/material/List"
import ListItemText from "@mui/material/ListItemText"
import useMediaQuery from "@mui/material/useMediaQuery"
import ListItemButton from "@mui/material/ListItemButton"

import { styled, useTheme } from "@mui/material/styles"

import MenuIcon from "@mui/icons-material/Menu"
import VTLogo from "../../public/assets/VTLogo"

const TabContainer = styled(Tabs)({
  marginLeft: "auto",
})

const StyledTab = styled(Tab)(({ theme }) => ({
  ...theme.typography.tab,
  minWidth: 10,
  marginLeft: "50px",
  marginRight: "50px",
}))

const DrawerIcon = styled(MenuIcon)(({ theme }) => ({
  height: "50px",
  width: "50px",
  color: theme.palette.primary.main,
}))

const DrawerIconContainer = styled(IconButton)({
  marginLeft: "auto",
  "&:hover": {
    backgroundColor: "transparent",
  },
})

const DrawerStyle = styled(SwipeableDrawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    backgroundColor: theme.palette.primary.main,
  },
}))

const DrawerItemText = styled(ListItemText)(({ theme }) => ({
  ...theme.typography.tab,
  color: "white",
  opacity: 0.7,
}))

const DrawerItemSelected = styled(ListItemButton)({
  "& .MuiListItem-selected": {
    "& .MuiListItemText-root": {
      opacity: 1,
    },
  },
})

export default function Header({ value, setValue }) {
  const theme = useTheme()
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)
  const matchesMD = useMediaQuery(theme.breakpoints.down("lg"))

  const [openDrawer, setOpenDrawer] = useState(false)

  const handleChange = (e, newValue) => {
    setValue(newValue)
  }

  const routes = [
    { name: "Home", link: "/", activeIndex: 0 },
    { name: "About", link: "/about", activeIndex: 1 },
    { name: "Shows", link: "/shows", activeIndex: 2 },
    { name: "Merch", link: "/merch", activeIndex: 3 },
  ]

  const path = typeof window !== "undefined" ? window.location.pathname : null

  const activeIndex = () => {
    const found = routes.find(({ link }) => link === path)

    if (found === undefined) {
      setValue(false)
    } else {
      setValue(found.activeIndex)
    }
  }

  useEffect(() => {
    activeIndex()
  }, [path])

  const tabs = (
    <>
      <TabContainer
        value={value}
        onChange={handleChange}
        indicatorColor=""
        textColor="inherit"
        centered
      >
        {routes.map((route, index) => (
          <StyledTab
            key={`${route.link}${index}`}
            href={route.link}
            label={route.name}
          />
        ))}
      </TabContainer>
    </>
  )

  const drawer = (
    <>
      <DrawerStyle
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
      >
        <List disablePadding>
          {routes.map((route) => (
            <DrawerItemSelected
              key={`ac${route}${route.activeIndex}`}
              divider
              href={route.link}
              selected={value === route.activeIndex}
              onClick={() => {
                setOpenDrawer(false)
                setValue(route.activeIndex)
              }}
            >
              <DrawerItemText disableTypography>{route.name}</DrawerItemText>
            </DrawerItemSelected>
          ))}
        </List>
      </DrawerStyle>
      <DrawerIconContainer
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
        size="large"
      >
        <DrawerIcon />
      </DrawerIconContainer>
    </>
  )

  return (
    <>
      <AppBar color="transparent" elevation={0} position="static">
        <Toolbar disableGutters>
          <Button
            href="/"
            disableRipple
            onClick={() => setValue(0)}
            sx={{
              textDecorationColor: "transparent",
              "&:hover": {
                textDecorationColor: "transparent",
              },
            }}
          >
            <VTLogo />
          </Button>
          {matchesMD ? drawer : tabs}
        </Toolbar>
      </AppBar>
    </>
  )
}
