import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import content from "../../../content/content.json";
import { SocialMediaIconButton } from "../SocialMedia";

export const Contact = () => {
  return (
    <React.Fragment>
      <Typography align="center" variant="h4" gutterBottom>
        Contact
      </Typography>
      <form>
        <Container maxWidth="sm" disableGutters>
          <Paper>
            <Box p={1} display="flex" flexDirection="column">
              <Box p={1}>
                <TextField
                  variant="outlined"
                  fullWidth
                  color="secondary"
                  label="Name"
                />
              </Box>
              <Box p={1}>
                <TextField
                  variant="outlined"
                  fullWidth
                  color="secondary"
                  label="Email"
                  type="email"
                />
              </Box>
              <Box p={1}>
                <TextField
                  variant="outlined"
                  fullWidth
                  color="secondary"
                  multiline
                  rows={6}
                  label={"Your Message"}
                />
              </Box>
              <Box display="flex" flexDirection="row" p={1}>
                <Box flex={1} />
                <Button size="large" variant="contained">
                  Submit
                </Button>
              </Box>
            </Box>
          </Paper>
        </Container>
      </form>
    </React.Fragment>
  );
};
