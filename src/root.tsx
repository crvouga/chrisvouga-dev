import {
  CssBaseline,
  CssVarsProvider,
  getInitColorSchemeScript,
} from "@mui/joy";
import { App } from "./app";

export function Root() {
  return (
    <CssVarsProvider
      colorSchemeSelector="#dark-mode-by-default"
      modeStorageKey="dark-mode-by-default"
      disableNestedContext
      defaultColorScheme="dark"
    >
      {getInitColorSchemeScript({ defaultMode: "dark" })}
      <CssBaseline />
      <div id="dark-mode-by-default">
        <App />
      </div>
    </CssVarsProvider>
  );
}
