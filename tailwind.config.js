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
        'cyan': {
          100: '#00ADCE',
          200: '#008BA6',
        },
        'gray': {
          50: '#E6E6E6',
          100: '#BFBFBF',
          200: '#191919',
        },
        'purple': {
          100: '#635BFF',
          200: '#5951E5',
        },
        'red': {
          100: '#FF2A00',
          200: '#E52500',
        },
        '12wbt': {
          100: '#0079E4',
          200: '#006CCD',
        },
        'huggies': {
          100: '#FE352B',
          200: '#E42F26',
        },
        'managed': {
          100: '#6522C9',
          200: '#5A1EB4',
        },
      },
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}