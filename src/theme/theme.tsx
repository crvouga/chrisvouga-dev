import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

const OPEN_NEW_TAB_PROPS = {
  rel: "noopener noreferrer",
  target: "_blank",
};

export const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      type: "dark",
    },

    typography: {
      fontWeightRegular: "bold",
    },

    props: {
      MuiGrid: {
        spacing: 2,
      },
      MuiLink: {
        underline: "none",
        color: "textPrimary",
        ...OPEN_NEW_TAB_PROPS,
      },
      MuiCard: {
        // elevation: 6,
      },
    },

    overrides: {
      MuiButton: {
        root: {
          fontWeight: "bold",
        },
      },
      MuiCssBaseline: {
        "@global": {
          html: {
            scrollBehavior: "smooth",
            fontWeight: "bold",
          },
        },
      },
    },
  })
);
