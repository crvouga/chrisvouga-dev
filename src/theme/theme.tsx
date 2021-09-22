import {
  createTheme as createMuiTheme,
  responsiveFontSizes,
  Theme,
} from "@material-ui/core/styles";
import { THEME_COLORS, ThemeColor, themeColorToColor } from "./theme-color";

const OPEN_NEW_TAB_PROPS = {
  rel: "noopener noreferrer",
  target: "_blank",
};

export const createTheme = ({
  color,
  mode,
}: {
  color: ThemeColor;
  mode: "light" | "dark";
}) => {
  return responsiveFontSizes(
    createMuiTheme({
      palette: {
        type: mode,
        primary: themeColorToColor(color),
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
    }),
  );
};

type ThemeMap = {
  [themeColor in ThemeColor]: {
    light: Theme;
    dark: Theme;
  };
};

export const THEME_MAP = THEME_COLORS.reduce<{}>(
  (allThemes, themeColor) => ({
    ...allThemes,
    [themeColor]: {
      light: createTheme({ color: themeColor, mode: "light" }),
      dark: createTheme({ color: themeColor, mode: "dark" }),
    },
  }),
  {},
) as ThemeMap;
