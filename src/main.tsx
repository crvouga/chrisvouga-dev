import '@fontsource/inter';
import { CssBaseline, CssVarsProvider, getInitColorSchemeScript } from "@mui/joy";
import { ViteReactSSG } from "vite-react-ssg/single-page";
import theme from "../src/theme";
import { App } from "./app";



function Root() {
    return (
        <CssVarsProvider
            defaultMode="dark"
            theme={theme}
            colorSchemeSelector="#demo_dark-mode-by-default"
            modeStorageKey="demo_dark-mode-by-default"
            disableNestedContext
        >
            {getInitColorSchemeScript({ defaultMode: 'dark' })}
            <CssBaseline />
            <div id="demo_dark-mode-by-default">
                <App />
            </div>
        </CssVarsProvider>
    );
}

export const createRoot = ViteReactSSG(<Root />);
