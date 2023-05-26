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
        'blue': {
          100: '#00ADCE',
          200: '#008BA6',
        },
        'light-grey': '#BFBFBF',
        'purple': {
          100: '#635BFF',
          200: '#5951E5',
        },
        'red': {
          100: '#FF2A00',
          200: '#E52500',
        }
      },
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}