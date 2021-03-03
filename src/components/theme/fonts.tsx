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

export const Fonts = () => {
  return (
    <React.Fragment>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <FontStyleSheetLink href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" />
    </React.Fragment>
  );
};
