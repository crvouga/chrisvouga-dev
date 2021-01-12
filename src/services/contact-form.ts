import { EmailAddress } from "../utility";

export interface IContactForm {
  submit(emailAddress: EmailAddress, message: string): Promise<void>;
}
