import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

export const theme = responsiveFontSizes(
  createMuiTheme({
    typography: {
      fontWeightRegular: "bold",
    },

    props: {
      MuiLink: {
        underline: "none",
        color: "textPrimary",
      },
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
