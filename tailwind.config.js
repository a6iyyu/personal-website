module.exports = {
  content: [
    "./client/views/**/*.html",
    "!../../**/node_modules",
    "../../**/*.js",
    "../../**/*.py",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};