import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { PropsWithChildren } from "react";
import { darkTheme, lightTheme } from "./theme";
import useDarkMode from "use-dark-mode";

interface IThemeProviderProps extends PropsWithChildren<{}> {}

export default function ThemeProvider(props: IThemeProviderProps) {
  const { children } = props;

  const darkMode = useDarkMode();

  const theme = darkMode.value ? darkTheme : lightTheme;

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}
