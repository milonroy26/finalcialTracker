/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#f44e5e",

          secondary: "#7cfc5f",

          accent: "#7958fc",

          neutral: "#2e242e",

          "base-100": "#e2edf3",

          info: "#96b3e9",

          success: "#4de092",

          warning: "#a17c02",

          error: "#f35877",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
