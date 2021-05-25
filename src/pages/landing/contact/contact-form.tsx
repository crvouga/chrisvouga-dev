import Box from "@material-ui/core/Box";
import Button, { ButtonProps } from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CircularProgress from "@material-ui/core/CircularProgress";
import Container from "@material-ui/core/Container";
import Dialog from "@material-ui/core/Dialog";
import Grid from "@material-ui/core/Grid";
import TextField, { TextFieldProps } from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ErrorIcon from "@material-ui/icons/Error";
import SendIcon from "@material-ui/icons/Send";
import React from "react";
import { IContactFormStatus } from "./contact-form-domain";
import { useContactForm } from "./contact-form-hook";

const SubmitButton = (props: ButtonProps) => {
  return (
    <Button
      type="submit"
      size="large"
      style={{ color: "#fff", fontWeight: "bold" }}
      variant="contained"
      color="primary"
      endIcon={<SendIcon />}
      {...props}
    >
      Send
    </Button>
  );
};

const SuccessDialog = ({
  status,
  onClose,
}: {
  status: IContactFormStatus;
  onClose: () => void;
}) => {
  return (
    <Dialog open={status === "success"} onClick={onClose} onClose={onClose}>
      <Box p={2}>
        <Box
          width="100%"
          display="flex"
          justifyContent="center"
          color="success.main"
        >
          <CheckCircleIcon
            color="inherit"
            style={{ width: "120px", height: "120px" }}
          />
        </Box>
        <Typography align="center" variant="h5">
          Message Sent!
        </Typography>
        <Typography align="center" variant="h6" color="textSecondary">
          I'll do my best to get back to you.
        </Typography>
      </Box>
    </Dialog>
  );
};

const LoadingDialog = ({ status }: { status: IContactFormStatus }) => {
  return (
    <Dialog open={status === "loading"}>
      <Box display="flex" alignItems="center" p={2}>
        <Box marginRight={2}>
          <CircularProgress />
        </Box>
        <Typography variant="h6">Sending...</Typography>
      </Box>
    </Dialog>
  );
};

const ErrorDialog = ({
  status,
  onClose,
}: {
  status: IContactFormStatus;
  onClose: () => void;
}) => {
  return (
    <Dialog open={status === "error"} onClick={onClose} onClose={onClose}>
      <Box p={2}>
        <Box
          width="100%"
          display="flex"
          justifyContent="center"
          color="error.main"
        >
          <ErrorIcon
            color="inherit"
            style={{ width: "120px", height: "120px" }}
          />
        </Box>
        <Typography align="center" variant="h5">
          Something went wrong
        </Typography>
        <Typography align="center" variant="h6" color="textSecondary">
          Was unable to send message.
        </Typography>
      </Box>
    </Dialog>
  );
};

const EmailAddressTextField = (props: TextFieldProps) => {
  return (
    <TextField
      id="emailAddress"
      variant="outlined"
      fullWidth
      label="Email Address"
      type="email"
      color="primary"
      name="emailAddress"
      {...props}
    />
  );
};

export const MessageTextField = (props: TextFieldProps) => {
  return (
    <TextField
      id="message"
      color="primary"
      variant="outlined"
      fullWidth
      multiline
      rows={6}
      label="Message"
      type="text"
      name="message"
      {...props}
    />
  );
};

export const ContactForm = () => {
  const { ref, status, errors, clearError, submit, reset } = useContactForm();

  return (
    <React.Fragment>
      <LoadingDialog status={status} />
      <SuccessDialog status={status} onClose={reset} />
      <ErrorDialog status={status} onClose={reset} />

      <form ref={ref} onSubmit={submit}>
        <Container maxWidth="sm" disableGutters>
          <Card>
            <CardContent>
              <Grid container>
                <Grid item xs={12}>
                  <EmailAddressTextField
                    error={errors.emailAddress.length > 0}
                    helperText={errors.emailAddress?.[0]?.message ?? undefined}
                    onChange={
                      errors.emailAddress
                        ? () => {
                            clearError("emailAddress");
                          }
                        : undefined
                    }
                  />
                </Grid>

                <Grid item xs={12}>
                  <MessageTextField
                    error={errors.message.length > 0}
                    helperText={errors.message?.[0]?.message ?? undefined}
                    onChange={
                      errors.message
                        ? () => {
                            clearError("message");
                          }
                        : undefined
                    }
                  />
                </Grid>

                <Grid container item xs={12} direction="row-reverse">
                  <Grid item>
                    <SubmitButton />
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Container>
      </form>
    </React.Fragment>
  );
};
