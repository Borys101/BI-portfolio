/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      fontFamily: {
        generalsans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: "#010103",
        accent: {
          // DEFAULT: "#00ff99",
          DEFAULT: "#2850ff",
          hover: "#1f3fcc"
        }
      },
    },
  },
  plugins: [],
};