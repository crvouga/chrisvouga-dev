import { Box, BoxProps, Container } from "@material-ui/core";

export const Section = ({
  children,
  ...props
}: React.PropsWithChildren<BoxProps>) => {
  return (
    <Container maxWidth="lg">
      <Box component="section" paddingY={6} {...props}>
        {children}
      </Box>
    </Container>
  );
};
