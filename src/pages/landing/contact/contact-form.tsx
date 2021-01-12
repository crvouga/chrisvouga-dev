import {
  Box,
  Button,
  ButtonProps,
  Card,
  CardContent,
  CircularProgress,
  Container,
  Dialog,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import SendIcon from "@material-ui/icons/Send";
import { omit, pipe } from "remeda";
import React, { useRef, useState } from "react";
import { submitContactForm } from "../../../services/contact-form";
import { castEmailAddress, isValidEmailAddress } from "../../../utility";

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

const formEventToFormData = (formEvent: React.FormEvent<HTMLFormElement>) =>
  pipe(
    formEvent,
    (formEvent) => formEvent.currentTarget,
    (form) => new FormData(form),
    (formData) => Array.from(formData.entries()),
    (entries) => entries.map((entry) => entry.map((_) => _.toString())),
    Object.fromEntries
  );

type FormErrors = {
  [name: string]: { helperText: string };
};

export const ContactForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"success" | "loading" | "error" | null>(
    null
  );

  const handleSubmit = async (formEvent: React.FormEvent<HTMLFormElement>) => {
    setStatus("loading");
    try {
      formEvent.preventDefault();

      const formData = formEventToFormData(formEvent);

      const newErrors: FormErrors = {};

      if (!isValidEmailAddress(formData.emailAddress)) {
        newErrors.emailAddress = {
          helperText: "Invalid email address",
        };
        setErrors(newErrors);
        throw new Error("");
      }

      const emailAddress = castEmailAddress(formData.emailAddress);
      const message = formData.message.toString();

      await submitContactForm(emailAddress, message);

      if (formRef.current) {
        formRef.current.reset();
      }
      setStatus("success");
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <React.Fragment>
      <Dialog open={status === "loading"}>
        <Box display="flex" alignItems="center" p={2}>
          <Box marginRight={2}>
            <CircularProgress />
          </Box>
          <Typography variant="h6">Sending...</Typography>
        </Box>
      </Dialog>
      <Dialog
        open={status === "success"}
        onClick={() => {
          setStatus(null);
        }}
        onClose={() => {
          setStatus(null);
        }}
      >
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
      <form onSubmit={handleSubmit} ref={formRef}>
        <Container maxWidth="sm" disableGutters>
          <Card>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    label="Email Address"
                    type="text"
                    color="primary"
                    name="emailAddress"
                    error={"emailAddress" in errors}
                    helperText={
                      "emailAddress" in errors
                        ? errors.emailAddress.helperText
                        : ""
                    }
                    onChange={
                      "emailAddress" in errors
                        ? () => {
                            setErrors(omit(errors, ["emailAddress"]));
                          }
                        : undefined
                    }
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    color="primary"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={6}
                    label="Message"
                    type="text"
                    name="message"
                  />
                </Grid>

                <Grid container item xs direction="row-reverse">
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
