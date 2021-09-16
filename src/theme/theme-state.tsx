import constate from "constate";
import { useEffect, useState } from "react";
import { castThemeColor, ThemeColor } from "./theme-color";
import { castThemeType, ThemeType } from "./theme-type";

const THEME_TYPE_KEY = "theme-type";
const THEME_COLOR_KEY = "theme-color";

export const [ThemeStateContextProvider, useThemeStateContext] = constate(
  () => {
    const [themeType, setThemeType] = useState<ThemeType>("system");
    const [themeColor, setThemeColor] = useState<ThemeColor>("green");

    const setThemeColorPersisted = (themeColor: ThemeColor) => {
      localStorage.setItem(THEME_COLOR_KEY, themeColor);
      setThemeColor(themeColor);
    };

    const setThemeTypePersisted = (themeType: ThemeType) => {
      localStorage.setItem(THEME_TYPE_KEY, themeType);
      setThemeType(themeType);
    };

    useEffect(() => {
      const themeType = castThemeType(
        localStorage.getItem(THEME_TYPE_KEY) ?? "system"
      );
      const themeColor = castThemeColor(
        localStorage.getItem(THEME_COLOR_KEY) ?? "green"
      );

      setThemeType(themeType);
      setThemeColor(themeColor);
    }, []);

    return {
      themeType,
      themeColor,
      setThemeType: setThemeTypePersisted,
      setThemeColor: setThemeColorPersisted,
    };
  }
);
