const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./_book_call/*.md",
    "./_includes/**/*.html",
    "./_layouts/*.html",
    "./_pages/*.{html, md}",
    "./_posts/*.md",
    "./_results/*.md",
    "./_sections/*.md",
    "./_src/**/*.{js,css}",
    "./_submissions/*.md",
    "./jobs/*.md",
    "./portfolio/*.md",
    "./services/*.md",
    "./technology/*.md"
  ],
  theme: {
    extend: {
      colors: {
        'red': '#FF2A00',
      },
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}

