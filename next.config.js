const withSvgr = require('next-svgr')

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = withSvgr({
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

module.exports = nextConfig
