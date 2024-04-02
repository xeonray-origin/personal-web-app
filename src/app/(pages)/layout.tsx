'use client'

import { Poppins } from 'next/font/google'

import '@/styles/globals.css'

import { FloatingMenu, Sidebar } from '@/components'
import { cn } from '@/lib/utils'
import { ThemeProvider, useTheme } from 'next-themes'

const font = Poppins({
	subsets: ['latin'],
	display: 'swap',
	weight: ['400', '500', '600', '700'],
	variable: '--font-poppins',
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html className={font.variable} lang='en' suppressHydrationWarning>
			<body className={cn('bg-background antialiased')}>
				<ThemeProvider attribute='class' defaultTheme='light'>
					<div className='dark:bg-black-dark flex bg-black-default'>
						<Sidebar />
						<div className='w-100 h-[100%] max-w-[2400px] bg-primary-default pb-20 pr-0 dark:bg-primary-dark lg:ml-[14rem] lg:pr-5'>
							{children}
						</div>
						<div className='fixed bottom-5 right-5 lg:hidden'>
							<FloatingMenu />
						</div>
					</div>
				</ThemeProvider>
			</body>
		</html>
	)
}
