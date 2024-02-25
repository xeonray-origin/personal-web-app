const settings = {
	output: 'export',
	experimental: {
		outputStandalone: true,
	},
	compiler: {
		removeConsole: true,
	},
	devIndicators: {
		buildActivity: false,
	},
	swcMinify: true,
	staticPageGenerationTimeout: 60,
}

module.exports = settings
