import * as EmailValidator from "email-validator";
import { tuple } from "../../../utility";

const MIN_MESSAGE_LENGTH = 2;
const MAX_MESSAGE_LENGTH = 200;

type IEmailAddress = string & { type: "EmailAddress" };
type IMessage = string & { type: "Message" };

export type IContactForm = {
  emailAddress: IEmailAddress;
  message: IMessage;
};

export type IContactFormErrors = {
  emailAddress?: Error[] | null;
  message?: Error[] | null;
};

export type IContactFormStatus = "loading" | "error" | "success" | null;

/* 


*/

export const validateEmailAddress = (emailAddress: string) => {
  const errors = [];

  if (!EmailValidator.validate(emailAddress)) {
    errors.push(new Error("Invalid email address"));
  }

  if (errors.length === 0) {
    return tuple(null, emailAddress as IEmailAddress);
  } else {
    return tuple(errors, null);
  }
};

export const validateMessage = (message: string) => {
  const errors = [];

  if (message.trim().length < MIN_MESSAGE_LENGTH) {
    errors.push(new Error("Message is too short"));
  }

  if (message.trim().length > MAX_MESSAGE_LENGTH) {
    errors.push(new Error("Message is too long"));
  }

  if (errors.length === 0) {
    return tuple(null, message as IMessage);
  } else {
    return tuple(errors, null);
  }
};

export const validateContactForm = (formData: {
  message: string;
  emailAddress: string;
}) => {
  const [emailAddressErrors, emailAddress] = validateEmailAddress(
    formData.emailAddress
  );
  const [messageErrors, message] = validateMessage(formData.message);

  if (emailAddress && message) {
    const contactForm: IContactForm = {
      emailAddress,
      message,
    };
    return tuple(null, contactForm);
  }

  const errors: IContactFormErrors = {
    emailAddress: emailAddressErrors,
    message: messageErrors,
  };

  return tuple(errors, null);
};
