const colors = require('tailwindcss/colors')
const typography = require('@tailwindcss/typography')

module.exports = {
  content: ['./src/**/*.tsx', './src/**/*.css'],
  corePlugins: {
    fontFamily: false,
  },
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        'twitter-blue': '#1da1f2',
        gray: colors.neutral,
      },
      typography: (theme) => ({
        DEFAULT: {
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
              borderRadius: theme('borderRadius.DEFAULT'),
            },
            video: {
              margin: '0 auto',
              boxShadow: theme('boxShadow.md'),
              borderRadius: theme('borderRadius.DEFAULT'),
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
  },
  plugins: [
    typography({
      modifiers: ['lg', 'xl'],
    }),
  ],
}
