import Raleway600 from "../../public/fonts/raleway-v19-latin-600.woff2";
import Raleway800 from "../../public/fonts/raleway-v19-latin-800.woff2";
import Roboto500 from "../../public/fonts/roboto-v20-latin-500.woff2";
import Roboto900 from "../../public/fonts/roboto-v20-latin-900.woff2";

// helpful tool: http://google-webfonts-helper.herokuapp.com/fonts/raleway?subsets=latin

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
          crossOrigin=""
          type="font/woff2"
        />
      ))}
    </>
  );
};

const raleway600latin = {
  fontFamily: "Raleway",
  fontStyle: "normal",
  fontWeight: 600,
  src: `local('Raleway'),
        local('Raleway-Regular'),
        url(${Raleway600}) format('woff2')
       `,
};

const raleway800latin = {
  fontFamily: "Raleway",
  fontStyle: "bold",
  fontWeight: 800,
  src: `local('Raleway'),
        local('Raleway-Bold'),
        url(${Raleway800}) format('woff2')
       `,
};

const roboto500latin = {
  fontFamily: "Roboto",
  fontStyle: "normal",
  fontWeight: 500,
  src: `local('Roboto'),
        local('Roboto-Regular'),
        url(${Roboto500}) format('woff2')
       `,
};

const roboto900latin = {
  fontFamily: "Roboto",
  fontStyle: "bold",
  fontWeight: 900,
  src: `local('Roboto'),
        local('Roboto-Bold'),
        url(${Roboto900}) format('woff2')
       `,
};

export const fontFamilies = {
  heading: raleway600latin.fontFamily,
  body: roboto500latin.fontFamily,
};

export const fontFaces = [
  raleway600latin,
  raleway800latin,
  roboto500latin,
  roboto900latin,
];
