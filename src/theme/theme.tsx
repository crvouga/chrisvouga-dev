import { createMuiTheme, ThemeOptions } from "@material-ui/core/styles";

export type ThemeType = "light" | "dark";

export const castThemeType = (themeType: any): ThemeType => {
  if (themeType === "light" || themeType === "dark") {
    return themeType;
  }
  throw new Error("failed to cast theme type");
};

const themeOptions: ThemeOptions = {
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
  },
  props: {
    MuiCard: {
      variant: "outlined",
    },
  },
};

export const createTheme = (themeType: ThemeType) => {
  switch (themeType) {
    case "dark":
      return createMuiTheme({
        ...themeOptions,
        palette: {
          type: "dark",
          primary: {
            main: "#42a5f5",
          },
          background: {
            // default: "#232323",
          },
        },
      });

    case "light":
      return createMuiTheme({
        ...themeOptions,
        palette: {
          type: "light",
        },
      });
  }
};
