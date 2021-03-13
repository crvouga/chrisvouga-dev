import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

export const theme = responsiveFontSizes(
  createMuiTheme({
    typography: {
      fontFamily: "'Roboto', 'Raleway'",

      h1: {
        fontFamily: "Raleway",
      },

      h2: {
        fontFamily: "Raleway",
      },

      h3: {
        fontFamily: "Raleway",
      },

      h4: {
        fontFamily: "Raleway",
      },

      h5: {
        fontFamily: "Raleway",
      },

      h6: {
        fontFamily: "Raleway",
      },
    },

    props: {
      MuiCard: {
        elevation: 6,
      },
    },

    overrides: {
      MuiCssBaseline: {
        "@global": {
          html: {
            scrollBehavior: "smooth",
          },
        },
      },
    },
  })
);
