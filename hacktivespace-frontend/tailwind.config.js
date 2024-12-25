/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js", // Add this line
  ],
  theme: {
    extend: {},
  },
  darkMode: "class", // Optional: Enable dark mode
  plugins: [require("tw-elements-react/dist/plugin.cjs")], // Add this line
};