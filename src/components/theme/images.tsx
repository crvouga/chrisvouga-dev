import { useTheme } from "@material-ui/core/styles";

export const usePersonalLogoSrc = () => {
  const theme = useTheme();
  switch (theme.palette.type) {
    case "dark":
      return "/personal-logo-dark.svg";
    default:
      return "/personal-logo-light.svg";
  }
};
