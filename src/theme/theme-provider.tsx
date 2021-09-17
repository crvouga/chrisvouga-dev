import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { PropsWithChildren, useMemo } from "react";
import useDarkMode from "use-dark-mode";
import { THEME_MAP } from "./theme";
import { useThemeStateContext } from "./theme-state";

const useTheme = () => {
  const { themeType, themeColor } = useThemeStateContext();

  const darkMode = useDarkMode();

  return useMemo(() => {
    const { dark: darkTheme, light: lightTheme } = THEME_MAP[themeColor];

    const systemTheme = darkMode.value ? darkTheme : lightTheme;

    const theme =
      themeType === "dark"
        ? darkTheme
        : themeType === "light"
        ? lightTheme
        : themeType === "system"
        ? systemTheme
        : systemTheme;

    return theme;
  }, [themeType, themeColor, darkMode.value]);
};

export const ThemeProvider = ({ children }: PropsWithChildren<{}>) => {
  const theme = useTheme();

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
