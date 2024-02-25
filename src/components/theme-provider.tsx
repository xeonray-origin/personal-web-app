'use client'

import { ThemeProvider } from 'next-themes'

const CustomThemeProvider = (props: any) => {
	const { children } = props
	return (
		<ThemeProvider attribute='class' defaultTheme='light'>
			{children}
		</ThemeProvider>
	)
}

export default CustomThemeProvider
