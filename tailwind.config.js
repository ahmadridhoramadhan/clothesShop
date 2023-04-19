/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./components/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth : {
        '10xl' : '100rem',
        '8xl' : '88rem',
      },
      screens : {
        'xs' : '380px',
      },
    },
  },
  plugins: [],
}
