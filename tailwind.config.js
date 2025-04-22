/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        beige: "#fffbf3",
        red: "#8c0000"
      },
      fontFamily: {
        custom: ["Alata", "sans-serif"],
      },
    },
  },
  plugins: [],
};
