import {
  Avatar,
  AvatarProps,
  Box,
  ButtonBase,
  Link,
  Typography,
} from "@material-ui/core";
import React from "react";

const PERSONAL_WEBSITE_URL = "https://chrisvouga.dev";
const LOGO_URL = `${PERSONAL_WEBSITE_URL}/personal-logo-light.svg`;

const PersonalAttribution = (props: AvatarProps) => {
  return (
    <Link color="textSecondary" underline="none" href={PERSONAL_WEBSITE_URL}>
      <ButtonBase>
        <Box display="flex" flexDirection="row" alignItems="center" p={2}>
          <Box marginRight={2}>
            <Avatar src={LOGO_URL} {...props} />
          </Box>
          <Typography variant="h6" color="textSecondary">
            Built by Chris Vouga
          </Typography>
        </Box>
      </ButtonBase>
    </Link>
  );
};

export default PersonalAttribution;
