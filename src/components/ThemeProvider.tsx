import { CssBaseline, IconButton } from "@material-ui/core";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
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

const createTheme = (themeType: ThemeType) => {
  switch (themeType) {
    case "dark":
      return createMuiTheme({
        palette: {
          type: "dark",
          background: {
            default: "#232323",
          },
        },
      });

    case "light":
      return createMuiTheme({
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
  const { themeType } = useThemeState();
  return (
    <MuiThemeProvider theme={createTheme(themeType)}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}
