const {withContentlayer} = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		serverActions: true,
		typedRoutes: true,
	},
	reactStrictMode: true,
	images: {
		formats: ['image/avif', 'image/webp'],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'img.youtube.com',
				port: '',
				pathname: '/vi/**',
			},
		],
	},
	webpack(config) {
		// Grab the existing rule that handles SVG imports
		const fileLoaderRule = config.module.rules.find((rule) =>
			rule.test?.test?.('.svg'),
		)

		config.module.rules.push(
			// Reapply the existing rule, but only for svg imports ending in ?url
			{
				...fileLoaderRule,
				test: /\.svg$/i,
				resourceQuery: /url/, // *.svg?url
			},
			// Convert all other *.svg imports to React components
			{
				test: /\.svg$/i,
				issuer: {not: /\.(css|scss|sass)$/},
				resourceQuery: {not: /url/}, // exclude if *.svg?url
				loader: '@svgr/webpack',
			},
		)

		// Modify the file loader rule to ignore *.svg, since we have it handled now.
		fileLoaderRule.exclude = /\.svg$/i

		return config
	},
	redirects() {
		return [
			{
				source: '/tube',
				destination: 'https://www.youtube.com/@johnnifytech?sub_confirmation=1',
				permanent: false,
			},
		]
	},
}

module.exports = withContentlayer(nextConfig)
