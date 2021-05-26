import { Paper, Theme, useTheme } from "@material-ui/core";
import React from "react";
import { Avatar } from "../../components/avatar";
import { IMAGE_ASSETS_SRC } from "../../data-access/assets";

const AVATAR_SIZE = (theme: Theme) =>
  `calc(2 * ${theme.typography.h1.fontSize})`;

export const LogoAvatar = () => {
  const theme = useTheme();
  return (
    <Paper
      //@ts-ignore
      component={Avatar}
      style={{
        background: theme.palette.background.paper,
        width: AVATAR_SIZE(theme),
        height: AVATAR_SIZE(theme),
      }}
      src={IMAGE_ASSETS_SRC.logos.personalLight.src}
      alt="chris vouga logo"
    />
  );
};
