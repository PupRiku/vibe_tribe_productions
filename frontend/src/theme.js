import { createTheme } from "@mui/material/styles"

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#ff0006",
    },
    secondary: {
      main: "#c09755",
    },
    yellow: {
      main: "#FFb923",
    },
    grey: {
      main: "#C0C0C0",
    },
    magenta: {
      main: "#FF00FF",
    },
    cyan: {
      main: "#00FFFF",
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
      fontFamily: "Raleway",
      color: "#0F0F0F",
      fontWeight: 700,
      fontSize: "5rem",
    },
    h2: {
      fontFamily: "Raleway",
      fontSize: "3rem",
      fontWeight: 500,
    },
    h3: {
      fontSize: "1.5rem",
      color: "#ff0006",
      fontWeight: 700,
    },
    h4: {
      fontSize: "1.25rem",
      color: "#c09755",
      fontWeight: 700,
    },
    subtitle1: {
      color: "#C0C0C0",
      fontWeight: 300,
      fontStyle: "italic",
    },
    body1: {
      color: "#0F0F0F",
    },
    caption: {
      color: "#C0C0C0",
    },
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
      color: "#0f0f0f",
      textDecorationColor: "transparent",
    },
  },
})

export default theme
