import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";

const OPEN_NEW_TAB_PROPS = {
  rel: "noopener noreferrer",
  target: "_blank",
};

export const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      type: "dark",
      primary: green,
    },

    typography: {
      fontWeightRegular: "bold",
      fontFamily: "monospace",
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
        variant: "outlined",
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
