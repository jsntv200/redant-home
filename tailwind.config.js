const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./_assessment_book_call/*.md",
    "./_assessment_results/*.md",
    "./_assessment_sections/*.md",
    "./_assessment_submissions/*.md",
    "./_includes/**/*.html",
    "./_layouts/*.html",
    "./_pages/**/*.{html, md}",
    "./_posts/*.md",
    "./_src/**/*.{js,css}",
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
          50: '#918BF7',
          100: '#635BFF',
          200: '#5951E5',
        },
        'red': {
          50: '#FF5533',
          100: '#FF2A00',
          200: '#E52500',
        },
        'yellow': {
          100: '#F8D448',
        },
        '12wbt': {
          50: '#629EE6',
          100: '#0079E4',
          200: '#006CCD',
        },
        'accr': {
          50: '#4d3de1',
          100: '#4d3de1',
        },
        'bank-of-queensland': {
          50: '#fec44a',
          100: '#fec44a',
        },
        'beautyheaven': {
          50: '#00deff',
          100: '#00deff',
        },
        'bondi-vet': {
          50: '#2991f2',
          100: '#2991f2',
        },
        'campaign-xpress': {
          50: '#00aeeb',
          100: '#00aeeb',
        },
        'gigcar': {
          50: '#E96146',
          100: '#E96146',
        },
        'huggies': {
          50: '#EC7970',
          100: '#FE352B',
          200: '#E42F26',
        },
        'know-anyone': {
          50: '#009EFF',
          100: '#009EFF',
        },
        'managed': {
          50: '#8C66D2',
          100: '#6522C9',
          200: '#5A1EB4',
        },
        'matrix-education': {
          50: '#a30133',
          100: '#a30133',
        },
        'mentor': {
          50: '#ba0970',
          100: '#ba0970',
        },
        'momentum': {
          50: '#00deff',
          100: '#00deff',
        },
        'move': {
          50: '#bdd736',
          100: '#bdd736',
        },
        'mup': {
          50: '#1a1a1a',
          100: '#1a1a1a',
        },
        'nps': {
          50: '#613b90',
          100: '#613b90',
        },
        'pearsons-florist': {
          50: '#658f80',
          100: '#658f80',
        },
        'pearsons-nav-admin': {
          50: '#658F80',
          100: '#658F80',
        },
        'pearsons-school-of-floristry': {
          50: '#658F80',
          100: '#658F80',
        },
        'placeos': {
          50: '#c92366',
          100: '#c92366',
        },
        'raywhite': {
          50: '#ffe512',
          100: '#ffe512',
        },
        'redant': {
          50: '#cd232e',
          100: '#cd232e',
        },
        'selleys-diy': {
          50: '#113770',
          100: '#113770',
        },
        'smata': {
          50: '#79e0cb',
          100: '#79e0cb',
        },
        'sydney-trains': {
          50: '#e56e0f',
          100: '#e56e0f',
        },
        'the-grants-hub': {
          50: '#553b96',
          100: '#553b96',
        },
        'tribe': {
          50: '#b0f',
          100: '#b0f',
        },
        'whats-on': {
          50: '#f7d42e',
          100: '#f7d42e',
        },
        'yates': {
          50: '#8cc63f',
          100: '#8cc63f',
        },
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.40)',
      },
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  safelist: [
    {
      pattern: /bg-(red|cyan|12wbt|managed|huggies)-(100|200)/,
      variants: ['hover'],
    },{
      pattern: /bg-(red|cyan|12wbt|accr|bank-of-queensland|beautyheaven|bondi-vet|campaign-xpress|gigcar|huggies|know-anyone|managed|matrix-education|mentor|momentum|move|mup|nps|pearsons-florist|pearsons-nav-admin|pearsons-school-of-floristry|placeos|raywhite|redant|selleys-diy|smata|sydney-trains|the-grants-hub|tribe|whats-on|yates)-100\/25/,
    },{
      pattern: /border-(red|cyan|purple)-(50|100|100\/10)/,
    },{
      pattern: /from-(red|cyan|12wbt|accr|bank-of-queensland|beautyheaven|bondi-vet|campaign-xpress|gigcar|huggies|know-anyone|managed|matrix-education|mentor|momentum|move|mup|nps|pearsons-florist|pearsons-nav-admin|pearsons-school-of-floristry|placeos|raywhite|redant|selleys-diy|smata|sydney-trains|the-grants-hub|tribe|whats-on|yates)-100\/25/,
    },{
      pattern: /text-(red|cyan|purple|12wbt|accr|bank-of-queensland|beautyheaven|bondi-vet|campaign-xpress|gigcar|huggies|know-anyone|managed|matrix-education|mentor|momentum|move|mup|nps|pearsons-florist|pearsons-nav-admin|pearsons-school-of-floristry|placeos|raywhite|redant|selleys-diy|smata|sydney-trains|the-grants-hub|tribe|whats-on|yates)-(50|100)/,
      variants: ['hover'],
    },{
      pattern: /text-(red|cyan)-100\/10/,
    },
  ],
  plugins: [],
}