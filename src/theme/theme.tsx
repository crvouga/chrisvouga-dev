import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeOptions,
} from "@material-ui/core/styles";

const themeOptions: ThemeOptions = {
  props: {
    MuiLink: {
      variant: "inherit",
      color: "inherit",
      underline: "none",
    },

    MuiCard: {
      elevation: 6,
    },
  },

  overrides: {
    MuiChip: {
      label: {
        fontWeight: "bold",
      },
    },

    MuiButton: {
      label: {
        fontWeight: "bolder",
      },
    },

    MuiCssBaseline: {
      "@global": {
        html: {
          scrollBehavior: "smooth",
        },
      },
    },
  },
};

export const createTheme = () => {
  return responsiveFontSizes(createMuiTheme(themeOptions));
};
