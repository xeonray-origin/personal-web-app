import nextJest from 'next/jest.js'
import type { Config } from 'jest'

const createJestConfig = nextJest({
	// Provide the path to your Next.js app to load next.config.js and .env files in your test environment
	dir: './',
})

// Add any custom config to be passed to Jest
const config: Config = {
	coverageProvider: 'v8',
	testEnvironment: 'jsdom',
	testPathIgnorePatterns: [
		'<rootDir>/.next/',
		'<rootDir>/node_modules/',
		'<rootDir>/coverage',
		'<rootDir>/dist',
	],
	coverageThreshold: {
		global: {
			branches: 90,
			functions: 90,
			statements: 90,
			lines: 90,
		},
	},
	moduleNameMapper: {
		'@/(.*)': '<rootDir>/src/$1',
		'@ui': '<rootDir>/src/components/ui',
		'@config': '<rootDir>/src/config',
		'^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
	},
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = async () => ({
	...(await createJestConfig(config)()),
	collectCoverageFrom: [
		'pages/**/*.{js,jsx,ts,tsx}',
		'features/**/*.{js,jsx,ts,tsx}',
		'components/**/*.{js,jsx,ts,tsx}',
		'!src/**/*.d.ts',
		'!src/reportWebVitals.ts',
		'!**/node_modules/**',
	],
	transformIgnorePatterns: ['node_modules/(?!(swiper|ssr-window|dom7)/)'],
})
