import * as EmailValidator from "email-validator";

export type EmailAddress = string & { readonly __type__: "EmailAddress" };

export const castEmailAddress = (emailAddress: string) => {
  if (EmailValidator.validate(emailAddress)) {
    return emailAddress as EmailAddress;
  }
  throw new Error("invalid email address");
};
