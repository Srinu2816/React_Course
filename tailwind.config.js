/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
const colors = require('tailwindcss/colors');


module.exports = {
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      primary: '#AEAFB8',
      secondary: '#343437',
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      purple: '#3f3cbb',
      midnight: '#121063',
      metal: '#565584',
      tahiti: '#3ab7bf',
      silver: '#ecebff',
      bubblegum: '#ff77e9',
      bermuda: '#78dcca',
    },
  },
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbite.plugin(),
  ],
}

