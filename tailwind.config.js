/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", // Scans everything inside src
    "./index.html", // Scans the root index if you have one
  ],
  theme: {
    extend: {
      fontFamily: {
        handwritten: ["Caveat", "cursive"],
      },
    },
  },
  plugins: [],
};
