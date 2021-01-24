import React, { useRef, useState } from "react";
import { getContactFormEndpoint } from "../../../config";
import { getFormValue } from "../../../utility";
import {
  castContactForm,
  IContactFormErrors,
  IContactFormStatus,
  validateContactForm,
  EMPTY_CONTACT_FORM_ERRORS,
} from "./contact-form-domain";

export const useContactForm = () => {
  const ref = useRef<HTMLFormElement | null>(null);
  const [errors, setErrors] = useState<IContactFormErrors>(
    EMPTY_CONTACT_FORM_ERRORS
  );
  const [status, setStatus] = useState<IContactFormStatus>(null);

  const clearError = (key: keyof IContactFormErrors) => {
    setErrors((errors) => ({
      ...errors,
      [key]: [],
    }));
  };

  const reset = () => {
    if (ref.current) {
      ref.current.reset();
    }
    setStatus(null);
    setErrors(EMPTY_CONTACT_FORM_ERRORS);
  };

  const submit = async (formEvent: React.FormEvent<HTMLFormElement>) => {
    setStatus("loading");

    formEvent.preventDefault();

    const form = formEvent.currentTarget;

    const formData = {
      emailAddress: getFormValue("emailAddress", form),
      message: getFormValue("message", form),
    };

    const errors = validateContactForm(formData);

    if (errors.emailAddress.length > 0 || errors.message.length > 0) {
      setErrors(errors);
      setStatus("validation-error");
      return;
    }

    const contactForm = castContactForm(formData);

    try {
      await fetch(getContactFormEndpoint(), {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactForm),
      });

      setStatus("success");
      return;
    } catch (error) {
      setStatus("error");
      return;
    }
  };

  return {
    ref,
    errors,
    status,
    submit,
    clearError,
    reset,
  };
};
