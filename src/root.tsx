import { CssBaseline, CssVarsProvider } from "@mui/joy";
import InitColorSchemeScript from "@mui/joy/InitColorSchemeScript";
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
      <InitColorSchemeScript defaultMode="dark" />
      <CssBaseline />
      <div id="demo_dark-mode-by-default">
        <App />
      </div>
    </CssVarsProvider>
  );
}
