import axios from "axios";
import React, { useRef, useState } from "react";
import { omit, pipe } from "remeda";
import {
  IContactFormErrors,
  IContactFormStatus,
  validateContactForm,
} from "./contact-form-domain";

// formspree dashboard: https://formspree.io/forms/xqkgwwnv/integration
export const FORMSPREE_ENDPOINT = "https://formspree.io/f/xqkgwwnv";

const formEventToFormData = (formEvent: React.FormEvent<HTMLFormElement>) =>
  pipe(
    formEvent,
    (formEvent) => formEvent.currentTarget,
    (form) => new FormData(form),
    (formData) => Array.from(formData.entries()),
    (entries) => entries.map((entry) => entry.map((_) => _.toString())),
    Object.fromEntries
  );

export const useContactForm = () => {
  const ref = useRef<HTMLFormElement | null>(null);
  const [errors, setErrors] = useState<IContactFormErrors>({});
  const [status, setStatus] = useState<IContactFormStatus>(null);

  const clearError = (key: keyof IContactFormErrors) => {
    setErrors((errors) => omit(errors, [key]));
  };

  const reset = () => {
    if (ref.current) {
      ref.current.reset();
    }
    setStatus(null);
    setErrors({});
  };

  const submit = async (formEvent: React.FormEvent<HTMLFormElement>) => {
    setStatus("loading");

    formEvent.preventDefault();

    const formData = formEventToFormData(formEvent);

    const result = validateContactForm(formData);

    try {
      if (result[0]) {
        const errors = result[0];
        setErrors(errors);
        throw errors;
      }

      const contactForm = result[1];

      await axios.post(FORMSPREE_ENDPOINT, contactForm);

      setStatus("success");
    } catch (error) {
      setStatus("error");
    }
  };

  return {
    submit,
    ref,
    errors,
    status,
    clearError,
    reset,
  };
};
