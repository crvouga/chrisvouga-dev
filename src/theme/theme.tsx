import { createMuiTheme, ThemeOptions } from "@material-ui/core/styles";
import { mergeDeepRight } from "ramda";

export type ThemeType = "light" | "dark";

export const castThemeType = (themeType: any): ThemeType => {
  if (themeType === "light" || themeType === "dark") {
    return themeType;
  }
  throw new Error("failed to cast theme type");
};

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: "#02A6F2",
    },
    secondary: {
      main: "#53C1A2",
    },
  },
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
  },
  props: {
    MuiCard: {
      // variant: "outlined",
      elevation: 4,
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
  return createMuiTheme(
    mergeDeepRight<ThemeOptions, any>(
      themeOptions,
      themeTypeToThemeOptions[themeType]
    )
  );
};
