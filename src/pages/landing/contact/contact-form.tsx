import {
  Box,
  Button,
  makeStyles,
  Paper,
  TextField,
  Card,
} from "@material-ui/core";
import React from "react";

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
    color: theme.palette.text.primary,
    fontWeight: "bold",
  },
}));

export const ContactForm = () => {
  const classes = useStyles();
  return (
    <form>
      <Card className={classes.form}>
        <TextField
          className={classes.textField}
          variant="outlined"
          fullWidth
          label="Name"
        />

        <TextField
          className={classes.textField}
          variant="outlined"
          fullWidth
          label="Email"
          type="email"
        />

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
            className={classes.submitButton}
            size="large"
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
        </Box>
      </Card>
    </form>
  );
};
