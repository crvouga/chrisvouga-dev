import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeOptions,
} from "@material-ui/core/styles";
import { fontFamilies } from "./fonts";

export type ThemeType = "light" | "dark";

export const castThemeType = (themeType: any): ThemeType => {
  if (themeType === "light" || themeType === "dark") {
    return themeType;
  }
  throw new Error("failed to cast theme type");
};

const themeOptions: ThemeOptions = {
  palette: {
    type: "light",
  },
  typography: {
    fontWeightRegular: "bold",
    fontFamily: [fontFamilies.heading, fontFamilies.body, "sans-serif"].join(
      ","
    ),
    button: {
      fontFamily: fontFamilies.body,
    },
    body1: {
      fontFamily: fontFamilies.body,
    },
    body2: {
      fontFamily: fontFamilies.body,
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
