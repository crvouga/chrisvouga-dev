import { pipe } from "pipe-ts";
import React, { useRef, useState } from "react";
import {
  castContactForm,
  IContactFormErrors,
  IContactFormStatus,
  validateContactForm,
} from "./contact-form-domain";

const removeKey = <T>(key: keyof T, object: T) => {
  const { [key]: _, ...rest } = object;
  return rest;
};

const formEventToFormData = (formEvent: React.FormEvent<HTMLFormElement>) =>
  pipe(
    (formEvent: React.FormEvent<HTMLFormElement>) => formEvent.currentTarget,
    (form) => new FormData(form),
    (formData) => Array.from(formData.entries()),
    (entries) => entries.map((entry) => entry.map((_) => _.toString())),
    Object.fromEntries
  )(formEvent);

export const useContactForm = () => {
  const ref = useRef<HTMLFormElement | null>(null);
  const [errors, setErrors] = useState<IContactFormErrors>({});
  const [status, setStatus] = useState<IContactFormStatus>(null);

  const clearError = (key: keyof IContactFormErrors) => {
    setErrors((errors) => removeKey(key, errors));
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

    const form = formEvent.currentTarget;

    const formData = formEventToFormData(formEvent);

    const errors = validateContactForm(formData);

    if (errors.emailAddress.length > 0 || errors.message.length > 0) {
      setErrors(errors);
      setStatus("validation-error");
      return;
    }

    const contactForm = castContactForm(formData);

    try {
      await fetch(form.action, {
        method: form.method,
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
    submit,
    ref,
    errors,
    status,
    clearError,
    reset,
  };
};
