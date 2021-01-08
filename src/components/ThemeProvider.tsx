import { CssBaseline, IconButton } from "@material-ui/core";
import {
  createMuiTheme,
  MuiThemeProvider,
  useTheme,
  ThemeOptions,
} from "@material-ui/core/styles";
import { PropsWithChildren, useEffect, useState } from "react";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Brightness2Icon from "@material-ui/icons/Brightness2";

interface IThemeProviderProps extends PropsWithChildren<{}> {}

type ThemeType = "light" | "dark";

const castThemeType = (themeType: any): ThemeType => {
  if (themeType === "light" || themeType === "dark") {
    return themeType;
  }
  throw new Error("failed to cast theme mode");
};

export const useThemeState = () => {
  const THEME_TYPE_KEY = "theme-type";

  const [themeType, setThemeType] = useState<ThemeType>("dark");

  const setThemeTypePersisted = (mode: ThemeType) => {
    localStorage.setItem(THEME_TYPE_KEY, mode);
    setThemeType(mode);
  };

  useEffect(() => {
    const mode = castThemeType(localStorage.getItem(THEME_TYPE_KEY) || "light");
    setThemeType(mode);
  }, []);

  const toggleThemeType = () => {
    setThemeTypePersisted(themeType === "dark" ? "light" : "dark");
  };

  return {
    themeType,
    setThemeType: setThemeTypePersisted,
    toggleThemeType,
  };
};

export const usePersonalLogoSrc = () => {
  const theme = useTheme();
  switch (theme.palette.type) {
    case "dark":
      return "/personal-logo-dark.svg";
    default:
      return "/personal-logo-light.svg";
  }
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

const createTheme = (themeType: ThemeType) => {
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

export function ThemeTypeToggleButton() {
  const { themeType, toggleThemeType } = useThemeState();

  return (
    <IconButton onClick={toggleThemeType}>
      {themeType === "light" && <WbSunnyIcon />}
      {themeType === "dark" && <Brightness2Icon />}
    </IconButton>
  );
}

export default function ThemeProvider(props: IThemeProviderProps) {
  const { children } = props;

  return (
    <MuiThemeProvider theme={createTheme("light")}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}
