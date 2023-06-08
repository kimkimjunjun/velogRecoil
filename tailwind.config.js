/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          primary: '#000000',
          secondary: '#333333',
        },
        light: {
          primary: '#ffffff',
          secondary: '#dddddd',
        }
      }
    },
  },
  plugins: [],
}

