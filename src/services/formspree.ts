import axios from "axios";
import { IContactForm } from "../pages/landing/contact/contact-form";

export const getFormspreeEndpoint = () => {
  const endpoint = process.env.FORMSPREE_ENDPOINT;
  if (endpoint) {
    return endpoint;
  }
  throw new Error("process.env.FORMSPREE_ENDPOINT is undefined");
};

export const FormSpreeContactFrom: IContactForm = {
  submit: async (email, message) => {
    try {
      const data = {
        email,
        message,
      };
      await axios.post(getFormspreeEndpoint(), data);
    } catch (error) {
      throw error;
    }
  },
};
