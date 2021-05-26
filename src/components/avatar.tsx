import React from "react";
import MuiAvatar, { AvatarProps } from "@material-ui/core/Avatar";
import Image from "next/image";

export const Avatar = ({
  alt,
  src,
  ...avatarProps
}: { alt: string; src: string } & AvatarProps) => {
  return (
    <MuiAvatar {...avatarProps}>
      <Image src={src} alt={alt} layout="fill" objectFit="cover" />
    </MuiAvatar>
  );
};
