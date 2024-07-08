const settings = {
	output: 'export',
	experimental: {
		outputStandalone: true,
	},

	devIndicators: {
		buildActivity: false,
	},
	swcMinify: true,
	staticPageGenerationTimeout: 60,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**.unsplash.com',
				pathname: '/**',
			},
		],
	},
}

module.exports = settings
