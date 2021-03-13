import "@fontsource/raleway";
import "@fontsource/roboto";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeOptions,
} from "@material-ui/core/styles";

const fontFamilies = {
  heading: "Raleway",
  body: "Roboto",
};

const themeOptions: ThemeOptions = {
  palette: {
    type: "light",
  },

  typography: {
    fontWeightRegular: "bold",

    fontFamily: [fontFamilies.body, fontFamilies.heading].join(","),

    h1: {
      fontFamily: fontFamilies.heading,
    },

    h2: {
      fontFamily: fontFamilies.heading,
    },

    h3: {
      fontFamily: fontFamilies.heading,
    },

    h4: {
      fontFamily: fontFamilies.heading,
    },

    h5: {
      fontFamily: fontFamilies.heading,
    },

    h6: {
      fontFamily: fontFamilies.heading,
    },
  },

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
