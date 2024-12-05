import {
  CssBaseline,
  CssVarsProvider,
  getInitColorSchemeScript,
} from "@mui/joy";
import { App } from "./app";

export function Root() {
  return (
    <CssVarsProvider
      defaultMode="dark"
      colorSchemeSelector="#demo_dark-mode-by-default"
      modeStorageKey="demo_dark-mode-by-default"
      disableNestedContext
      defaultColorScheme="dark"
    >
      {getInitColorSchemeScript({ defaultMode: "dark" })}
      <CssBaseline />
      <div id="demo_dark-mode-by-default">
        <App />
      </div>
    </CssVarsProvider>
  );
}
