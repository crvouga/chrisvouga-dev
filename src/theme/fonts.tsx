export const PreloadFonts = () => {
  return (
    <>
      {[
        "/fonts/raleway-v19-latin-600.woff2",
        "/fonts/raleway-v19-latin-600.woff2",
        "/fonts/roboto-v20-latin-500.woff2",
        "/fonts/roboto-v20-latin-900.woff2",
      ].map((href) => (
        <link
          key={href}
          rel="preload"
          href={href}
          as="font"
          crossOrigin="none"
          type="font/woff2"
        />
      ))}
    </>
  );
};
