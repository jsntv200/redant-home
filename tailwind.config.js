/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./_book_call/*.md",
    "./_includes/**/*.html",
    "./_layouts/*.html",
    "./_pages/*.{html, md}",
    "./_posts/*.md",
    "./_results/*.md",
    "./_sections/*.md",
    "./_submissions/*.md",
    "./jobs/*.md",
    "./portfolio/*.md",
    "./services/*.md",
    "./technology/*.md",
    "./_src/**/*.{js,css}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

