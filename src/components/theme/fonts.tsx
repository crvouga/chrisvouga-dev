import React from "react";

//why?: https://stackoverflow.com/questions/45983301/google-pagespeed-eliminate-render-blocking-resources-above-the-fold-caused-fro
const handleLoad = (event: React.SyntheticEvent<HTMLLinkElement, Event>) => {
  const link = event.currentTarget;
  link.onload = null;
  link.rel = "stylesheet";
};

const FontStyleSheetLink = ({ href }: { href: string }) => {
  return (
    <link
      onLoad={handleLoad}
      href={href}
      as="style"
      rel="stylesheet preload prefetch"
      type="text/css"
      crossOrigin="anonymous"
    />
  );
};

const RalewayAndRobotoHref =
  "https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500&display=swa";

export const fontFamilies = {
  heading: "Raleway",
  body: "Roboto",
};

export const Fonts = () => {
  return (
    <React.Fragment>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <FontStyleSheetLink href={RalewayAndRobotoHref} />
    </React.Fragment>
  );
};
