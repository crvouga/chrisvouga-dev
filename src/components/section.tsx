import { Box, BoxProps } from "@material-ui/core";

export const Section = (props: BoxProps) => {
  return <Box component="section" paddingY={2} {...props} />;
};
