import axios from "axios";
import React, { useRef, useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { omit, pipe } from "remeda";
import { getContactFormEndpoint } from "../../../config";
import {
  castContactForm,
  IContactFormErrors,
  IContactFormStatus,
  validateContactForm,
} from "./contact-form-domain";

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

  const { executeRecaptcha } = useGoogleReCaptcha();

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

    const errors = validateContactForm(formData);

    if (errors.emailAddress.length > 0 || errors.message.length > 0) {
      setErrors(errors);
      setStatus("validation-error");
      return;
    }

    const contactForm = castContactForm(formData);

    try {
      await executeRecaptcha("contact_form");

      await axios.post(getContactFormEndpoint(), contactForm);
      setStatus("success");
      return;
    } catch (error) {
      setStatus("error");
      return;
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
