import {
  Box,
  Button,
  Card,
  Grid,
  makeStyles,
  TextField,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import React from "react";
import { EmailAddress } from "../../../utility";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    maxWidth: theme.breakpoints.values.sm,
    margin: "auto",
    padding: theme.spacing(2),
  },
  textField: {
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(2),
  },
  submitButton: {
    color: "#fff",
    fontWeight: "bold",
  },
}));

export interface IContactForm {
  submit(emailAddress: EmailAddress, message: string): Promise<void>;
}

export const ContactForm = () => {
  const classes = useStyles();

  const handleSubmit = () => {
    console.log("submit");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card className={classes.form}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <TextField
              className={classes.textField}
              variant="outlined"
              fullWidth
              label="Name"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              className={classes.textField}
              variant="outlined"
              fullWidth
              label="Email"
              type="email"
            />
          </Grid>
        </Grid>

        <TextField
          className={classes.textField}
          variant="outlined"
          fullWidth
          multiline
          rows={6}
          label={"Your Message"}
        />

        <Box display="flex" flexDirection="row-reverse" p={1}>
          <Button
            type="submit"
            className={classes.submitButton}
            size="large"
            variant="contained"
            color="primary"
            endIcon={<SendIcon />}
          >
            Send
          </Button>
        </Box>
      </Card>
    </form>
  );
};
