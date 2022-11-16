/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    letterSpacing: {
      tightest: '-0.625px',
      wide: '0.23619px;',
    },
    fontSize: {
      big: '20px',
      small: '16px'
    },
    extend: {},
  },
  plugins: [],
}

// export const content = [
//   "./app/**/*.{js,ts,jsx,tsx}",
//   "./pages/**/*.{js,ts,jsx,tsx}",
//   "./components/**/*.{js,ts,jsx,tsx}",
// ];
// export const theme = {
//   extend: {},
// };
// export const plugins = [
//   require('@tailwindcss/forms'),
// ];
