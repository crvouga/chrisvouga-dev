import { useCallback, useState } from "react";

export const useBoolean = (initialValue: boolean) => {
  const [value, setValue] = useState(initialValue);

  const setFalse = useCallback(() => {
    setValue(false);
  }, [setValue]);

  const setTrue = useCallback(() => {
    setValue(true);
  }, [setValue]);

  return {
    value,
    setTrue,
    setFalse,
  };
};
