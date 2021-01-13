import * as EmailValidator from "email-validator";

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

export type IContactFormStatus =
  | "loading"
  | "validation-error"
  | "error"
  | "success"
  | null;

/* 


*/

export const validateEmailAddress = (emailAddress: string) => {
  const errors = [];

  if (!EmailValidator.validate(emailAddress)) {
    errors.push(new Error("Invalid email address"));
  }

  return errors;
};

const castEmailAddress = (emailAddress: string) => {
  const errors = validateEmailAddress(emailAddress);
  if (errors.length === 0) {
    return emailAddress as IEmailAddress;
  }
  throw errors;
};

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

export const castMessage = (message: string) => {
  const errors = validateMessage(message);
  if (errors.length === 0) {
    return message as IMessage;
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
    message: castMessage(message),
  };
};
