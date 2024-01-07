/** @type {import('tailwindcss').Config} */
export default {
  content: ["./client/views/**/*.{html,js}", "./server/**/*.py"],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};