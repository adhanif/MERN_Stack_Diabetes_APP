/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    backgroundImage: {
      "event-Image": "url(/src/images/hands3.jpg)",
      "login-Image": "url(/src/images/woodenDoor2.jpg)",
      "signup-Image": "url(/src/images/RunWithUs2.jpg)",
    },
    screens: {
      xxs: "360px",
      xs: "530px",
      ...defaultTheme.screens,
    },
    extend: {
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        xl: "1.25rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
      },
      textColor: {
        thistle: "var(--thistle)",
        denim: "var(--denim)",
        skin: {
          base: "var(--color-text-base)",
          primary: "var(--color-text-primary)",
          inverted: "var(--color-text-inverted)",
          secondary: "var(--color-text-secondary)",
          "outline-hover": "var(--color-text-outline-hover)",
          "form-error": "var(--color-text-form-error)",
        },
      },
      backgroundColor: {
        skin: {
          fill: "var(--color-fill)",
          "button-primary": "var(--color-button-primary)",
          "button-primary-hover": "var(--color-button-primary-hover)",
          "button-secondary": "var(--color-button-secondary)",
          "button-secondary-hover": "var(--color-button-secondary-hover)",
          "button-outline": "var(--color-button-outline)",
          "button-outline-hover": "var(--color-button-outline-hover)",
        },
      },
      borderColor: {
        skin: {
          "border-outline": "var(--color-border-outline)",
          "border-outline-hover": "var(--color-border-outline-hover)",
        },
      },
      colors: {
        lilac: "#BDB2C9",
        whiteGrey: "#F4F4F4",
        mint: "#B8C4B9",
        grey: "#383740",
      },
    },
  },
  plugins: [],
};
