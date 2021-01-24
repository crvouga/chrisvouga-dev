import {
  castEmailAddress,
  IEmailAddress,
  validateEmailAddress,
} from "../../../utility/email-address";

type IContactFormMessage = string & { Message: "Message" };

export type IContactForm = {
  emailAddress: IEmailAddress;
  message: IContactFormMessage;
};

export type IContactFormErrors = {
  emailAddress: Error[];
  message: Error[];
};

export const EMPTY_CONTACT_FORM_ERRORS: IContactFormErrors = {
  emailAddress: [],
  message: [],
};

export type IContactFormStatus =
  | "loading"
  | "validation-error"
  | "error"
  | "success"
  | null;

const MIN_MESSAGE_LENGTH = 2;
const MAX_MESSAGE_LENGTH = 200;

export const validateMessage = (message: string) => {
  const errors = [];

  if (message.trim().length < MIN_MESSAGE_LENGTH) {
    errors.push(new Error("Message is too short"));
  }

  if (message.trim().length > MAX_MESSAGE_LENGTH) {
    errors.push(new Error("Message is too long"));
  }

  return errors;
};

export const castContactFormMessage = (message: string) => {
  const errors = validateMessage(message);

  if (errors.length === 0) {
    return message as IContactFormMessage;
  }

  throw errors;
};

export const validateContactForm = ({
  emailAddress,
  message,
}: {
  message: string;
  emailAddress: string;
}) => {
  return {
    emailAddress: validateEmailAddress(emailAddress),
    message: validateMessage(message),
  };
};

export const castContactForm = ({
  emailAddress,
  message,
}: {
  message: string;
  emailAddress: string;
}) => {
  return {
    emailAddress: castEmailAddress(emailAddress),
    message: castContactFormMessage(message),
  };
};
