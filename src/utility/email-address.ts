import * as EmailValidator from "email-validator";

export const isValidEmailAddress = EmailValidator.validate;

export type EmailAddress = string & { readonly __type__: "EmailAddress" };

export const castEmailAddress = (emailAddress: string) => {
  if (isValidEmailAddress(emailAddress)) {
    return emailAddress as EmailAddress;
  }
  throw new Error("invalid email address");
};
