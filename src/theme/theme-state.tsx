import { IconButton } from "@material-ui/core";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import { useEffect, useState } from "react";
import { castThemeType, ThemeType } from "./theme";

export const useThemeState = () => {
  const THEME_TYPE_KEY = "theme-type";

  const [themeType, setThemeType] = useState<ThemeType>("dark");

  const setThemeTypePersisted = (mode: ThemeType) => {
    localStorage.setItem(THEME_TYPE_KEY, mode);
    setThemeType(mode);
  };

  useEffect(() => {
    const mode = castThemeType(localStorage.getItem(THEME_TYPE_KEY) || "light");
    setThemeType(mode);
  }, []);

  const toggleThemeType = () => {
    setThemeTypePersisted(themeType === "dark" ? "light" : "dark");
  };

  return {
    themeType,
    setThemeType: setThemeTypePersisted,
    toggleThemeType,
  };
};

export function ThemeTypeToggleButton() {
  const { themeType, toggleThemeType } = useThemeState();

  return (
    <IconButton onClick={toggleThemeType}>
      {themeType === "light" && <WbSunnyIcon />}
      {themeType === "dark" && <Brightness2Icon />}
    </IconButton>
  );
}
