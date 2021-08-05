import React from "react";
import { Avatar } from "../../components/avatar";
import { IMAGE_ASSETS_SRC } from "../../data-access/assets";

export const Logo = () => {
  return (
    <Avatar
      priority
      src={IMAGE_ASSETS_SRC.logos.personal.src}
      alt="chris vouga logo"
      style={{
        backgroundColor: "#efefef",
        width: "150px",
        height: "150px",
      }}
    />
  );
};
