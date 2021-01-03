import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Avatar,
} from "@material-ui/core";
import React from "react";

// const useStyles = makeStyles((theme) => ({
//   appBar: {
//     backgroudnColor:
//   }
// }));

export const NavBar = () => {
  // const classes = useStyles()
  return (
    <AppBar position="sticky" color="default" elevation={0}>
      <Box bgcolor="default">
        <Container maxWidth="lg">
          <Toolbar>
            <Avatar src={"/personal-logo.svg"} />

            <Box flex={1} />
            <Button variant="outlined" color="secondary" size="large">
              Resume
            </Button>
          </Toolbar>
        </Container>
      </Box>
    </AppBar>
  );
};
