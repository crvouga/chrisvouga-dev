import { Avatar, Button, ButtonProps } from "@material-ui/core";
import React from "react";
import { PERSONAL_SITE_URL } from "./constants";

const AttributionButton = (props: ButtonProps) => {
  return (
    <Button
      variant="outlined"
      href={PERSONAL_SITE_URL}
      startIcon={
        <Avatar
          style={{ width: "24px", height: "24px" }}
          src={PERSONAL_SITE_URL + "personal-logo-dark.svg"}
        />
      }
      {...props}
    >
      Chris Vouga
    </Button>
  );
};

export default AttributionButton;
