import withMT from '@material-tailwind/react/utils/withMT'

module.exports = withMT({
	content: ['./src/**/*.{ts,tsx}'],

	theme: {
		darkMode: true,
		colors: {
			primary: '#10191d',
			secondary: '#00dac6',
			white: '#ffffff',
			black: {
				'default': '#0e171b',
				'500': '#0E171B81',
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
			sans: ['Poppins', 'sans-serif'],
			serif: ['Poppins', 'serif'],
			body: ['Poppins', 'sans-serif'],
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
