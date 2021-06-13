const withPlugins = require('next-compose-plugins')
const svgr = require('next-svgr')

module.exports = withPlugins([svgr], {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  redirects() {
    return [
      {
        source: '/tube',
        destination: 'https://www.youtube.com/channel/UCm1ALyg61uhPoTnZBm7mY2g',
        permanent: false,
      },
    ]
  },
})
