import {
  Box,
  Button,
  Card,
  makeStyles,
  TextField,
  Grid,
} from "@material-ui/core";
import React from "react";
import SendIcon from "@material-ui/icons/Send";
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

export const ContactForm = () => {
  const classes = useStyles();
  return (
    <form>
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
