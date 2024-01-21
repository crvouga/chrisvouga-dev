import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "../src/theme";
import { App } from "./app";
import { ViteReactSSG } from "vite-react-ssg/single-page";

function Root() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    );
}

export const createRoot = ViteReactSSG(<Root />);
