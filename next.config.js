const withPlugins = require('next-compose-plugins')
const svgr = require('next-svgr')

module.exports = withPlugins([svgr], {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx', 'md'],
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
})
