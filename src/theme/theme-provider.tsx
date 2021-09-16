import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { PropsWithChildren } from "react";
import useDarkMode from "use-dark-mode";
import { THEME_MAP } from "./theme";
import { useThemeStateContext } from "./theme-state";

interface IThemeProviderProps extends PropsWithChildren<{}> {}

export const ThemeProvider = (props: IThemeProviderProps) => {
  const { children } = props;

  const { themeType, themeColor } = useThemeStateContext();

  const { dark: darkTheme, light: lightTheme } = THEME_MAP[themeColor];

  const darkMode = useDarkMode();

  const systemTheme = darkMode.value ? darkTheme : lightTheme;

  const theme =
    themeType === "dark"
      ? darkTheme
      : themeType === "light"
      ? lightTheme
      : themeType === "system"
      ? systemTheme
      : systemTheme;

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
