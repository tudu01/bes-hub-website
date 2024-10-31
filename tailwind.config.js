/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#388e3c', // Replace with your brand's primary color
        secondary: '#f57c00', // Replace with a secondary color
      },
    },
  },
  plugins: [],
};

