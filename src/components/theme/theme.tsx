import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeOptions,
} from "@material-ui/core/styles";
import merge from "deepmerge";

export type ThemeType = "light" | "dark";

export const castThemeType = (themeType: any): ThemeType => {
  if (themeType === "light" || themeType === "dark") {
    return themeType;
  }
  throw new Error("failed to cast theme type");
};

const themeOptions: ThemeOptions = {
  palette: {
    // primary: {
    //   main: "#02A6F2",
    // },
    // secondary: {
    //   main: "#53C1A2",
    // },
  },
  typography: {
    fontWeightRegular: "bold",
    fontFamily: ["Inter", "sans-serif"].join(","),
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
        ".grecaptcha-badge": {
          visibility: "hidden",
        },

        html: {
          scrollBehavior: "smooth",
        },
      },
    },
  },
};

const themeTypeToThemeOptions: { [themeType in ThemeType]: ThemeOptions } = {
  light: {
    palette: {
      type: "light",
    },
  },
  dark: {
    palette: {
      type: "dark",
    },
  },
};

export const createTheme = (themeType: ThemeType) => {
  return responsiveFontSizes(
    createMuiTheme(merge(themeOptions, themeTypeToThemeOptions[themeType]))
  );
};
