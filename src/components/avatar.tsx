import React from "react";
import MuiAvatar, {
  AvatarProps as MuiAvatarProps,
} from "@material-ui/core/Avatar";
import Image from "next/image";

export type AvatarProps = MuiAvatarProps;

export const Avatar = ({
  alt,
  src,
  priority,
  ...avatarProps
}: {
  priority?: boolean;
  alt: string;
  src: string;
} & MuiAvatarProps) => {
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
