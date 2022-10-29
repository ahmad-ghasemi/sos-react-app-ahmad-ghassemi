/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/**/**/*.{js,ts,jsx,tsx}",
    "./src/components/profile/ui/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
    "./src/lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
        "2xl": "1240px",
      },
    },
    screens: {
      xs: '490px',
      sm: '480px',
      lg1: '1025px',
      '2xl': '1500px',
      '3xl': '1780px',
      ...defaultTheme.screens,
    },
    extend: {
      screens: {
        xs: "490px",
        sm: "480px",
        lg: "1025px",
        "2xl": "1500px",
        "3xl": "1780px",
        ...defaultTheme.screens,
        // '3xl': '2100px',
      },
      fontFamily: {
        body: ["azo-sans-web", "system-ui", "sans-serif"],
        heading: ["azo-sans-web", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}