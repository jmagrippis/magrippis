const typography = require('@tailwindcss/typography')

module.exports = {
  purge: {
    mode: 'layers',
    layers: ['components', 'utilities'],
    content: ['./src/**/*.tsx'],
  },
  corePlugins: {
    fontFamily: false,
  },
  variants: {
    borderStyle: ['responsive', 'focus'],
    backgroundColor: ['even', 'hover'],
  },
  theme: {
    extend: {
      colors: {
        'twitter-blue': '#1da1f2',
      },
    },
    typography: (theme) => ({
      default: {
        css: {
          h1: {
            fontWeight: theme('fontWeight.normal'),
            marginTop: '0',
          },
          h2: {
            fontWeight: theme('fontWeight.normal'),
            marginTop: '0',
          },
          h3: {
            fontWeight: theme('fontWeight.normal'),
            marginTop: '0',
          },
          a: {
            color: theme('colors.purple.600'),
            '&:hover': {
              color: theme('colors.purple.800'),
            },
          },
          img: {
            margin: '0 auto',
            boxShadow: theme('boxShadow.md'),
            borderRadius: theme('borderRadius.default'),
          },
          video: {
            margin: '0 auto',
            boxShadow: theme('boxShadow.md'),
            borderRadius: theme('borderRadius.default'),
          },
          pre: {
            fontFamily: '"Fira Code", monospace',
          },
          code: {
            backgroundColor: theme('colors.purple.100'),
            color: theme('colors.purple.900'),
            fontFamily: '"Fira Code", monospace',
            fontWeight: theme('fontWeight.normal'),
            paddingLeft: theme('padding.2'),
            paddingRight: theme('padding.2'),
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
