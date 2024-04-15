/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightBlue: '#4EA8DE',
        lightPurple: '#5E60CE',
        blueDark: "#1E6F9F",
        lightGray: "#808080",
        darkGray: "#0D0D0D",
        gray: "#262626",
      },
    },
  },
  plugins: [],
};
