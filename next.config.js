const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')
const svgr = require('next-svgr')
const rehypePrism = require('@mapbox/rehype-prism')

const mdx = require('next-mdx-enhanced')({
  defaultLayout: true,
  fileExtensions: ['mdx', 'md'],
  rehypePlugins: [rehypePrism],
})

module.exports = withPlugins(
  [
    mdx,
    [
      optimizedImages,
      {
        handleImages: ['jpeg', 'png', 'webp', 'gif'],
      },
    ],
    svgr,
  ],
  { pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx', 'md'] }
)
