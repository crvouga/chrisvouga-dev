import { CssBaseline } from "@material-ui/core";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { PropsWithChildren } from "react";

const theme = createMuiTheme({
  palette: {
    type: "light",
  },
});

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
