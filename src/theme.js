import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    green: {
      main: "#096a38",
      light: "#0ca858",
    },
    gold: {
      main: "#cfb74e",
      dark: "#978030",
    },
  },
  typography: {
    fontFamily: [
      "Cairo",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

export default theme;
