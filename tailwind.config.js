module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // Example plugin
    require('@tailwindcss/forms'),
  ],
};
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/*/.{js,jsx,ts,tsx}", // Make sure this points to your JS/JSX/TS/TSX files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};