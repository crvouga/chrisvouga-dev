import { Avatar, AvatarProps, Link } from "@material-ui/core";
import React from "react";

const PERSONAL_WEBSITE_URL = "https://chrisvouga.dev";
const LOGO_URL = `${PERSONAL_WEBSITE_URL}/personal-logo-light.svg`;

const Logo = (props: AvatarProps) => {
  return (
    <Link href={PERSONAL_WEBSITE_URL}>
      <Avatar src={LOGO_URL} {...props} />
    </Link>
  );
};

export default Logo;
