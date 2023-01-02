import { createTheme } from "@mui/material/styles"

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#C16200",
    },
    secondary: {
      main: "#40356F",
    },
    blue: {
      main: "#69E9F5",
    },
    grey: {
      main: "#4D4D4D",
    },
    black: {
      main: "#0F0F0F",
    },
    white: {
      main: "#EBEBEB",
    },
    error: {
      main: "#B00020",
    },
    background: {
      default: "#EBEBEB",
    },
  },
  typography: {
    h1: {
      color: "#C16200",
    },
    h2: {
      fontSize: "2.5rem",
      color: "#C16200",
      fontWeight: 700,
    },
    h3: {
      fontSize: "1.5rem",
      color: "#C16200",
      fontWeight: 700,
    },
    h4: {
      fontSize: "1.25rem",
      color: "#40356F",
      fontWeight: 700,
    },
    subtitle1: {
      color: "#4D4D4D",
      fontWeight: 300,
      fontStyle: "italic",
    },
    body1: {
      color: "#0F0F0F",
    },
    caption: {
      color: "#4D4D4D",
    },
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
      color: "#EBEBEB",
      textDecoration: "none",
    },
  },
})

export default theme
