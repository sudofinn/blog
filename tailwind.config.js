/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {},
     fontFamily: {
      quote: ['Edu VIC WA NT Beginner'],
      blog: ['Raleway'],
    }
  },
  plugins: [],
}