import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { PropsWithChildren } from "react";
import { theme } from "./theme";

interface IThemeProviderProps extends PropsWithChildren<{}> {}

export default function ThemeProvider(props: IThemeProviderProps) {
  const { children } = props;

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}
