import React from "react";
import MuiAvatar, { AvatarProps } from "@material-ui/core/Avatar";
import Image from "next/image";

export const Avatar = ({
  alt,
  src,
  priority,
  ...avatarProps
}: { priority?: boolean; alt: string; src: string } & AvatarProps) => {
  return (
    <MuiAvatar {...avatarProps}>
      <Image
        priority={priority}
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
      />
    </MuiAvatar>
  );
};
