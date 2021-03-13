import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeOptions,
} from "@material-ui/core/styles";
import { fontFamilies, fontFaces } from "./fonts";

const headingConfig = {
  fontFamily: fontFamilies.heading,
};

const themeOptions: ThemeOptions = {
  typography: {
    fontFamily: [fontFamilies.body, fontFamilies.heading, "sans-serif"].join(
      ", "
    ),
    h1: headingConfig,
    h2: headingConfig,
    h3: headingConfig,
    h4: headingConfig,
    h5: headingConfig,
    h6: headingConfig,
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
        "@font-face": fontFaces,

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
