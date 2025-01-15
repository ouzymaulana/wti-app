/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        homePage: "url(./../src/assets/HomePage2.svg)"
      }
    },
  },
  plugins: [],
}