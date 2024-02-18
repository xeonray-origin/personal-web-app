const settings = {
	output: 'standalone',
	experimental: {
		outputStandalone: true,
	},
	compiler: {
		removeConsole: false,
	},
	devIndicators: {
		buildActivity: false,
	},
	swcMinify: true,
	staticPageGenerationTimeout: 60,
}

module.exports = settings
