module.exports = {
  purge: {
    mode: 'layers',
    layers: ['components', 'utilities'],
    content: [
      './components/**/*.tsx',
      './components/**/*.css',
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
}
