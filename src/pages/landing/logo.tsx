import React from "react";
import { Avatar, AvatarProps } from "../../components/avatar";
import { IMAGE_ASSETS_SRC } from "../../data-access/assets";

export const Logo = (props: AvatarProps) => {
  return (
    <Avatar
      priority
      src={IMAGE_ASSETS_SRC.logos.personal.src}
      alt="chris vouga logo"
      {...props}
    />
  );
};
