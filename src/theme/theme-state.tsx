import constate from "constate";
import { useEffect, useState } from "react";
import { ThemeColor } from "./theme-color";
import { castThemeType, ThemeType } from "./theme-type";

const THEME_TYPE_KEY = "theme-type";

export const [ThemeStateContextProvider, useThemeStateContext] = constate(
  () => {
    const [themeType, setThemeType] = useState<ThemeType>("system");
    const [themeColor] = useState<ThemeColor>("blue");

    const setThemeColorPersisted = (_themeColor: ThemeColor) => {};

    const setThemeTypePersisted = (themeType: ThemeType) => {
      localStorage.setItem(THEME_TYPE_KEY, themeType);
      setThemeType(themeType);
    };

    useEffect(() => {
      const themeType = castThemeType(
        localStorage.getItem(THEME_TYPE_KEY) ?? "system"
      );

      setThemeType(themeType);
    }, []);

    return {
      themeType,
      themeColor,
      setThemeType: setThemeTypePersisted,
      setThemeColor: setThemeColorPersisted,
    };
  }
);
