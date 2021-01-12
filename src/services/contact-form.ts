import axios from "axios";
import { EmailAddress } from "../utility";

export type ISubmitContactForm = (
  email: EmailAddress,
  message: string
) => Promise<void>;

// formspree dashboard: https://formspree.io/forms/xqkgwwnv/integration
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xqkgwwnv";
export const submitContactForm: ISubmitContactForm = async (email, message) => {
  try {
    const data = {
      email,
      message,
    };
    await axios.post(FORMSPREE_ENDPOINT, data);
  } catch (error) {
    throw error;
  }
};
