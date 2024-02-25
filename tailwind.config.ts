import withMT from '@material-tailwind/react/utils/withMT'

module.exports = withMT({
	content: ['./src/**/*.{ts,tsx}'],
	theme: {
		darkMode: false,
		colors: {
			primary: {
				dark: '#10191d',
				default: '#f0f2f5',
			},
			secondary: {
				dark: '#00dac6',
				default: '#5e8081',
			},
			white: {
				default: '#ffffff',
			},
			black: {
				default: '#e1e1e1',
				dark: '#0E171B81',
			},
			warning: '#CB313B',
			success: '#00DAC6',
			info: '#2994D2',
		},
		boxShadow: {
			'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
			'DEFAULT':
				'0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
			'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
			'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
			'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
			'2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
			'inner': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
			'none': '0 0 rgb(0, 0 / 0, 0)',
		},
		fontFamily: {
			sans: ['var(--font-poppins)'],
			serif: ['var(--font-poppins)'],
			body: ['var(--font-poppins)'],
		},
		screen: {
			'xs': '340px',
			'sm': '400px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
			'2xl': '1536px',
		},
	},
	plugins: [],
})
