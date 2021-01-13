import React from "react";
import {
  GoogleReCaptcha,
  GoogleReCaptchaProvider,
} from "react-google-recaptcha-v3";

const getReCaptchKey = () => {
  const key = process.env.NEXT_PUBLIC_RECAPTCHA_KEY;
  if (key) {
    return key;
  }
  throw new Error("process.env.NEXT_PUBLIC_RECAPTCHA_KEY is undefined");
};

export const ReCaptchaProvider = ({
  children,
}: React.PropsWithChildren<{}>) => {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={getReCaptchKey()}>
      {children}
    </GoogleReCaptchaProvider>
  );
};

export const ReCaptcha = ({ onVerify }: { onVerify: () => void }) => {
  return <GoogleReCaptcha onVerify={onVerify} />;
};
