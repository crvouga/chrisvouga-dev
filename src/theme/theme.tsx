import {
  createTheme as createMuiTheme,
  responsiveFontSizes,
} from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";

const OPEN_NEW_TAB_PROPS = {
  rel: "noopener noreferrer",
  target: "_blank",
};

const createTheme = ({ mode }: { mode: "light" | "dark" }) => {
  return responsiveFontSizes(
    createMuiTheme({
      palette: {
        type: mode,
        primary: green,
      },

      typography: {
        fontWeightRegular: "bold",
        fontFamily: "monospace",
      },

      props: {
        MuiGrid: {
          spacing: 2,
        },
        MuiLink: {
          underline: "none",
          color: "textPrimary",
          ...OPEN_NEW_TAB_PROPS,
        },
        MuiCard: {
          // elevation: 6,
          variant: "outlined",
        },
      },

      overrides: {
        MuiButton: {
          root: {
            fontWeight: "bold",
          },
        },
        MuiCssBaseline: {
          "@global": {
            html: {
              scrollBehavior: "smooth",
              fontWeight: "bold",
            },
          },
        },
      },
    })
  );
};

export const lightTheme = createTheme({ mode: "light" });

export const darkTheme = createTheme({ mode: "dark" });
