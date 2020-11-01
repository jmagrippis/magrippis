const typography = require('@tailwindcss/typography')

module.exports = {
  purge: {
    mode: 'layers',
    layers: ['components', 'utilities'],
    content: [
      './components/**/*.tsx',
      './components/**/*.css',
      './layouts/**/*.tsx',
      './layouts/**/*.css',
      './pages/**/*.tsx',
      './pages/**/*.css',
    ],
  },
  corePlugins: {
    fontFamily: false,
  },
  variants: {
    borderStyle: ['responsive', 'focus'],
    backgroundColor: ['even'],
  },
  theme: {
    typography: (theme) => ({
      default: {
        css: {
          h1: {
            fontWeight: theme('fontWeight.default'),
            marginTop: '0',
          },
          h2: {
            fontWeight: theme('fontWeight.default'),
            marginTop: '0',
          },
          h3: {
            fontWeight: theme('fontWeight.default'),
            marginTop: '0',
          },
          img: {
            margin: '0 auto',
            boxShadow: theme('boxShadow.md'),
            borderRadius: theme('borderRadius.default'),
          },
        },
      },
      lg: {
        css: {
          h1: {
            marginTop: '0',
          },
          h2: {
            marginTop: '0',
          },
          h3: {
            marginTop: '0',
          },
          img: {
            margin: '0 auto',
          },
        },
      },
      xl: {
        css: {
          h1: {
            marginTop: '0',
          },
          h2: {
            marginTop: '0',
          },
          h3: {
            marginTop: '0',
          },
          img: {
            margin: '0 auto',
          },
        },
      },
    }),
  },
  plugins: [
    typography({
      modifiers: ['lg', 'xl'],
    }),
  ],
}
