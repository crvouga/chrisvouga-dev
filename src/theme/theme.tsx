import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

const OPEN_NEW_TAB_PROPS = {
  rel: "noopener noreferrer",
  target: "_blank",
};

export const theme = responsiveFontSizes(
  createMuiTheme({
    typography: {
      fontWeightRegular: "bold",
    },

    props: {
      MuiLink: {
        underline: "none",
        color: "textPrimary",
        ...OPEN_NEW_TAB_PROPS,
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
