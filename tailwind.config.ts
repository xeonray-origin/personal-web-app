import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'
import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
		'./src/pages/**/*.{ts,tsx}',
		'./src/components/**/*.{ts,tsx}',
		'./src/app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	prefix: '',
	theme: {
		container: {
			center: true,
			padding: {
				'DEFAULT': '1rem',
				'sm': '2rem',
				'lg': '4rem',
				'xl': '5rem',
				'2xl': '6rem',
			},
		},
		extend: {
			colors: {
				background: {
					DEFAULT: 'hsl(var(--background))',
					muted: 'hsl(var(--background-muted))',
				},
				foreground: {
					DEFAULT: 'hsl(var(--foreground))',
					muted: 'hsl(var(--foreground-muted))',
				},
				hover: 'hsl(var(--hover) / 5%)',
				canvas: 'hsl(var(--canvas))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					hover: 'hsl(var(--primary-hover))',
					contrast: 'hsl(var(--primary-contrast))',
					foreground: 'hsl(var(--primary-foreground))',
					muted: 'hsl(var(--primary-muted))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					hover: 'hsl(var(--secondary-hover))',
					contrast: 'hsl(var(--secondary-contrast))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				fontFamilty: {
					display: 'Inter',
				},
				fontSize: {
					'xs': '11px',
					'sm': '12px' /* 12px */,
					'base': '14px',
					'lg': '16px',
					'xl': '18px',
					'2xl': '20px',
					'3xl': '24px',
				},
				borderRadius: {
					none: '0',
					sm: '.125rem',
					DEFAULT: '.25rem',
					lg: '.5rem',
					full: '9999px',
				},
				transitionTimingFunction: {
					snap: 'cubic-bezier(0.87, 0, 0.13, 1)',
				},
			},
		},
	},
	plugins: [],
} satisfies Config
