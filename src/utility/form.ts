export const getFormValue = (key: string, form: HTMLFormElement) => {
  const formData = new FormData(form);

  const value = formData.get(key);

  if (typeof value === "string") {
    return value;
  }

  throw new Error(`failed to get form value from ${key}`);
};
